<script lang="ts">
	import hotkeys from 'hotkeys-js';
	import TeamScore from '../components/TeamScore.svelte';
	import { onDestroy } from 'svelte';

	let darkScore: number = $state(0);
	let lightScore: number = $state(0);
	let shotClockInterval: number | null = $state(null);

	let { shotClock = 24, isGameClockRunning = false, shotClockValue } = $props();

	hotkeys(
		'z, x, ctrl+1, ctrl+2, ctrl+3, ctrl+-, shift+1, shift+2, shift+3, shift+-',
		(event, handler) => {
			event.preventDefault();
			if (handler.key === 'z') {
				shotClock = 24;
				updateShotClockValue();
			} else if (handler.key === 'x') {
				shotClock = 14;
				updateShotClockValue();
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
		if (isGameClockRunning) {
			startShotClock();
		} else {
			stopShotClock();
		}
	});

	function startShotClock(): void {
		if (shotClockInterval) return;
		shotClockInterval = setInterval(() => {
			if (shotClock > 0) {
				shotClock--;
				updateShotClockValue();
			} else {
				stopShotClock();
			}
		}, 1000);
	}

	function stopShotClock(): void {
		if (shotClockInterval) {
			clearInterval(shotClockInterval);
			shotClockInterval = null;
		}
	}

	function updateShotClockValue(): void {
		return shotClockValue?.(shotClock);
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

		updateShotClockValue();
	}

	onDestroy(() => {
		stopShotClock();
	});
</script>

<div class="flex h-1/3 justify-around p-10 pt-5">
	<TeamScore teamName={'DARK'} teamScore={darkScore} />
	<div class="flex flex-col items-center gap-2">
		<h2 class="text-center font-[Impact] text-5xl tracking-wider text-white">SHOT CLOCK</h2>
		<div class="w-full rounded-sm border border-white bg-black px-2.5 py-2.5 text-center">
			<span
				contenteditable="true"
				class="font-[Digital-7] text-[14rem] leading-none text-[#FFA500]"
				oninput={(event: Event) => updateShotClock(event)}>{shotClock}</span
			>
		</div>
	</div>
	<TeamScore teamName={'LIGHT'} teamScore={lightScore} />
</div>
