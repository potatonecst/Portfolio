import * as React from "react";

import { cn } from "@/lib/utils"

export const TypographyH1 = ({className, children, ...props}: React.ComponentPropsWithoutRef<"h1">) => {
    return (
        <h1
            className={cn(
                "scroll-m-20 text-4xl font-extrabold tracking-tight text-balance",
                className
            )}
            {...props}
        >
            {children}
        </h1>
    )
}

export const TypographyH2 = ({className, children, ...props}: React.ComponentPropsWithoutRef<"h2">) => {
    return (
        <h2
            className={cn(
                "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
                className
            )}
            {...props}
        >
            {children}
        </h2>
    )
}

export const TypographyH3 = ({className, children, ...props}: React.ComponentPropsWithoutRef<"h3">) => {
    return (
        <h3
            className={cn(
                "scroll-m-20 text-2xl font-semibold tracking-tight",
                className
            )}
            {...props}
        >
            {children}
        </h3>
    )
}

export const TypographyH4 = ({className, children, ...props}: React.ComponentPropsWithoutRef<"h4">) => {
    return (
        <h4
            className={cn(
                "scroll-m-20 text-xl font-semibold tracking-tight",
                className
            )}
            {...props}
        >
            {children}
        </h4>
    )
}

export const TypographyP = ({className, children, ...props}: React.ComponentPropsWithoutRef<"p">) => {
    return (
        <p
            className={cn(
                "leading-7 not-first:mt-6",
                className
            )}
            {...props}
        >
            {children}
        </p>
    )
}