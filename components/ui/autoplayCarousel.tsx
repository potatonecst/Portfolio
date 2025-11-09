"use client"

import * as React from "react";

import { Progress } from "@/components/ui/progress";
import { 
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const AUTOPLAY_DELAY = 5000; //この時間間隔[ms]で次のスライドへ

export const AutoplayCarousel = ({
    children,
    className,
}: {
    children: React.ReactNode,
    className?: string,
}) => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);
    const [progress, setProgress] = React.useState(0); //プログレスバーの値を管理

    let progressInterval = React.useRef<NodeJS.Timeout | null>(null);

    const isPointerDown = React.useRef(false); //手動操作中かどうかを判定

    const stopProgress = React.useCallback(() => {
        console.log("%cEvent: stopProgress (タイマー停止)", "color: red;");

        if (progressInterval.current) clearInterval(progressInterval.current);
        setProgress(0);
    }, []) //依存配列は空

    //プログレスバーを開始
    const startProgress = React.useCallback(() => {
        console.log("%cEvent: startProgress (タイマー開始)", "color: green;");

        stopProgress(); //既存のタイマーをクリア
        const startTime = Date.now(); //開始時刻

        const intervalDelay = 33; //33 ms (約30fps)
        progressInterval.current = setInterval(() => {
            const elapsedTime = Date.now() - startTime;

            let progressPercentage = (elapsedTime / AUTOPLAY_DELAY) * 100;
            progressPercentage = Math.min(progressPercentage, 100); //100%を超えないように

            setProgress(progressPercentage);

            if (progressPercentage >= 100) {
                if (progressInterval.current) clearInterval(progressInterval.current);
            }
        }, intervalDelay);
    }, [stopProgress]) //stopProgressに依存

    React.useEffect(() => {
        if (!api) {
            return;
        }

        console.log("--- API READY ---"); // 初回実行

        const autoplay = api.plugins().autoplay;
        if (!autoplay) {
            return;
        }

        const onSelect = () => {
            console.log("Event: select (ドット更新)");

            setCurrent(api.selectedScrollSnap() + 1);
        }

        //Autoplayのタイマーがセットされたら
        const onTimerset = () => {
            console.log("Event: autoplay:timerset (Autoplayがタイマー開始)");

            startProgress(); //AUTOPLAY_DELAYの時間でタイマー開始
        }

        //手動操作でタイマーが止まったら
        const onTimerstopped = () => {
            console.log("Event: autoplay:timerstopped (Autoplayが停止)");

            stopProgress();
        }

        //手動操作(触った瞬間) 
        const onPointerDown = () => {
            console.log("Event: pointerDown (手動操作開始)");

            isPointerDown.current = true; //手動操作フラグを立てる
            stopProgress();
            autoplay.stop(); //onTimerstoppedが発火
        }

        //指を離した瞬間を手動操作完了として、Autoplayを再開
        const onPointerUp = () => {
            console.log("Event: pointerUp (操作終了)");

            if (isPointerDown.current === true) {
                isPointerDown.current = false;
                autoplay.play(); //Autoplayを再開 (onTimersetが発火)
            }
        }

        //リサイズイベント
        const onResize = () => {
            isPointerDown.current = false;
            stopProgress();
            autoplay.play();
        }

        api.on("select", onSelect); //ドット用
        api.on("autoplay:timerset", onTimerset); //プログレスバー開始用
        api.on("autoplay:timerstopped", onTimerstopped); //プログレスバー停止用
        api.on("pointerDown", onPointerDown);
        api.on("pointerUp", onPointerUp);
        api.on("resize", onResize);
        api.on("reInit", onResize);

        //初回読み込みの設定
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        console.log("--- 初回読み込み ---");
        startProgress(); //初回もAUTOPLAY_DELAYの時間で開始

        return () => {
            console.log("--- クリーンアップ ---");
            api.off("select", onSelect);
            api.off("autoplay:timerset", onTimerset);
            api.off("autoplay:timerstopped", onTimerstopped);
            api.off("pointerDown", onPointerDown);
            api.off("pointerUp", onPointerUp);
            api.off("resize", onResize);
            api.off("reInit", onResize);
        }
    }, [api, startProgress, stopProgress])

    //前ボタンクリックでも手動操作フラグを立てる
    const handlePrevClick = React.useCallback(() => {
        if (!api) return;
        const autoplay = api.plugins().autoplay;

        isPointerDown.current = true;
        autoplay?.stop();
        stopProgress();
        api.scrollPrev();
        isPointerDown.current = false; //手動操作フラグをリセット
        autoplay?.play(); //Autoplayを再開(onTimersetを発火)
    }, [api, stopProgress])

    //次ボタンクリックでも手動操作フラグを立てる
    const handleNextClick = React.useCallback(() => {
        if (!api) return;
        const autoplay = api.plugins().autoplay;

        isPointerDown.current = true;
        autoplay?.stop();
        stopProgress();
        api.scrollNext();
        isPointerDown.current = false; //手動操作フラグをリセット
        autoplay?.play(); //Autoplayを再開(onTimersetを発火)
    }, [api, stopProgress])

    //ドットインジケータのクリックでも手動操作フラグを立てる
    const handleDotClick = React.useCallback((index: number) => {
        if (!api) return;
        const autoplay = api.plugins().autoplay;

        isPointerDown.current = true;
        autoplay?.stop();
        stopProgress();
        api.scrollTo(index);

        isPointerDown.current = false; //手動操作フラグをリセット
        autoplay?.play(); //Autoplayを再開(onTimersetを発火)
    }, [api, stopProgress])

    return (
        <div className={cn("mx-auto max-w-sx w-full", className)}>
            <Carousel
                setApi={setApi}
                plugins={[
                    Autoplay({
                        delay: AUTOPLAY_DELAY,
                        stopOnInteraction: true,
                    }),
                ]}
                className="w-full"
                opts={{
                    loop: true,
                    align: "start"
                }}
            >
                <CarouselContent className="ml-0">
                    {children}
                </CarouselContent>
                <div className="flex itens-center justify-between mt-2 gap-4 px-2">
                    <div className="flex gap-2 mt-4">
                        <CarouselPrevious className="static h-8" onClick={handlePrevClick} />
                        <CarouselNext className="static h-8" onClick={handleNextClick} />
                    </div>
                    <Progress value={progress} className="mt-4 h-1 transition-none w-1/3" />
                    <div className="flex justify-center gap-2 items-center -mt-3">
                        {Array.from({length: count}).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={cn(
                                    "h-2.5 w-2.5 rounded-full transition-all",
                                    current === index + 1
                                        ? "bg-primary w-6"
                                        : "bg-primary/30 hover:bg-primary/50"
                                )}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>  
                </div>
            </Carousel>
        </div>
    )
}