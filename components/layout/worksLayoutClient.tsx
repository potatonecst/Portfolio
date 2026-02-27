"use client"

import * as React from "react";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { PATHS } from "@/lib/paths"
import { cn } from "@/lib/utils"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { TypographyH3, TypographyH4, TypographyP } from "../ui/typography"

const worksLinks = [
    { href: PATHS.WORKS, title: "成果物一覧" },
    { href: PATHS.WORKS_DATA_ARRANGER, title: "DataArranger_web" },
    { href: PATHS.WORKS_GEOMETRIO, title: "GeomeTRIo" },
    { href: PATHS.WORKS_PORTFOLIO, title: "Portfolio" },
    { href: PATHS.WORKS_OTHERS, title: "Others" },
]

interface SidebarNavProps {
    className?: () => void; //リンククリック時に実行する関数
}

export default function WorksLayoutClient({
    children,
}: {
    children: React.ReactNode;
}) {
    const [accordionValue, setAccordionValue] = React.useState("");

    //サイドバーのナビゲーション（共通）
    const SidebarNav = ({ className }: { className?: string }) => {
        const pathname = usePathname();

        return (
            <nav className={cn("flex", className)}>
                {worksLinks.map((link) => (
                    <Link
                        href={link.href}
                        key={link.title}
                        className={cn(
                            "rounded-md px-1 py-1 text-primary/60 hover:text-primary hover:bg-accent shrink-0", //通常のスタイル
                            pathname === link.href && "text-primary underline underline-offset-4 decoration-2 decoration-blue-700 shrink-0" //アクティブ時のスタイル
                        )}
                    >
                        <span className="text-sm">
                            {link.title}
                        </span>
                    </Link>
                ))}
            </nav>
        )
    }

    return (
        <div className="md:grid md:grid-cols-12 md:gap-4">

            {/*md未満*/}
            <aside
                className={cn(
                    "md:hidden mb-4",
                    "sticky top-0 z-10 bg-background shadow-[0_2px_4px_rgb(0_0_0/0.05)]",
                    "-mx-4 sm:-mx-8",
                )}
            >
                <div className="flex items-center px-4 sm:px-8 py-2">
                    <span className="shrink-0 text-xs font-bold mr-2 border-r pr-2">
                        成果物
                    </span>
                    <SidebarNav className="flex-row overflow-x-auto no-scrollbar gap-2 items-center" />
                </div>
            </aside>

            {/*md以上*/}
            <aside
                className={cn(
                    "hidden md:block md:col-span-3 mt-12",
                    "sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto",
                )}
            >
                <TypographyH4 className="mb-2 px-1">成果物</TypographyH4>
                <SidebarNav className="flex-col gap-1" />
            </aside>

            <div className="md:col-span-9 md:col-start-4 md:grid">
                {children}
            </div>
        </div>
    )
}