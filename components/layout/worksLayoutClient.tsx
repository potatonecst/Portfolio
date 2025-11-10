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
    {href: PATHS.WORKS_DATA_ARRANGER, title: "DataArranger_web"},
    {href: PATHS.WORKS_GEOMETRIO, title: "GeomeTRIo"},
    {href: PATHS.WORKS_PORTFOLIO, title: "Portfolio"},
]

interface SidebarNavProps {
  onLinkClick?: () => void; //リンククリック時に実行する関数
}

export default function WorksLayoutClient({
    children,
}: {
    children: React.ReactNode;
}) {
    const [accordionValue, setAccordionValue] = React.useState("");

    //サイドバーのナビゲーション（共通）
    const SidebarNav = ({onLinkClick}: SidebarNavProps) => {
        const pathname = usePathname();

        return (
            <nav className="flex flex-col gap-2">
                {worksLinks.map((link) => (
                    <Link
                        href={link.href}
                        key={link.title}
                        className={cn(
                            "hover:bg-accent", // 通常のスタイル
                            pathname === link.href && "font-bold underline underline-offset-4 decoration-2 decoration-blue-700" // ⬅︎ アクティブ時のスタイル
                        )}
                        onClick={onLinkClick}
                    >
                        <TypographyP className="text-wrap">
                            {link.title}
                        </TypographyP>
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
                <Accordion
                    type="single"
                    collapsible
                    value={accordionValue}
                    onValueChange={setAccordionValue}
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="px-4 sm:px-8 hover:bg-accent rounded-none">
                            <TypographyH4>
                                成果物一覧
                            </TypographyH4>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 sm:px-8">
                            <SidebarNav onLinkClick={() => setAccordionValue("")} />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </aside>

            {/*md以上*/}
            <aside
                className={cn(
                    "hidden md:block md:col-span-3 lg:col-span-2 mt-12",
                    "sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto",
                )}
            >
                <TypographyH4 className="mb-2">成果物一覧</TypographyH4>
                <SidebarNav />
            </aside>

            <div className="md:col-span-9 md:col-start-4 lg:col-span-10 lg:col-start-3 md:grid">
                {children}
            </div>
        </div>
    )
}