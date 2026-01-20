import { useRef, useEffect } from "react";

type EmptyFx = () => void;

export const useSound = (audioSource: string): { playSound: EmptyFx; pauseSound: EmptyFx } => {
	const soundRef = useRef<HTMLAudioElement | null>(null);

	useEffect(() => {
		soundRef.current = new Audio(audioSource);
	}, [audioSource]);

	return {
		playSound: () => soundRef.current?.play(),
		pauseSound: () => soundRef.current?.pause(),
	};
};
