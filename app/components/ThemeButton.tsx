'use client'

import { Sun } from "lucide-react";
import * as Switch from '@radix-ui/react-switch'
import { useTheme } from "next-themes";

export function ThemeButton() {
    const { theme, setTheme } = useTheme()
    return (
        <Switch.Root id="airplane-mode">
            <Switch.Thumb />
        </Switch.Root>
    )
}