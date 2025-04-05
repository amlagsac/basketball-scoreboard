<script lang="ts">
	import hotkeys from 'hotkeys-js';
	import BallPossessionArrow from '../components/BallPossessionArrow.svelte';
	import { onDestroy } from 'svelte';
	import { playLongBuzzerSound } from '$lib/utils';
	import { Operation } from '$lib/enum';

	let ballPossession: string = $state('Dark');
	let timerInterval: number | null = $state(null);

	let {
		shotClock = $bindable(),
		isGameTimerRunning = $bindable(),
		gameMinutes = $bindable(),
		gameSeconds = $bindable()
	} = $props();

	hotkeys('b, s, r, m, n, ctrl+m, ctrl+n', (event, handler) => {
		event.preventDefault();
		if (handler.key === 'b') {
			changeBallPossession();
		} else if (handler.key === 's') {
			toggleGameTimer();
		} else if (handler.key === 'r') {
			resetGameTimer();
		} else if (handler.key === 'm') {
			handleIncrementOrDecrementMinutes(Operation.INCREMENT);
		} else if (handler.key === 'n') {
			handleIncrementOrDecrementSeconds(Operation.INCREMENT);
		} else if (handler.key === 'ctrl+m') {
			handleIncrementOrDecrementMinutes(Operation.DECREMENT);
		} else if (handler.key === 'ctrl+n') {
			handleIncrementOrDecrementSeconds(Operation.DECREMENT);
		}
	});

	function changeBallPossession(): void {
		ballPossession = ballPossession === 'Dark' ? 'Light' : 'Dark';
	}

	function toggleGameTimer(): void {
		if (isGameTimerRunning) {
			stopGameClock();
		} else if (shotClock > 0 || shotClock === '--') {
			startGameClock();
		}
	}

	function startGameClock(): void {
		if (isGameTimerRunning) return;
		isGameTimerRunning = true;

		timerInterval = setInterval(() => {
			if (gameMinutes === 0 && gameSeconds === 0) {
				stopGameClock();
				const longBuzzerSound = playLongBuzzerSound();
				longBuzzerSound.start();
				return;
			}
			if (gameSeconds === 0) {
				gameMinutes--;
				gameSeconds = 59;
			} else {
				gameSeconds--;
			}
		}, 1000);
	}

	function stopGameClock(): void {
		if (timerInterval) {
			clearInterval(timerInterval);
			timerInterval = null;
		}
		isGameTimerRunning = false;
	}

	function handleIncrementOrDecrementMinutes(mode: Operation) {
		if (mode === Operation.INCREMENT) {
			gameMinutes++;
		} else if (mode === Operation.DECREMENT) {
			gameMinutes = Math.max(gameMinutes - 1, 0);
		}
	}

	function handleIncrementOrDecrementSeconds(mode: Operation) {
		if (mode === Operation.INCREMENT) {
			gameSeconds = Math.min(gameSeconds + 1, 59);
		} else if (mode === Operation.DECREMENT) {
			gameSeconds = Math.max(gameSeconds - 1, 0);
		}
	}

	function resetGameTimer() {
		gameMinutes = 10;
		gameSeconds = 0;
	}

	$effect(() => {
		if (shotClock <= 0) {
			stopGameClock();
		}
	});

	onDestroy(() => {
		stopGameClock();
	});
</script>

<div class="flex justify-around px-1 pt-8.5 pb-3 md:p-3 md:pb-0">
	<BallPossessionArrow bind:ballPossession rightArrow={false} />
	<div class="rounded-2xl border-2 border-white bg-black px-4 py-3 md:border-4 md:py-2">
		<span class="font-[Digital-7] text-5xl leading-none text-red-500 md:text-[12rem]"
			>{gameMinutes}</span
		>
		<span class="font-[Digital-7] text-5xl leading-none text-red-500 md:text-[12rem]">:</span>
		<span class="font-[Digital-7] text-5xl leading-none text-red-500 md:text-[12rem]"
			>{(gameSeconds <= 9 ? '0' : '') + gameSeconds}</span
		>
	</div>
	<BallPossessionArrow bind:ballPossession rightArrow={true} />
</div>
