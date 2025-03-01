<script lang="ts">
	import hotkeys from 'hotkeys-js';
	import TeamScore from '../components/TeamScore.svelte';
	import { onDestroy } from 'svelte';
	import { playShotClockSound } from '$lib/utils';

	let darkScore: number = $state(0);
	let lightScore: number = $state(0);
	let shotClockInterval: number | null = $state(null);

	let { shotClock = $bindable(), isGameTimerRunning = $bindable() } = $props();

	hotkeys(
		'z, x, r, ctrl+1, ctrl+2, ctrl+3, ctrl+-, shift+1, shift+2, shift+3, shift+-',
		(event, handler) => {
			event.preventDefault();
			if (handler.key === 'z') {
				shotClock = 24;
			} else if (handler.key === 'x') {
				shotClock = 14;
			} else if (handler.key === 'r') {
				resetShotClock();
			} else if (handler.key === 'ctrl+-') {
				if (darkScore > 0) darkScore--;
			} else if (handler.key === 'shift+-') {
				if (lightScore > 0) lightScore--;
			} else if (handler.key.startsWith('ctrl+')) {
				const pointsToAddDark = parseInt(handler.key.split('+')[1]);
				darkScore += pointsToAddDark;
			} else if (handler.key.startsWith('shift+')) {
				const pointsToAddLight = parseInt(handler.key.split('+')[1]);
				lightScore += pointsToAddLight;
			}
		}
	);

	$effect(() => {
		console.log(isGameTimerRunning);
		if (isGameTimerRunning) {
			startShotClock();
		} else {
			stopShotClock();
		}
	});

	function startShotClock(): void {
		if (shotClockInterval) return;
		shotClockInterval = setInterval(() => {
			if (shotClock > 1) {
				shotClock--;
			} else if (shotClock === 1) {
				shotClock = 0;
				stopShotClockWithBuzzerSound();
			}
		}, 1000);
	}

	function stopShotClock(): void {
		if (shotClockInterval) {
			clearInterval(shotClockInterval);
			shotClockInterval = null;
		}
	}

	function stopShotClockWithBuzzerSound(): void {
		playShotClockSound();
		stopShotClock();
	}

	function updateShotClock(event: Event): void {
		const target = event.target as HTMLElement;
		let text = target.innerText.trim().replace(/\D/g, '');

		let newShotClock = parseInt(text, 10);

		if (isNaN(newShotClock) || newShotClock < 1) {
			newShotClock = 1;
		} else if (newShotClock > 24) {
			newShotClock = 24;
		}

		shotClock = newShotClock;
	}

	function resetShotClock() {
		shotClock = 24;
	}

	onDestroy(() => {
		stopShotClock();
	});
</script>

<div class="flex justify-between px-4 pt-3 md:justify-around md:p-5">
	<TeamScore teamName={'DARK'} teamScore={darkScore} />
	<div class="flex flex-col items-center gap-2">
		<h2 class="text-center font-[Impact] text-lg text-white md:text-4xl md:tracking-wider">
			SHOT CLOCK
		</h2>
		<div class="rounded-sm border border-white bg-black px-2.5 py-2.5 text-center md:p-2.5">
			<span
				contenteditable="true"
				class="font-[Digital-7] text-5xl leading-none text-[#FFA500] md:text-[12rem]"
				oninput={(event: Event) => updateShotClock(event)}>{shotClock}</span
			>
		</div>
	</div>
	<TeamScore teamName={'LIGHT'} teamScore={lightScore} />
</div>
