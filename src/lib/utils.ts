export function playLongBuzzerSound(): void {
	const longBuzzerSound: HTMLAudioElement = new Audio('/sounds/LongBuzzerSound.mp3');
	longBuzzerSound.play();
}

export function playShotClockSound(): void {
	const shotClockSound: HTMLAudioElement = new Audio('/sounds/ShotClock.mp3');
	shotClockSound.play();
}

export function playSubSound(): void {
	const subSound: HTMLAudioElement = new Audio('/sounds/SubBuzzer.mp3');
	subSound.play();
}
