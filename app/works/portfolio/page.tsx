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