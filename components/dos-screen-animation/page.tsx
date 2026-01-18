"use client";

import { useEffect, useState, useRef } from "react";

const commands = [
    "-- BIOS DATE 01/18/92 14:22:51 IST VER: 4.00",
    " ",
    "-- MOUNTING DRIVE C: ... SUCCESS",
    "-- CHECKING DISK INTEGRITY ... 100%",
    " ",
    "-- BOOT SEQUENCE COMPLETE.",
    "-- WELCOME USER",
    "-- LOGGING TO //"
];

// Delays after a line finishes typing (index: ms)
const lineDelays: Record<number, number> = {
    0: 100,
    7: 250, // After last line, wait 250ms before "completing"
};

// Define prop type for the callback
interface DosTerminalProps {
    onComplete?: () => void;
}

export default function DosTerminal({ onComplete }: DosTerminalProps) {
    const [lines, setLines] = useState<string[]>([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (currentLineIndex >= commands.length) {
            const timeout = setTimeout(() => {
                onComplete?.();
            }, 1000);
            return () => clearTimeout(timeout);
        }

        const currentCommand = commands[currentLineIndex];

        if (currentCharIndex < currentCommand.length) {
            const typeSpeed = Math.random() * 5 + 1;

            const timeout = setTimeout(() => {
                setLines((prev) => {
                    const newLines = [...prev];
                    if (newLines[currentLineIndex] === undefined) {
                        newLines[currentLineIndex] = "";
                    }
                    newLines[currentLineIndex] += currentCommand[currentCharIndex];
                    return newLines;
                });
                setCurrentCharIndex((prev) => prev + 1);
            }, typeSpeed);

            return () => clearTimeout(timeout);
        }

        else {
            let nextLineDelay = lineDelays[currentLineIndex];

            if (nextLineDelay === undefined) {
                nextLineDelay = Math.random() * 50 + 50;
            }

            if (currentCommand.trim() === "") nextLineDelay = 50;

            const timeout = setTimeout(() => {
                setCurrentLineIndex((prev) => prev + 1);
                setCurrentCharIndex(0);
            }, nextLineDelay);

            return () => clearTimeout(timeout);
        }
    }, [currentLineIndex, currentCharIndex, onComplete]); 

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [lines]);

    return (
        <div
            ref={scrollRef}
            className="w-full h-full font-mono text-green-500 text-sm md:text-base p-4 overflow-y-auto scrollbar-hide"
            style={{ fontFamily: "'VT323', monospace" }}
        >
            {lines.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap wrap-break-word leading-tight min-h-[1.2em]">
                    {line}
                </div>
            ))}
            <span className="inline-block w-2 h-4 bg-green-500 animate-pulse align-middle ml-1" />
        </div>
    );
}
