import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import React from "react";

export const BadgeForWorks = ({
    children,
    mode,
    className,
}: {
    children: React.ReactNode,
    mode?: "developing" | "new" | "old" | "default",
    modeClassName?: string,
    className?: string,
}) => {

    let modeClassName;
    let modeVariant: "link" | "default" | "outline" | "secondary" | "destructive" | "ghost" = "default";
    if (mode === "developing") {
        modeClassName = "bg-blue-700";
        modeVariant = "default";
    } else if (mode === "new") {
        modeClassName = "border-blue-700/50";
        modeVariant = "outline";
    } else if (mode === "old") {
        modeClassName = "border-gray-700/50";
        modeVariant = "outline";
    } else {
        modeClassName = "";
        modeVariant = "default";
    }

    return (
        <Badge
            variant={modeVariant}
            className={cn("shadow-sm font-mono-only-en", modeClassName, className)}
        >
            {children}
        </Badge>
    )
}