import * as React from "react";

import Link from "next/link";
import Image from "next/image";

import { TypographyH2, TypographyH3, TypographyP } from "@/components/ui/typography";
import { AutoplayCarousel } from "@/components/ui/autoplayCarousel";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import { ExternalLink } from "lucide-react";

export default function PortfolioPage() {
    return (
        <div className="space-y-8">
            <div>
                <TypographyH2>Portfolio</TypographyH2>
                <TypographyP>
                    自己紹介や成果物をまとめたポートフォリオサイトです。
                </TypographyP>
            </div>

            <div>
                <div className="flex gap-4">
                    <Link
                        href="https://github.com/potatonecst/Portfolio"
                        target="_blank"
                        className="w-fit"
                    >
                        <Button variant="outline">
                            GitHubリポジトリ<ExternalLink />
                        </Button>
                    </Link>
                </div>
            </div>
            {/*<AutoplayCarousel>
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
            </AutoplayCarousel>*/}

            <div>
                            <TypographyH3>開発</TypographyH3>
            
                            <TypographyP>
                                <b>使用言語</b>: TypeScript
                            </TypographyP>
            
                            <TypographyP>
                                <b>使用ライブラリ等</b>: React, Next.js, shadcn/ui
                            </TypographyP>
            
                            <TypographyP>
                                <b>使用サービス</b>: Git, Git LFS, GitHub, AWS Amplify
                            </TypographyP>
            
                            <TypographyP>
                                <b>開発経緯</b>:<br />
                                WebアプリケーションではなくシンプルなWebサイトを作成すること、自己紹介やこれまでの成果物を紹介にすることを目的に開発を始めました。
                            </TypographyP>
            
                            <TypographyP>
                                <b>技術選定理由等</b>:<br />
                                GitHubと接続することで自動でビルド・デプロイが行えること、広く用いられているAWSに触れることを目的として、AWS Amplifyでデプロイしました。
                                その際にRoute 53でカスタムドメインの取得・登録を行い、これを使用してurlをわかりやすくしました。
                            </TypographyP>
                        </div>
        </div>
    )
}