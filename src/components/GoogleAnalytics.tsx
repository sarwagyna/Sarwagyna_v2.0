"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GoogleAnalytics() {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window.gtag === "function") {
            window.gtag("config", "G-C3690ECPQR", {
                page_path: pathname,
            });
        }
    }, [pathname]);

    return null;
}