"use client"

import { useState, useRef, useEffect } from "react"
import { Play } from "lucide-react"

interface CourseVideoProps {
  videoUrl?: string
  videoTitle?: string
}

export default function CourseVideo({ videoUrl, videoTitle }: CourseVideoProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isPlaying, setIsPlaying] = useState(true) // Changed to true to autoplay immediately

  useEffect(() => {
    if (!videoUrl) return

    // Load Vimeo Player API
    const script = document.createElement("script")
    script.src = "https://player.vimeo.com/api/player.js"
    script.async = true

    script.onload = () => {
      if (iframeRef.current && window.Vimeo) {
        // Initialize player
        const player = new window.Vimeo.Player(iframeRef.current)

        // Play video automatically
        player.play().catch((error) => {
          console.log("Autoplay was prevented:", error)
        })

        // Try to unmute after user interaction
        const handleUserInteraction = () => {
          if (player) {
            player
              .setVolume(1)
              .then(() => {
                player.play()
              })
              .catch((e) => console.log("Could not unmute:", e))
          }

          // Remove event listeners after first interaction
          document.removeEventListener("click", handleUserInteraction)
          document.removeEventListener("touchstart", handleUserInteraction)
        }

        document.addEventListener("click", handleUserInteraction)
        document.addEventListener("touchstart", handleUserInteraction)
      }
    }

    document.body.appendChild(script)

    return () => {
      // Clean up event listeners
      document.removeEventListener("click", () => {})
      document.removeEventListener("touchstart", () => {})
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [videoUrl])

  return (
    <div className="course-video-container">
      {!isPlaying ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="course-video-play-button bg-martech-blue" onClick={() => setIsPlaying(true)}>
            <Play className="h-8 w-8 text-white ml-1" />
          </div>
          {videoTitle && <p className="text-white font-medium mt-4 text-center px-4">{videoTitle}</p>}
        </div>
      ) : (
        <iframe
          ref={iframeRef}
          src={videoUrl}
          className="course-video-iframe"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  )
}
