import * as React from "react";

import { TypographyH2 } from "@/components/ui/typography";

import WorksLayoutClient from "@/components/layout/worksLayoutClient"

export default function WorksLayout({
    children,
}: Readonly<{
    children: React.ReactNode,
}>) {
    return (
        <div className="col-span-full">
            <WorksLayoutClient>
                {children}
            </WorksLayoutClient>
        </div>
    )
}