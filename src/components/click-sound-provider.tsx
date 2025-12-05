"use client";

import { useEffect } from "react";

export function ClickSoundProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const playClick = () => {
            const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
            if (!AudioContext) return;

            const ctx = new AudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.connect(gain);
            gain.connect(ctx.destination);

            // Create a short, pleasant "click" sound
            osc.type = "sine";
            osc.frequency.setValueAtTime(1000, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(500, ctx.currentTime + 0.05);

            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

            osc.start();
            osc.stop(ctx.currentTime + 0.05);
        };

        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if the clicked element or any parent is interactive
            const isInteractive =
                target.closest("button") ||
                target.closest("a") ||
                target.closest('[role="button"]') ||
                target.closest('input[type="submit"]') ||
                target.closest('input[type="button"]');

            if (isInteractive) {
                playClick();
            }
        };

        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);

    return <>{children}</>;
}
