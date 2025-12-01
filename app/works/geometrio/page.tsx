import * as React from "react";

import Link from "next/link";
import Image from "next/image";

import { TypographyH2, TypographyH3, TypographyP } from "@/components/ui/typography";
import { AutoplayCarousel } from "@/components/ui/autoplayCarousel";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import { ExternalLink } from "lucide-react";

const currentVersion = "0.2.1"

export default function GeometrioPage() {
    return (
        <div className="space-y-8">
            <div>
                <TypographyH2>GeomeTRIo</TypographyH2>
                <TypographyP>
                    現在製作中のUnity製の2Dシューティングゲームです。
                </TypographyP>
                <TypographyP>
                    三角形の自機の頂点が弾の発射点となっており、発射点を切り替えながら遊びます。
                    発射点の切り替えを戦略的に活かすために画面下部から敵が出現するようにした他、
                    敵同士の衝突で弾が全方位に発射されるようにして、
                    画面下部からの敵を素早く倒す意味を持たせています。
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
                    GitHubリポジトリの「Release」からダウンロードできます。現在の最新バージョンは{currentVersion}です。
                </TypographyP>
                <TypographyP><b>入手可能バージョン</b></TypographyP>
                <ul className={`list-disc ml-6 [&>li]:mt-2`}>
                    <li>mac_arm64（Apple silicon搭載Mac）</li>
                    <li>mac_Intel64（Intel Mac）</li>
                    <li>win_Intel64（Windows）</li>
                    <li className={`list-["※"]`}>Intel Mac版とWindows(Intel64)版は動作確認を行っていません。また、arm版Windows用のソフトウェアは現在リリースしていません。</li>
                </ul>
            </div>

            <div>
                <TypographyH3>仕様（Version {currentVersion}時点）</TypographyH3>
                <ul className="ml-6 list-disc [&>li]:mt-2">
                    <li>正三角形の前方、左斜め後方、右斜め後方の3箇所の頂点が弾の発射口</li>
                    <ul className="ml-5 list-[circle] [&>li]:mt-2">
                        <li>発射口を左右に切り替えながらプレイ</li>
                    </ul>
                    <li>HPが尽きるとゲームオーバー</li>
                    <li>SPを消費して、無敵状態で回転しながら3方向に弾を発射するスピンアタックを発動（ボムに相当）</li>
                    <li>HPは1から10、SPは0から10の間で設定可能（どちらも初期値は3）</li>
                    <li>各ステージごとに上位5つのスコアを記録し、ランキングを表示</li>
                    <ul className="ml-5 list-[circle] [&>li]:mt-2">
                        <li>高いスコアを取った場合にプレイヤーネームと共に記録</li>
                    </ul>
                </ul>
            </div>

            <div>
                <TypographyH3>操作方法（Version {currentVersion}時点）</TypographyH3>
                <table className="w-full mt-2">
                    <thead>
                        <tr className="bg-accent m-0 border-t p-0 shadow-sm">
                            <th className="border px-4 py-2 text-left font-bold [[align=center]]:text-center [[align=right]]:text-right">
                                アクション
                            </th>
                            <th className="border px-4 py-2 text-left font-bold [[align=center]]:text-center [[align=right]]:text-right">
                                キー入力
                            </th>
                        </tr>
                    </thead>
                    <tbody className="[&>tr]:even:bg-muted [&>tr]:m-0 [&>tr]:border-t [&>tr]:p-0 [&_td]:border [&_td]:px-4 [&_td]:py-2 [&_td]:text-left">
                        <tr>
                            <td>移動</td>
                            <td>方向キー（↑←↓→）またはWASDキー</td>
                        </tr>
                        <tr>
                            <td>決定（メニュー画面内）</td>
                            <td>Enterキー</td>
                        </tr>
                        <tr>
                            <td>射撃</td>
                            <td>ZキーまたはJキー</td>
                        </tr>
                        <tr>
                            <td>発射口切り替え（左へ）</td>
                            <td>XキーまたはKキー</td>
                        </tr>
                        <tr>
                            <td>発射口切り替え（右へ）</td>
                            <td>CキーまたはLキー</td>
                        </tr>
                        <tr>
                            <td>スピンアタック（ボム）</td>
                            <td>Spaceキー</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="space-y-2">
                <TypographyH3>Gallery</TypographyH3>
                <AutoplayCarousel>
                    <CarouselItem key="0" className="px-1 min-w-0">
                        <Card className="gap-0 py-0">
                            <CardContent className="w-full flex aspect-video items-center justify-center relative">
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
                    <CarouselItem key="1" className="px-1 min-w-0">
                        <Card className="gap-0 py-0">
                            <CardContent className="w-full flex aspect-video items-center justify-center relative">
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
                    <CarouselItem key="2" className="px-1 min-w-0">
                        <Card className="gap-0 py-0">
                            <CardContent className="w-full flex aspect-video items-center justify-center relative">
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
                    <CarouselItem key="3" className="px-1 min-w-0">
                        <Card className="gap-0 py-0">
                            <CardContent className="w-full flex aspect-video items-center justify-center relative">
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
                    <CarouselItem key="4" className="px-1 min-w-0">
                        <Card className="gap-0 py-0">
                            <CardContent className="w-full flex aspect-video items-center justify-center relative">
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
                    <b>開発期間</b>: 2025年9月6日 - 2025年11月9日 （一時開発休止中）
                </TypographyP>

                <TypographyP>
                    <b>使用言語</b>: C#
                </TypographyP>

                <TypographyP>
                    <b>使用ツール</b>:<br />Unity（ゲームエンジン）, Logic Pro（BGM, 効果音制作）
                </TypographyP>

                <TypographyP>
                    <b>使用サービス</b>: Git, Git LFS, GitHub
                </TypographyP>

                <TypographyP>
                    <b>開発経緯・技術選定理由</b>:<br />
                    純粋なゲーム制作への興味から、Unityでのゲーム開発に挑戦しました。Unityを選んだのは、C#の学習になると同時に、マルチプラットフォーム開発の経験が今後のゲーム以外のソフトウェア開発全般にも役立つと考えたためです。
                </TypographyP>
            </div>
        </div>
    )
}