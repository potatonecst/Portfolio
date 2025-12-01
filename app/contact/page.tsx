"use client"

import * as React from "react";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { z } from "zod";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldTitle
} from "@/components/ui/field";
import { TypographyH2, TypographyH3, TypographyH4, TypographyP } from "@/components/ui/typography";
import { AlertCircleIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

//バリデーションスキーマ
const formSchema = z.object({
    email: z.email({message: "メールアドレスの形式が正しくありません。"}) //形式チェック
        .min(1, {message: "メールアドレスは必須です。"}), //必須チェック
    message: z.string()
        .min(1, {message: "お問い合わせ内容は必須です。"}) //必須チェック
        .max(1000, {message: "お問い合わせ内容は1000字以内で入力してください。"}), //最大字数チェック
})

//スキーマから型を生成
type FormData = z.infer<typeof formSchema>

export default function ContactPage() {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting},
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: "onBlur", //入力欄から離れた時にチェック
        defaultValues: {
            email: "",
            message: "",
        }
    })

    const onSubmit = async (data: FormData) => {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("送信に失敗しました。")
            }

            //送信に成功した場合
            reset();

            toast.success(<b>送信完了</b>, {
                description: "お問い合わせありがとうございます。送信完了メールをお送りしました。",
            })
        } catch (error) {
            console.error(error);

            toast.error("送信エラー", {
                description: "送信に失敗しました。時間をおいて再度お試しください。"
            })
        }
    }

    return (
        <div className="col-span-full md:grid md:grid-cols-12">
            <div className="md:col-span-10 md:col-start-2 space-y-4">
                <div>
                    <TypographyH2>お問い合わせ</TypographyH2>
                </div>

                <div className="w-full">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FieldGroup>
                            <FieldSet>
                                <FieldLegend className="font-bold">お問い合わせフォーム</FieldLegend>
                                <FieldDescription className="text-black">
                                    お問い合わせはこちらのフォームからお願いいたします。<br />
                                    返答は portfolio@potatonecst.com より行いますので、受信できるようにご設定ください。<br />
                                    回答には時間を要します。ご了承ください。
                                </FieldDescription>
                                <FieldGroup>
                                    <Field data-invalid={!!errors.email}>
                                        <FieldLabel htmlFor="mail-address">
                                            メールアドレス
                                        </FieldLabel>
                                        <Input
                                            id="mail-address"
                                            type="email"
                                            placeholder="example@example.com"
                                            {...register("email")}
                                        />
                                        <FieldError errors={[errors.email]} />
                                    </Field>
                                    <Field data-invalid={!!errors.message}>
                                        <FieldLabel htmlFor="inquiry-details">
                                            お問い合わせ内容
                                        </FieldLabel>
                                        <FieldDescription>
                                            1000文字以下で入力してください。
                                        </FieldDescription>
                                        <Textarea
                                            id="inquiry-details"
                                            placeholder="お問い合わせ内容を入力してください。"
                                            className="resize-none h-96"
                                            {...register("message")}
                                        />
                                        <FieldError errors={[errors.message]} />
                                    </Field>
                                </FieldGroup>
                            </FieldSet>
                            <Field>
                                <Button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? "送信中..." : "送信"}
                                </Button>
                            </Field>
                        </FieldGroup>
                    </form>
                </div>

                {/*<Alert variant="default">
                    <AlertCircleIcon />
                    <AlertTitle>このページは現在作成中です。</AlertTitle>
                    <AlertDescription>
                        <TypographyP>
                            以下のメールアドレスまでご連絡ください。<br />
                            Mail: cubists-20.inkier@icloud.com
                        </TypographyP>

                    </AlertDescription>
                </Alert>*/}
            </div>
        </div>
    );
}