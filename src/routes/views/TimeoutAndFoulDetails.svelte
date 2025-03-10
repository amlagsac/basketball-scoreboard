<script lang="ts">
	import hotkeys from 'hotkeys-js';
	import OtherDetailsBox from '../components/OtherDetailsBox.svelte';
	import { Operation, TeamSide } from '$lib/enum';
	import { playLongBuzzerSound } from '$lib/utils';

	let darkTimeouts: number = 5;
	let lightTimeouts: number = 5;
	let darkFouls: number = 0;
	let lightFouls: number = 0;
	let currentPeriod: number = 1;

	hotkeys(
		'p, o, ctrl+t, ctrl+f, ctrl+y, ctrl+g, shift+t, shift+f, shift+y, shift+g',
		(event, handler) => {
			event.preventDefault();

			const actions: { [key: string]: () => void } = {
				'ctrl+t': () => handleTimeout(TeamSide.DARK, Operation.DECREMENT),
				'ctrl+y': () => handleTimeout(TeamSide.DARK, Operation.INCREMENT),
				'ctrl+f': () => handleFouls(TeamSide.DARK, Operation.INCREMENT),
				'ctrl+g': () => handleFouls(TeamSide.DARK, Operation.DECREMENT),
				'shift+t': () => handleTimeout(TeamSide.LIGHT, Operation.DECREMENT),
				'shift+y': () => handleTimeout(TeamSide.LIGHT, Operation.INCREMENT),
				'shift+f': () => handleFouls(TeamSide.LIGHT, Operation.INCREMENT),
				'shift+g': () => handleFouls(TeamSide.LIGHT, Operation.DECREMENT),
				p: () => handlePeriod(Operation.INCREMENT),
				o: () => handlePeriod(Operation.DECREMENT)
			};

			actions[handler.key as keyof typeof actions]?.();
		}
	);

	function handleTimeout(side: TeamSide, mode: Operation) {
		let timeouts = side === TeamSide.DARK ? darkTimeouts : lightTimeouts;

		if (mode === Operation.INCREMENT && timeouts < 5) {
			side === TeamSide.DARK ? darkTimeouts++ : lightTimeouts++;
		} else if (mode === Operation.DECREMENT && timeouts > 0) {
			if (side === TeamSide.DARK) {
				darkTimeouts--;
				playLongBuzzerSound();
			} else {
				lightTimeouts--;
				playLongBuzzerSound();
			}
		}
	}

	function handleFouls(side: TeamSide, mode: Operation) {
		let fouls = side === TeamSide.DARK ? darkFouls : lightFouls;

		if (mode === Operation.INCREMENT) {
			side === TeamSide.DARK ? darkFouls++ : lightFouls++;
		} else if (mode === Operation.DECREMENT && fouls > 0) {
			side === TeamSide.DARK ? darkFouls-- : lightFouls--;
		}
	}

	function handlePeriod(mode: Operation) {
		if (mode === Operation.INCREMENT && currentPeriod < 5) {
			currentPeriod++;
		} else if (mode === Operation.DECREMENT && currentPeriod > 1) {
			currentPeriod--;
		}
	}
</script>

<div class="flex justify-around px-1 pt-5 md:p-1 md:pb-5">
	<OtherDetailsBox boxLabel={'TOL'} boxValue={darkTimeouts} />
	<OtherDetailsBox boxLabel={'FOULS'} boxValue={darkFouls} isFoul={true} />
	<div class="flex flex-col items-center gap-2">
		<h3
			class="text-md text-center font-[Impact] font-bold text-white md:text-3xl md:tracking-wider"
		>
			PERIOD
		</h3>
		<div
			class="w-full rounded-sm border border-white bg-black px-2 py-1 text-center md:px-5 md:py-1"
		>
			<span class="font-[Digital-7] text-6xl leading-none text-[#FFA500] md:text-[8rem]"
				>{currentPeriod > 4 ? 'OT' : currentPeriod}</span
			>
		</div>
	</div>
	<OtherDetailsBox boxLabel={'FOULS'} boxValue={lightFouls} isFoul={true} />
	<OtherDetailsBox boxLabel={'TOL'} boxValue={lightTimeouts} />
</div>
