"use client"

import { useState } from "react"
import { Play } from "lucide-react"

const videos = [
  {
    id: "T7FCjL0s608",
    title: "Dr. Dillon Small",
    source: "U.S. Air Force Academy",
    thumbnail: "https://i.ytimg.com/vi/T7FCjL0s608/hqdefault.jpg",
  },
  {
    id: "-hOSUlvP9ow",
    title: "Mental Performance Training",
    source: "Air Force Falcons",
    thumbnail: "https://i.ytimg.com/vi/-hOSUlvP9ow/hqdefault.jpg",
  },
  {
    id: "YzfpecaPDVE",
    title: "Keynote Event",
    source: "WMU Aviation",
    thumbnail: "https://i.ytimg.com/vi/YzfpecaPDVE/hqdefault.jpg",
  },
  {
    id: "FCe-RtKXQIM",
    title: "Elev8 Podcast Ep. 164 - Tactile Attention",
    source: "Tyler Johnson",
    thumbnail: "https://i.ytimg.com/vi/FCe-RtKXQIM/hqdefault.jpg",
  },
]

export function SocialProof() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <section id="in-the-field" className="relative border-t border-border py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
            See It In Action
          </p>
          <h2 className="mb-4 font-display text-5xl tracking-wider text-foreground sm:text-6xl">
            DR. DILLON SMALL
            <br />
            <span className="text-muted-foreground">IN THE FIELD</span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            From keynote stages to locker rooms, from cockpits to classrooms --
            watch Dr. Dillon Small bring the Overcoming Ordinary framework to
            life.
          </p>
        </div>

        {/* Featured Video */}
        {activeVideo ? (
          <div className="mb-8 aspect-video w-full overflow-hidden bg-secondary">
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
              title="Dr. Dillon Small video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        ) : (
          <button
            onClick={() => setActiveVideo(videos[0].id)}
            className="group relative mb-8 block aspect-video w-full overflow-hidden bg-secondary"
          >
            <img
              src={videos[0].thumbnail}
              alt={videos[0].title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/40 transition-colors group-hover:bg-background/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent bg-accent/10 text-accent backdrop-blur-sm transition-transform group-hover:scale-110">
                <Play className="ml-1 h-8 w-8 fill-accent" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-sm uppercase tracking-wider text-accent">
                {videos[0].source}
              </p>
              <p className="font-display text-2xl tracking-wider text-foreground sm:text-3xl">
                {videos[0].title}
              </p>
            </div>
          </button>
        )}

        {/* Video Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((video) => (
            <button
              key={video.id}
              onClick={() => setActiveVideo(video.id)}
              className={`group relative aspect-video overflow-hidden transition-all ${
                activeVideo === video.id
                  ? "ring-2 ring-accent"
                  : "ring-1 ring-border hover:ring-accent/50"
              }`}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/50 transition-colors group-hover:bg-background/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/40 bg-background/20 text-foreground backdrop-blur-sm transition-transform group-hover:scale-110 group-hover:border-accent group-hover:text-accent">
                  <Play className="ml-0.5 h-4 w-4 fill-current" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 p-3">
                <p className="text-[10px] uppercase tracking-wider text-accent">
                  {video.source}
                </p>
                <p className="text-left font-display text-sm tracking-wider text-foreground">
                  {video.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
