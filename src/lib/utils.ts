import { assets } from '$app/paths';

export function playLongBuzzerSound() {
	const longBuzzerSound: HTMLAudioElement = new Audio(
		`${assets}/sounds/LongOfficialBuzzerSound.mp3`
	);

	return {
		start: function () {
			longBuzzerSound.play();
		},
		stop: function () {
			longBuzzerSound.pause();
			longBuzzerSound.currentTime = 0;
		}
	};
}

export function playShotClockSound(): void {
	const shotClockSound: HTMLAudioElement = new Audio(`${assets}/sounds/ShotClockSound.mp3`);
	shotClockSound.play();
}
