import * as React from "react";

import Link from "next/link";
import Image from "next/image";

import { TypographyH2, TypographyP } from "@/components/ui/typography";
import { AutoplayCarousel } from "@/components/ui/autoplayCarousel";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";

export default function PortfolioPage() {
    return (
        <div className="space-y-8">
            <div>
                <TypographyH2>Portfolio</TypographyH2>
                <TypographyP>
                    自己紹介や成果物をまとめたポートフォリオサイトです。
                </TypographyP>
            </div>
            <AutoplayCarousel>
                <CarouselItem key="0" className="px-1">
                    <Card className="gap-0 py-0">
                        <CardContent className="flex aspect-video items-center justify-center relative">
                            <Image
                                src="/DataArrangerWeb_lineChart.png"
                                alt="シミュレーション結果解析用アプリケーションの画面です。"
                                fill
                                className="object-cover rounded-t-xl"
                            />
                        </CardContent>
                        <CardDescription className="p-2">
                            アプリケーションの画面です。光強度のグラフが表示されています。
                        </CardDescription>
                    </Card>
                </CarouselItem>
                <CarouselItem key="1" className="px-1">
                    <Card className="gap-0 py-0">
                        <CardContent className="flex aspect-video items-center justify-center relative">
                            <Image
                                src="/DataArrangerWeb_poincareChart.png"
                                alt="シミュレーション結果解析用アプリケーションの画面です。3次元グラフが表示されています。"
                                fill
                                className="object-cover rounded-t-xl"
                            />
                        </CardContent>
                        <CardDescription className="p-2">
                            アプリケーションの画面です。偏光状態を示す3Dグラフが表示されています。
                        </CardDescription>
                    </Card>
                </CarouselItem>
                <CarouselItem key="2" className="px-1">
                    <Card className="gap-0 py-0">
                        <CardContent className="flex aspect-video items-center justify-center relative">
                            <Image
                                src="/DataArrangerWeb_top.png"
                                alt="シミュレーション結果解析用アプリケーションの画面です。アクセス時に表示される状態が表示されています。"
                                fill
                                className="object-cover rounded-t-xl"
                            />
                        </CardContent>
                        <CardDescription className="p-2">
                            アプリケーションの画面です。アクセス時に表示される状態が表示されています。
                        </CardDescription>
                    </Card>
                </CarouselItem>
            </AutoplayCarousel>
        </div>
    )
}