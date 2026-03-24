// components/ClarityProvider.tsx
"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityProvider() {
    useEffect(() => {
        Clarity.init("w0twnxbdjg");

        // Optional but recommended
        Clarity.setTag("platform", "nextjs");
    }, []);

    return null;
}