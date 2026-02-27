import React from "react";
import { cn } from "@/lib/utils";

interface YouTubeEmbedProps {
    videoId: string;
    title?: string;
    className?: string;
}

export default function YouTubeEmbed({ videoId, title = "YouTube Video", className }: YouTubeEmbedProps) {
    return (
        <div className={cn("w-full aspect-video overflow-hidden border bg-muted/30 shadow-md", className)}>
            <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write encrypted-media; gyroscope; picture-in-picture; web-share;"
                allowFullScreen
                loading="lazy"
            />
        </div>
    )
}