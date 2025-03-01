<script lang="ts">
	import hotkeys from 'hotkeys-js';
	import BallPossessionAndGameTimer from './views/BallPossessionAndGameTimer.svelte';
	import TeamScoreAndShotClock from './views/TeamScoreAndShotClock.svelte';
	import TimeoutAndFoulDetails from './views/TimeoutAndFoulDetails.svelte';
	import { playLongBuzzerSound, playSubSound } from '$lib/utils';
	import HotkeysInformationModal from './views/HotkeysInformationModal.svelte';

	let shotClock: number = $state(24);
	let isGameTimerRunning: boolean = $state(false);
	let showHotkeyInstructionsModal: boolean = $state(false);

	hotkeys('u, i, space', (event, handler) => {
		event.preventDefault();

		if (handler.key === 'u') {
			playSubSound();
		} else if (handler.key === 'space') {
			playLongBuzzerSound();
		} else if (handler.key === 'i') {
			openModal();
		}
	});

	function openModal() {
		showHotkeyInstructionsModal = true;
	}
</script>

<div class="flex h-full min-h-screen w-full flex-col items-center bg-[#242525]">
	<button
		class="absolute top-0 right-0 cursor-pointer rounded-full p-2 text-xs text-white transition hover:bg-gray-700 md:top-4 md:right-4 md:text-2xl"
		aria-label="Open Information Modal"
		onclick={openModal}
	>
		ℹ️
	</button>
	<div class="flex w-full flex-1 flex-col gap-3">
		<BallPossessionAndGameTimer bind:shotClock bind:isGameTimerRunning />
		<hr class="h-[.10rem] bg-white md:h-[.15rem]" />
		<TeamScoreAndShotClock bind:shotClock bind:isGameTimerRunning />
		<TimeoutAndFoulDetails />
	</div>
</div>

<HotkeysInformationModal bind:showHotkeyInstructionsModal />
