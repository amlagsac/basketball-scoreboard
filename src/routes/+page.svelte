<script lang="ts">
	import hotkeys from 'hotkeys-js';
	import BallPossessionAndGameTimer from './views/BallPossessionAndGameTimer.svelte';
	import TeamScoreAndShotClock from './views/TeamScoreAndShotClock.svelte';
	import TimeoutAndFoulDetails from './views/TimeoutAndFoulDetails.svelte';
	import { playSubSound } from '$lib/utils';
	import HotkeysInformationModal from './views/HotkeysInformationModal.svelte';

	let shotClock: number = $state(24);
	let isGameClockRunning: boolean = $state(false);
	let showModal: boolean = $state(false);

	hotkeys('u, i', (event, handler) => {
		event.preventDefault();

		if (handler.key === 'u') {
			playSubSound();
		} else if (handler.key === 'i') {
			openModal();
		}
	});

	function openModal() {
		showModal = true;
	}
</script>

<div class="min-h-screen w-full bg-[#242525]">
	<button
		class="absolute top-4 right-4 cursor-pointer"
		aria-label="Open Information Modal"
		onclick={openModal}
	>
		ℹ️
	</button>
	<div class="flex h-1/3 flex-1 flex-col justify-evenly gap-3">
		<BallPossessionAndGameTimer
			{shotClock}
			isGameClockRunning={(isGameClockRunningValue: boolean) =>
				(isGameClockRunning = isGameClockRunningValue)}
		/>
		<hr class="h-[.15rem] bg-white" />
		<TeamScoreAndShotClock
			shotClockValue={(shotClockValue: number) => (shotClock = shotClockValue)}
			{isGameClockRunning}
		/>
		<TimeoutAndFoulDetails />
	</div>
</div>
<HotkeysInformationModal
	{showModal}
	setModalValue={(modalValue: boolean) => (showModal = modalValue)}
/>
