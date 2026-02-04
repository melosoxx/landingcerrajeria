import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

const PIXEL_ID = "2338003480044925"
const ACCESS_TOKEN =
  "EAALnVyPx4y8BQp9PeMZA5fLfmMHQ8NuXr1YNy7zwWazJw4CCt1fURzZAbj2LsDjPqEJJYUQ1Ado1LIcKjIRplBzHFroRWFToGEjuFIPjLRWpxcpKMNPgtefnyXrm0B20EEc97BZAwRWAsWYamZCCbhdf3xhS4SvJkjDNIdAHfWwwz0vK91zYvZAAouXjYkYZCw5gZDZD"

function hashData(data: string | undefined): string | undefined {
  if (!data) return undefined
  return crypto
    .createHash("sha256")
    .update(data.toLowerCase().trim())
    .digest("hex")
}

interface EventData {
  eventName: string
  eventTime?: number
  userData?: {
    email?: string
    phone?: string
    firstName?: string
    lastName?: string
    city?: string
    state?: string
    country?: string
    zipCode?: string
    externalId?: string
    clientIpAddress?: string
    clientUserAgent?: string
    fbc?: string
    fbp?: string
  }
  customData?: {
    value?: number
    currency?: string
    contentName?: string
    contentCategory?: string
    contentIds?: string[]
    contentType?: string
    [key: string]: unknown
  }
  eventSourceUrl?: string
  actionSource?: string
}

export async function POST(request: NextRequest) {
  try {
    const body: EventData = await request.json()

    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown"
    const userAgent = request.headers.get("user-agent") || "unknown"

    const eventData = {
      event_name: body.eventName,
      event_time: body.eventTime || Math.floor(Date.now() / 1000),
      action_source: body.actionSource || "website",
      event_source_url: body.eventSourceUrl,
      user_data: {
        em: hashData(body.userData?.email),
        ph: hashData(body.userData?.phone),
        fn: hashData(body.userData?.firstName),
        ln: hashData(body.userData?.lastName),
        ct: hashData(body.userData?.city),
        st: hashData(body.userData?.state),
        zp: hashData(body.userData?.zipCode),
        country: hashData(body.userData?.country),
        external_id: hashData(body.userData?.externalId),
        client_ip_address: body.userData?.clientIpAddress || clientIp,
        client_user_agent: body.userData?.clientUserAgent || userAgent,
        fbc: body.userData?.fbc,
        fbp: body.userData?.fbp,
      },
      custom_data: body.customData
        ? {
            value: body.customData.value,
            currency: body.customData.currency,
            content_name: body.customData.contentName,
            content_category: body.customData.contentCategory,
            content_ids: body.customData.contentIds,
            content_type: body.customData.contentType,
          }
        : undefined,
    }

    Object.keys(eventData.user_data).forEach((key) => {
      if (
        eventData.user_data[key as keyof typeof eventData.user_data] ===
        undefined
      ) {
        delete eventData.user_data[key as keyof typeof eventData.user_data]
      }
    })

    const response = await fetch(
      `https://graph.facebook.com/v21.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [eventData],
        }),
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Meta Conversions API error:", errorText)
      return NextResponse.json(
        { error: "Failed to send event to Meta" },
        { status: response.status }
      )
    }

    const result = await response.json()
    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error("Error processing Meta conversion:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
