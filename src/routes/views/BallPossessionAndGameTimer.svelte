<script lang="ts">
	import hotkeys from 'hotkeys-js';
	import BallPossessionArrow from '../components/BallPossessionArrow.svelte';
	import { onDestroy } from 'svelte';

	let ballPossession: string = $state('Dark');
	let gameMinutes: number = $state(10);
	let gameSeconds: number = $state(0);
	let isGameTimerRunning: boolean = $state(false);
	let timerInterval: number | null = $state(null);

	let { shotClock, isGameClockRunning } = $props();

	hotkeys('b, s', (event, handler) => {
		event.preventDefault();
		if (handler.key === 'b') {
			changeBallPossession();
		} else if (handler.key === 's') {
			toggleGameTimer();
		}
	});

	function changeBallPossession(): void {
		ballPossession = ballPossession === 'Dark' ? 'Light' : 'Dark';
	}

	function toggleGameTimer(): void {
		if (isGameTimerRunning) {
			stopGameClock();
		} else if (shotClock > 0) {
			startGameClock();
		}
	}

	function startGameClock(): void {
		if (isGameTimerRunning) return;
		isGameTimerRunning = true;
		isGameClockRunning?.(isGameTimerRunning);

		timerInterval = setInterval(() => {
			if (gameMinutes === 0 && gameSeconds === 0) {
				stopGameClock();
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
		isGameClockRunning?.(isGameTimerRunning);
	}

	function updateMinutes(event: Event): void {
		const target = event.target as HTMLElement;
		let text = target.innerText.trim().replace(/\D/g, '');

		if (text.length > 2) {
			text = text.slice(0, 2);
		}

		let mins = parseInt(text, 10);

		if (isNaN(mins) || mins < 0) {
			mins = 0;
		}

		gameMinutes = mins;
	}

	function updateSeconds(event: Event): void {
		const target = event.target as HTMLElement;
		let text = target.innerText.trim().replace(/\D/g, '');

		if (text.length > 2) {
			text = text.slice(0, 2);
		}

		let secs = parseInt(text, 10);

		if (isNaN(secs) || secs < 0) {
			secs = 0;
		} else if (secs >= 60) {
			secs = 59;
		}

		gameSeconds = secs;
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

<div class="flex flex-1 justify-evenly p-5">
	<BallPossessionArrow bind:ballPossession rightArrow={false} />
	<div class="rounded-2xl border-4 border-white bg-black px-16 py-5">
		<div class="h-full">
			<span
				contenteditable="true"
				class="font-[Digital-7] text-[13rem] leading-none text-red-500"
				oninput={(event: Event) => updateMinutes(event)}>{gameMinutes}</span
			>
			<span class="font-[Digital-7] text-[13rem] leading-none text-red-500">:</span>
			<span
				contenteditable="true"
				class="font-[Digital-7] text-[13rem] leading-none text-red-500"
				oninput={(event: Event) => updateSeconds(event)}
				>{(gameSeconds <= 9 ? '0' : '') + gameSeconds}</span
			>
		</div>
	</div>
	<BallPossessionArrow bind:ballPossession rightArrow={true} />
</div>
