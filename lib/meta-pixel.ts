declare global {
  interface Window {
    fbq: (
      action: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void
  }
}

export const META_PIXEL_ID = "2338003480044925"

type StandardEvent =
  | "PageView"
  | "Lead"
  | "CompleteRegistration"
  | "Contact"
  | "InitiateCheckout"
  | "Purchase"
  | "ViewContent"
  | "AddToCart"
  | "AddPaymentInfo"
  | "Subscribe"

interface EventParams {
  content_name?: string
  content_category?: string
  content_ids?: string[]
  content_type?: string
  value?: number
  currency?: string
  [key: string]: unknown
}

export function trackEvent(eventName: StandardEvent, params?: EventParams) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, params)
  }
}

export function trackCustomEvent(eventName: string, params?: EventParams) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", eventName, params)
  }
}

export function trackLead(params?: EventParams) {
  trackEvent("Lead", params)
}

export function trackInitiateCheckout(params?: EventParams) {
  trackEvent("InitiateCheckout", params)
}

export function trackPurchase(value: number, currency = "ARS") {
  trackEvent("Purchase", { value, currency })
}

export function trackContact() {
  trackEvent("Contact")
}

export function trackViewContent(contentName: string, contentCategory?: string) {
  trackEvent("ViewContent", {
    content_name: contentName,
    content_category: contentCategory,
  })
}

interface ServerEventData {
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
  actionSource?: "website" | "app" | "phone_call" | "chat" | "email" | "other"
}

export async function sendServerEvent(data: ServerEventData) {
  try {
    const response = await fetch("/api/meta-conversions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      console.error("Error sending server event:", await response.text())
      return false
    }

    return true
  } catch (error) {
    console.error("Error sending server event:", error)
    return false
  }
}

export function getFbcFromCookie(): string | undefined {
  if (typeof document === "undefined") return undefined
  const match = document.cookie.match(/_fbc=([^;]+)/)
  return match ? match[1] : undefined
}

export function getFbpFromCookie(): string | undefined {
  if (typeof document === "undefined") return undefined
  const match = document.cookie.match(/_fbp=([^;]+)/)
  return match ? match[1] : undefined
}

export async function trackEventWithServer(
  eventName: StandardEvent,
  params?: EventParams,
  userData?: ServerEventData["userData"]
) {
  trackEvent(eventName, params)

  await sendServerEvent({
    eventName,
    eventSourceUrl: typeof window !== "undefined" ? window.location.href : undefined,
    actionSource: "website",
    userData: {
      ...userData,
      fbc: getFbcFromCookie(),
      fbp: getFbpFromCookie(),
      clientUserAgent:
        typeof navigator !== "undefined" ? navigator.userAgent : undefined,
    },
    customData: params,
  })
}
