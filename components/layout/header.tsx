"use client"

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { PATHS } from "@/lib/paths";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {Separator} from "@/components/ui/separator"
import { TypographyH1, TypographyH3, TypographyH4 } from "@/components/ui/typography";

const works: {title: string, href: string, description: string}[] = [
    {
        title: "DataArranger_web",
        href: PATHS.WORKS_DATA_ARRANGER,
        description: "シミュレーション結果解析用Webアプリケーションの紹介です。",
    },
    {
        title: "GeomeTRIo",
        href: PATHS.WORKS_GEOMETRIO,
        description: "Unity製の2Dシューティングゲームの紹介です。"
    },
    {
        title: "Portfolio",
        href: PATHS.WORKS_PORTFOLIO,
        description: "このポートフォリオサイトの紹介です。"
    },
    {
        title: "Others",
        href: PATHS.WORKS_OTHERS,
        description: "その他の成果物の紹介です。"
    }
]

export function Header() {
    const pathname = usePathname();

    return (
        <header className="col-span-full md:grid md:grid-cols-12 md:gap-4">
            <TypographyH1 className="pb-4">
                <Link href="/" className="md:col-span-3 md:col-start-1">
                    Portfolio
                </Link>
            </TypographyH1>
            <nav className="md:col-span-9 md:col-start-4 flex items-center justify-center md:justify-end-safe">
                <NavigationMenu className="w-auto">
                    <NavigationMenuList className="flex flex-wrap justify-between items-stretch gap-x-1">
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={cn(
                                    navigationMenuTriggerStyle(), 
                                    "px-2 py-1 font-bold sm:text-xl sm:px-4 sm:py-2",
                                    pathname === PATHS.HOME && "font-bold text-accent-foreground underline underline-offset-3 decoration-2 decoration-blue-700"
                                )}
                            >
                                <Link href={PATHS.HOME}>Home</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <div>
                            <Separator orientation="vertical" />
                        </div>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={cn(
                                    navigationMenuTriggerStyle(), 
                                    "px-2 py-2 font-bold sm:text-xl sm:px-4 sm:py-2",
                                    pathname === PATHS.ABOUT && "font-bold text-accent-foreground underline underline-offset-3 decoration-2 decoration-blue-700"
                                )}
                            >
                                <Link href={PATHS.ABOUT}>自己紹介</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <div>
                            <Separator orientation="vertical" />
                        </div>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger
                                className={cn(
                                    "px-2 py-2 font-bold sm:text-xl sm:px-4 sm:py-2",
                                    pathname.startsWith(PATHS.WORKS) && "font-bold text-accent-foreground underline underline-offset-3 decoration-2 decoration-blue-700"
                                )}
                            >
                                成果物
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink asChild>
                                    <Link href={PATHS.WORKS}>
                                        <TypographyH4>成果物一覧</TypographyH4>
                                    </Link>
                                </NavigationMenuLink>
                                <ul className="md:grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                    {works.map((work) => (
                                        <ListItem
                                        key={work.title}
                                        title={work.title}
                                        href={work.href}>
                                            {work.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <div>
                            <Separator orientation="vertical" />
                        </div>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={cn(
                                    navigationMenuTriggerStyle(), 
                                    "px-2 py-2 font-bold sm:text-xl sm:px-4 sm:py-2",
                                    pathname === PATHS.CONTACT && "font-bold text-accent-foreground underline underline-offset-3 decoration-2 decoration-blue-700"
                                )}
                            >
                                <Link href={PATHS.CONTACT}>お問い合わせ</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>
        </header>
    );
}

const ListItem = ({title, children, href, ...props}: React.ComponentPropsWithoutRef<"li"> & {href: string}) => {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}