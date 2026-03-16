"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { videos } from "@/lib/course-content";
import { VideoPlayerModal } from "./video-player-modal";

export function VideoSection() {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  // Filtrar solo videos publicados
  const publishedVideos = videos.filter((video) => video.published);

  return (
    <div>
      <p className="mb-6 text-sm text-muted-foreground">
        {publishedVideos.length} prácticas grabadas en video con técnicas reales de apertura.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {publishedVideos.map((video) => (
          <button
            key={video.id}
            onClick={() => setSelectedVideoId(video.youtubeId)}
            className="group relative flex flex-col overflow-hidden rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-xl hover:scale-[1.02] text-left"
          >
            {/* Video Thumbnail */}
            <div className="relative aspect-video overflow-hidden bg-muted">
              <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  // Fallback a la miniatura por defecto si falla
                  e.currentTarget.src = `https://img.youtube.com/vi/${video.youtubeId}/default.jpg`;
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-yellow-400 group-hover:bg-yellow-300 group-hover:scale-110 transition-all shadow-xl">
                  <Play className="h-6 w-6 sm:h-7 sm:w-7 text-black ml-0.5" fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="flex flex-col gap-1.5 p-3 sm:p-4">
              <h3 className="font-semibold text-sm sm:text-base text-foreground line-clamp-1">
                {video.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                {video.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      <VideoPlayerModal
        youtubeId={selectedVideoId}
        onClose={() => setSelectedVideoId(null)}
      />
    </div>
  );
}
