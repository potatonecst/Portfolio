import * as React from "react";

import Link from "next/link";
import Image from "next/image";

import { TypographyH2, TypographyH3, TypographyP } from "@/components/ui/typography";
import { AutoplayCarousel } from "@/components/ui/autoplayCarousel";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import { ExternalLink } from "lucide-react";

export default function OthersPage() {
    return (
        <div className="space-y-8">
            <div>
                <TypographyH2>Others</TypographyH2>
                <TypographyP>
                    そのほかの成果物を簡単に紹介します。
                </TypographyP>
            </div>

            <TypographyH3 className="border-b pb-1">Data Arranger for FDTD</TypographyH3>

            <div>
                <TypographyP>
                    数値シミュレーションの結果を解析するためのアプリケーションです。
                    有限差分時間領域（FDTD）法を用いたシミュレーションの結果を、単純な数値計算の結果と合わせてグラフに表示します。
                    先に作成した実験結果解析用アプリケーションと異なり、データの選択をダイアログで行えるようにしました。また、データを保存する際にもダイアログで名前や保存先を選択できます。
                    実行ファイル（.app）を作成したため、容易にアプリケーションを起動できます。
                    現在はWebアプリケーション版の開発を進めています。
                </TypographyP>
            </div>

            <div>
                <div className="flex gap-4">
                    <Link
                        href="https://github.com/potatonecst/Data-Arrangement_for-FDTD"
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
                    <b>使用言語</b>: Python, QML
                </TypographyP>

                <TypographyP>
                    <b>使用ライブラリ等</b>: NumPy, SciPy, Pandas, PySide6
                </TypographyP>

                <TypographyP>
                    <b>使用ツール</b>: Qt Design Studio
                </TypographyP>

                <TypographyP>
                    <b>使用サービス</b>: Git, GitHub
                </TypographyP>

                <TypographyP>
                    <b>開発経緯</b>:<br />
                    シミュレーションの結果は複数のテキストファイルに分かれているため、これらのファイルから自動的にデータを取得し、処理するアプリケーションが必要になりました。
                    先に作成していた実験結果解析用アプリケーションでの改善点を修正するための準備としてもこのアプリケーションを作成しました。
                </TypographyP>

                <TypographyP>
                    <b>技術選定理由等</b>:<br />
                    先に作った実験結果解析用アプリケーションを改修するにあたってデザイン性を高めるために、Qt Design Studioを使用することを考えました。Qt Design StudioはQtWidgetsではなくQtQuickを使用するため、先に作ったアプリケーションとは異なり、予め用意されたWidgetを配置するだけでは作成できず、新たにQMLという言語に慣れる必要がありました。
                    実行ファイル（.app）を作成するためにPyInstallerというライブラリを使用しました。
                </TypographyP>
            </div>
        </div>
    )
}