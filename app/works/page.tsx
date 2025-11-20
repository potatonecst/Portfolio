import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { PATHS } from "@/lib/paths";

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { TypographyH2, TypographyH4, TypographyP } from "@/components/ui/typography";

export default function WorksPage() {
    return (
        <div className="space-y-8">
            <TypographyH2>成果物一覧</TypographyH2>

            <ul className="grid md:grid-cols-2 gap-4">
                <li>
                    <Link
                        href={PATHS.WORKS_DATA_ARRANGER}
                        className="hover:opacity-60"
                    >
                        <Card className="gap-0 py-0">
                            <CardContent className="flex aspect-video items-center justify-center relative">
                                <Image
                                    src="/DataArrangerWeb_lineChart.png"
                                    alt="シミュレーション結果解析用アプリケーションの画面です。"
                                    fill
                                    className="object-cover rounded-t-xl"
                                />
                            </CardContent>
                            <div className="p-2">
                                <CardTitle>
                                    <TypographyH4>DataArranger_web</TypographyH4>
                                </CardTitle>
                                <CardDescription>
                                    数値シミュレーション結果を解析するためのWebアプリケーションの紹介です。
                                </CardDescription>
                            </div>
                        </Card>
                    </Link>
                </li>
                <li>
                    <Link
                        href={PATHS.WORKS_GEOMETRIO}
                        className="hover:opacity-60"
                    >
                        <Card className="md:col-span-4 md:col-start-1 lg:col-span-5 gap-0 py-0 w-full">
                            <CardContent className="flex aspect-video items-center justify-center relative">
                                <Image
                                    src="/GeomeTRIo_playing1.png"
                                    alt="2Dシューティングゲームのゲーム画面です。"
                                    fill
                                    className="object-cover rounded-t-xl"
                                />
                            </CardContent>
                            <div className="p-2">
                                <CardTitle>
                                    <TypographyH4>GeomeTRIo（製作中）</TypographyH4>
                                </CardTitle>
                                <CardDescription>
                                    現在製作中のUnity製の2Dシューティングゲームの紹介です。
                                </CardDescription>
                            </div>
                        </Card>
                    </Link>
                </li>
                <li>
                    <Link
                        href={PATHS.WORKS_PORTFOLIO}
                        className="hover:opacity-60"
                    >
                        <Card className="md:col-span-4 md:col-start-1 lg:col-span-5 gap-0 py-0">
                            <CardContent className="flex aspect-video items-center justify-center relative">
                                <Image
                                    src="/Portfolio_top.png"
                                    alt="このポートフォリオサイトのトップページです。"
                                    fill
                                    className="object-cover rounded-t-xl"
                                />
                            </CardContent>
                            <div className="p-2">
                                <CardTitle>
                                    <TypographyH4>Portfolio</TypographyH4>
                                </CardTitle>
                                <CardDescription>
                                    このポートフォリオサイトの紹介です。
                                </CardDescription>
                            </div>
                        </Card>
                    </Link>
                </li>
                <li>
                    <Link
                        href={PATHS.WORKS_OTHERS}
                        className="hover:opacity-60"
                    >
                        <Card className="gap-0 py-0">
                            <CardContent className="flex aspect-video items-center justify-center relative">
                                <Image
                                    src="/DataArrangerForFDTD_chart.png"
                                    alt="シミュレーション結果解析用アプリケーションの画面です。"
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    className="object-cover h-full w-auto"
                                />
                            </CardContent>
                            <div className="p-2">
                                <CardTitle>
                                    <TypographyH4>Others</TypographyH4>
                                </CardTitle>
                                <CardDescription>
                                    その他の成果物の紹介です。
                                </CardDescription>
                            </div>
                        </Card>
                    </Link>
                </li>
            </ul>
            
        </div>
    )
}