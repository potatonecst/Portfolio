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
                    その他の成果物を紹介します。
                </TypographyP>
            </div>

            <TypographyH3 className="border-b pb-1">Data Analyzer</TypographyH3>

            <div>
                <TypographyP>
                    散乱光の偏光状態測定の実験結果を解析するためのアプリケーションです。
                    予め実験実施日とサンプル番号によってフォルダ分けされているデータを選択し、単純な理論計算結果とともにグラフを表示します。
                    チェックボックスにチェックをつけることで光強度データの保存ができます。
                    データ保存について、名前を変更することや保存場所を変更することはできません。また、実験結果のデータは所定のフォルダに、所定の名前で保存しておく必要があり、柔軟性がありません。
                    現在、これらの問題点の改善を検討しています。
                </TypographyP>
            </div>

            <div>
                <div className="flex gap-4">
                    <Link
                        href="https://github.com/potatonecst/Polarization-Data-Analysis-Old"
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
                    <b>開発期間</b>: 2024年10月 - 2025年2月 （開発終了）
                </TypographyP>

                <TypographyP>
                    <b>使用言語</b>: Python
                </TypographyP>

                <TypographyP>
                    <b>使用ライブラリ等</b>: NumPy, SciPy, PySide6
                </TypographyP>

                <TypographyP>
                    <b>使用ツール</b>: PySide6-designer, pyenv, pyenv-virtualenv, pip
                </TypographyP>

                <TypographyP>
                    <b>開発経緯</b>:<br />
                    大学の研究において、実験結果の解析のために作成しました。
                    ソースコードを直接書き換えて実験データの選択やパラメータの変更を行う手間を削減するためにGUIも作成しました。
                </TypographyP>

                <TypographyP>
                    <b>技術選定理由等</b>:<br />
                    研究室内での開発言語がPythonであったため、Pythonを用いて開発しました。
                    GUIの作成には、比較的広く用いられているQtのPythonバインディングであるPySide6を利用しました。
                    PySide6-designerでQtWidgetsを配置することで、複雑なコードを書くことなくGUIをデザインできました。
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

            <div className="space-y-2">
                <TypographyH3>Gallery</TypographyH3>
                <AutoplayCarousel className="mt-4">
                    <CarouselItem key="0" className="px-1 min-w-0">
                        <Card className="gap-0 py-0 shadow-none border-none rounded-none">
                            <CardContent className="w-full flex aspect-video items-center justify-center relative">
                                <Image
                                    src="/DataArrangerForFDTD_chart.png"
                                    alt="シミュレーション結果解析用アプリケーションの画面です。光強度のグラフが表示されています。"
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    className="object-cover h-full w-auto"
                                />
                            </CardContent>
                            <CardDescription className="p-2">
                                アプリケーションの画面です。光強度のグラフが表示されています。
                            </CardDescription>
                        </Card>
                    </CarouselItem>
                    <CarouselItem key="1" className="px-1 min-w-0">
                        <Card className="gap-0 py-0 shadow-none border-none rounded-none">
                            <CardContent className="w-full flex aspect-video items-center justify-center relative">
                                <Image
                                    src="/DataArrangerForFDTD_top.png"
                                    alt="シミュレーション結果解析用アプリケーションの画面です。起動直後の状態が表示されています。"
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    className="object-cover h-full w-auto"
                                />
                            </CardContent>
                            <CardDescription className="p-2">
                                起動直後のアプリケーションの画面です。
                            </CardDescription>
                        </Card>
                    </CarouselItem>
                    <CarouselItem key="2" className="px-1 min-w-0">
                        <Card className="gap-0 py-0 shadow-none border-none rounded-none">
                            <CardContent className="w-full flex aspect-video items-center justify-center relative">
                                <Image
                                    src="/DataArrangerForFDTD_settings.png"
                                    alt="シミュレーション結果解析用アプリケーションの画面です。設定ウインドウが表示されています。"
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    className="object-cover h-full w-auto"
                                />
                            </CardContent>
                            <CardDescription className="p-2">
                                アプリケーションの設定ウインドウです。
                            </CardDescription>
                        </Card>
                    </CarouselItem>
                </AutoplayCarousel>
            </div>

            <div>
                <TypographyH3>開発</TypographyH3>

                <TypographyP>
                    <b>開発期間</b>: 2025年5月25日 - 2025年7月14日 （開発終了）
                </TypographyP>

                <TypographyP>
                    <b>使用言語</b>: Python, QML
                </TypographyP>

                <TypographyP>
                    <b>使用ライブラリ等</b>: NumPy, SciPy, PySide6
                </TypographyP>

                <TypographyP>
                    <b>使用ツール</b>: Qt Design Studio, pyenv, pyenv-virtualenv, pip, Git
                </TypographyP>

                <TypographyP>
                    <b>使用サービス</b>: GitHub
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