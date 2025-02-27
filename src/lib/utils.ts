import { assets } from '$app/paths';

export function playLongBuzzerSound(): void {
	const longBuzzerSound: HTMLAudioElement = new Audio(`${assets}/sounds/LongBuzzerSound.mp3`);
	longBuzzerSound.play();
}

export function playShotClockSound(): void {
	const shotClockSound: HTMLAudioElement = new Audio(`${assets}/sounds/ShotClock.mp3`);
	shotClockSound.play();
}

export function playSubSound(): void {
	const subSound: HTMLAudioElement = new Audio(`${assets}/sounds/SubBuzzer.mp3`);
	subSound.play();
}
