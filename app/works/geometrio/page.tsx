import * as React from "react";

import Link from "next/link";
import Image from "next/image";

import { TypographyH2, TypographyH3, TypographyP } from "@/components/ui/typography";
import { AutoplayCarousel } from "@/components/ui/autoplayCarousel";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import { ExternalLink } from "lucide-react";

export default function GeometrioPage() {
    return (
        <div className="space-y-8">
            <div>
                <TypographyH2>GeomeTRIo（製作中）</TypographyH2>
                <TypographyP>
                    現在製作中のUnity製の2Dシューティングゲームです。
                    3方向の発射口を切り替えながら遊びます。
                </TypographyP>
            </div>

            <div>
                <div className="flex gap-4">
                    <Link
                        href="https://github.com/potatonecst/GeomeTRIo"
                        target="_blank"
                        className="w-fit"
                    >
                        <Button variant="outline">
                            GitHubリポジトリ<ExternalLink />
                        </Button>
                    </Link>
                </div>
                <TypographyP>
                    GitHubリポジトリの「Release」からダウンロードできます。現在の最新バージョンは0.2.1です。
                </TypographyP>
                <TypographyP>
                    <b>入手可能バージョン</b><br />
                    - mac_arm64（Apple silicon搭載Mac）<br />
                    - mac_Intel64（Intel Mac）<br />
                    - win_Intel64（Windows）
                </TypographyP>
                <TypographyP>
                    ※Intel Mac版とWindows(Intel64)版は動作確認を行っていません。また、arm版Windows用は現在用意していません。
                </TypographyP>
            </div>

            <div className="space-y-2">
                <TypographyH3>Gallery</TypographyH3>
                <AutoplayCarousel>
                    <CarouselItem key="0" className="px-1">
                        <Card className="gap-0 py-0">
                            <CardContent className="flex aspect-video items-center justify-center relative">
                                <Image
                                    src="/GeomeTRIo_playing1.png"
                                    alt="2Dシューティングゲームのゲーム画面です。"
                                    fill
                                    className="object-cover rounded-t-xl"
                                />
                            </CardContent>
                            <CardDescription className="p-2">
                                2Dシューティングゲームのゲーム画面です。
                            </CardDescription>
                        </Card>
                    </CarouselItem>
                    <CarouselItem key="1" className="px-1">
                        <Card className="gap-0 py-0">
                            <CardContent className="flex aspect-video items-center justify-center relative">
                                <Image
                                    src="/GeomeTRIo_playing2.png"
                                    alt="2Dシューティングゲームのゲーム画面です。"
                                    fill
                                    className="object-cover rounded-t-xl"
                                />
                            </CardContent>
                            <CardDescription className="p-2">
                                2Dシューティングゲームのゲーム画面です。
                            </CardDescription>
                        </Card>
                    </CarouselItem>
                    <CarouselItem key="2" className="px-1">
                        <Card className="gap-0 py-0">
                            <CardContent className="flex aspect-video items-center justify-center relative">
                                <Image
                                    src="/GeomeTRIo_title.png"
                                    alt="2Dシューティングゲームのタイトル画面です。"
                                    fill
                                    className="object-cover rounded-t-xl"
                                />
                            </CardContent>
                            <CardDescription className="p-2">
                                2Dシューティングゲームのタイトル画面です。
                            </CardDescription>
                        </Card>
                    </CarouselItem>
                    <CarouselItem key="3" className="px-1">
                        <Card className="gap-0 py-0">
                            <CardContent className="flex aspect-video items-center justify-center relative">
                                <Image
                                    src="/GeomeTRIo_gameover.png"
                                    alt="2Dシューティングゲームのゲームオーバー画面です。"
                                    fill
                                    className="object-cover rounded-t-xl"
                                />
                            </CardContent>
                            <CardDescription className="p-2">
                                2Dシューティングゲームのゲームオーバー画面です。
                            </CardDescription>
                        </Card>
                    </CarouselItem>
                    <CarouselItem key="4" className="px-1">
                        <Card className="gap-0 py-0">
                            <CardContent className="flex aspect-video items-center justify-center relative">
                                <Image
                                    src="/GeomeTRIo_ranking.png"
                                    alt="2Dシューティングゲームのランキング画面です。"
                                    fill
                                    className="object-cover rounded-t-xl"
                                />
                            </CardContent>
                            <CardDescription className="p-2">
                                2Dシューティングゲームのランキング画面です。
                            </CardDescription>
                        </Card>
                    </CarouselItem>
                </AutoplayCarousel>
            </div>

            <div className="space-y-2">
                <TypographyH3>Movie</TypographyH3>
                <video
                    src="/GeomeTRIo_demo.mp4"
                    controls
                />
                <TypographyP>
                    最新バージョンの映像ではないため、現在のものとは一部異なる箇所があります。
                    動画は適宜更新する予定です。<br />
                    ※ゲーム音声が流れます。
                </TypographyP>
            </div>

            <div>
                <TypographyH3>開発</TypographyH3>
                <TypographyP>
                    使用言語: C#<br />
                    使用ツール:<br />Unity（ゲームエンジン）, Logic Pro（BGM, 効果音制作）
                </TypographyP>
            </div>
        </div>
    )
}