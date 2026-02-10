import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { PATHS } from "@/lib/paths";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";

import { AutoplayCarousel } from "@/components/ui/autoplayCarousel";

export const HomeCarousel = () => {
    return (
        <AutoplayCarousel>
            <CarouselItem key="0" className="px-1 min-w-0">
                <Link href={PATHS.WORKS_DATA_ARRANGER}>
                    <Card className="gap-0 py-0 shadow-none border-none rounded-none">
                        <CardContent className="w-full flex aspect-video items-center justify-center relative">
                            <Image
                                src="/DataArrangerWeb_lineChart.png"
                                alt="シミュレーション結果解析用アプリケーションの画面です。"
                                fill
                                className="object-cover"
                            />
                        </CardContent>
                        <CardTitle className="leading-tight mr-1.5 text-right md:text-xl">DataArranger_web</CardTitle>
                    </Card>
                </Link>
            </CarouselItem>
            <CarouselItem key="1" className="px-1 min-w-0">
                <Link href={PATHS.WORKS_GEOMETRIO}>
                    <Card className="gap-0 py-0 shadow-none border-none rounded-none">
                        <CardContent className="w-full flex aspect-video items-center justify-center relative">
                            <Image
                                src="/GeomeTRIo_title_v0_3_0.png"
                                alt="2Dシューティングゲームのタイトル画面です。"
                                fill
                                className="object-cover"
                            />
                        </CardContent>
                        <CardTitle className="leading-tight mr-1.5 text-right md:text-xl">GeomeTRIo</CardTitle>
                    </Card>
                </Link>
            </CarouselItem>
            <CarouselItem key="2" className="px-1 min-w-0">
                <Link href={PATHS.WORKS_GEOMETRIO}>
                    <Card className="gap-0 py-0 shadow-none border-none rounded-none">
                        <CardContent className="w-full flex aspect-video items-center justify-center relative">
                            <Image
                                src="/GeomeTRIo_playing1.png"
                                alt="2Dシューティングゲームのゲーム画面です。"
                                fill
                                className="object-cover"
                            />
                        </CardContent>
                        <CardTitle className="leading-tight mr-1.5 text-right md:text-xl">GeomeTRIo</CardTitle>
                    </Card>
                </Link>
            </CarouselItem>
            <CarouselItem key="3" className="px-1 min-w-0">
                <Link href={PATHS.ABOUT}>
                    <Card className="gap-0 py-0 shadow-none border-none rounded-none">
                        <CardContent className="w-full flex aspect-video items-center justify-center relative">
                            <Image
                                src="/PresentationTitle.png"
                                alt="学会発表資料のタイトルスライドです。"
                                fill
                                className="object-cover"
                            />
                        </CardContent>
                        <CardTitle className="leading-tight mr-1.5 text-right md:text-xl">研究</CardTitle>
                    </Card>
                </Link>
            </CarouselItem>
        </AutoplayCarousel>
    )
}