<script lang="ts">
	import hotkeys from 'hotkeys-js';
	import TeamScore from '../components/TeamScore.svelte';
	import { onDestroy } from 'svelte';
	import { playShotClockSound } from '$lib/utils';
	import { Operation } from '$lib/enum';

	let darkScore: number = $state(0);
	let lightScore: number = $state(0);
	let shotClockInterval: number | null = $state(null);
	let disableShotClock: boolean = $state(true);

	let {
		shotClock = $bindable(),
		isGameTimerRunning = $bindable(),
		gameMinutes = $bindable(),
		gameSeconds = $bindable()
	} = $props();

	hotkeys(
		'z, x, r, q, ctrl+q, d, ctrl+1, ctrl+2, ctrl+3, ctrl+-, shift+1, shift+2, shift+3, shift+-',
		(event, handler) => {
			event.preventDefault();
			if (handler.key === 'z') {
				if (gameMinutes < 1 && gameSeconds < 24) {
					shotClock = '--';
				} else {
					shotClock = 24;
				}
			} else if (handler.key === 'x') {
				if (gameMinutes < 1 && gameSeconds < 14) {
					shotClock = '--';
				} else {
					shotClock = 14;
				}
			} else if (handler.key === 'r') {
				resetShotClock();
			} else if (handler.key === 'q') {
				handleIncrementOrDecrementShotClock(Operation.INCREMENT);
			} else if (handler.key === 'ctrl+q') {
				handleIncrementOrDecrementShotClock(Operation.DECREMENT);
			} else if (handler.key === 'd') {
				handleDisableShotClock();
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
		if (isGameTimerRunning) {
			startShotClock();
		} else {
			stopShotClock();
		}
	});

	function startShotClock(): void {
		if (shotClockInterval) return;
		shotClockInterval = setInterval(() => {
			if (shotClock > 1 && !disableShotClock) {
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

	function resetShotClock() {
		shotClock = 24;
	}

	function handleDisableShotClock() {
		return (disableShotClock = !disableShotClock);
	}

	function handleIncrementOrDecrementShotClock(direction: Operation) {
		if (direction === Operation.INCREMENT) {
			shotClock = Math.min(shotClock + 1, 24);
		} else if (direction === Operation.DECREMENT) {
			shotClock = Math.max(shotClock - 1, 1);
		}
	}

	onDestroy(() => {
		stopShotClock();
	});
</script>

<div class="flex justify-between px-4 pt-3 md:justify-around md:p-5">
	<TeamScore teamName={'DARK'} teamScore={darkScore} />
	<div class="flex flex-col items-center gap-2">
		<h2 class="text-center font-[Impact] text-lg text-white md:text-5xl md:tracking-wider">
			SHOT CLOCK
		</h2>
		<div
			class="flex flex-col items-center justify-center rounded-sm border border-white bg-black px-2.5 py-2.5 text-center md:p-2.5"
		>
			<span class="font-[Digital-7] text-6xl leading-none text-[#FFA500] md:text-[12rem]"
				>{shotClock}</span
			>
			<div class={`h-1 w-1 rounded-full ${!disableShotClock ? 'bg-[#90EE90]' : 'bg-white'}`}></div>
		</div>
	</div>
	<TeamScore teamName={'LIGHT'} teamScore={lightScore} />
</div>
