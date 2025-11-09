import * as React from "react";

import Link from "next/link";
import Image from "next/image";

import { TypographyH2, TypographyH3, TypographyP } from "@/components/ui/typography";
import { AutoplayCarousel } from "@/components/ui/autoplayCarousel";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import { ExternalLink } from 'lucide-react';

export default function DataArrangerPage() {
    return (
        <div className="space-y-8">
            <div>
                <TypographyH2>DataArranger_web</TypographyH2>
                <TypographyP>
                    数値シミュレーション結果を解析するためのWebアプリケーションです。
                </TypographyP>
            </div>

            <div>
                <div className="flex gap-4">
                    <Link
                        href="https://data-arrangement-frontend.onrender.com"
                        target="_blank"
                        className="w-fit"
                    >
                        <Button variant="outline">
                            DataArranger_web<ExternalLink />
                        </Button>
                    </Link>
                    <Link
                        href="https://github.com/potatonecst/Data-Arrangement_web"
                        target="_blank"
                        className="w-fit"
                    >
                        <Button variant="outline">
                            GitHubリポジトリ<ExternalLink />
                        </Button>
                    </Link>
                </div>
                <TypographyP>
                    サーバーがスリープ状態の場合、起動に30秒から1分程度かかる場合があります。
                </TypographyP>
            </div>

            <div className="space-y-2">
                <TypographyH3>Gallery</TypographyH3>
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

            <div className="space-y-2">
                <TypographyH3>Movie</TypographyH3>
                <video
                    src="/DataArrangerWeb_demo.mp4"
                    controls
                />
                <TypographyP>
                    画面収録の際に、画面下部が切れてしまっています。後日、新しいものに差し替える予定です。
                </TypographyP>
            </div>

            <div>
                <TypographyH3>開発</TypographyH3>
                <TypographyP>
                    使用言語:<br />Python（バックエンド）, TypeScript（フロントエンド）<br />
                    使用ライブラリ等:<br />FastAPI, React, React Router
                </TypographyP>
            </div>
        </div>
    )
}