"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

type ThemeProps = "dark" | "light";

const ButtonTheme = () => {
    const [theme, setTheme] = useState<ThemeProps | null>(null);

    useEffect(() => {
        const storageTheme =
            (localStorage.getItem("valueTheme") as ThemeProps) ?? "dark";

        document.documentElement.setAttribute("data-theme", storageTheme);
        setTheme(storageTheme);
    }, []);

    function onChangeMode() {
        if (!theme) return;

        const next = theme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("valueTheme", next);
        setTheme(next);
    }

    // 🔒 Bloqueia render até saber o tema
    if (!theme) return null;

    return (
        <Button
            aria-label="tema"
            variant="outline"
            className="bg-transparent"
            onClick={onChangeMode}
        >
            {theme === 'dark' ? (
                <Sun size={20} />

            ): (
                <Moon size={20} />
            )}
        </Button>
    );
};

export default ButtonTheme;
