<script lang="ts">
	import hotkeys from 'hotkeys-js';
	import OtherDetailsBox from '../components/OtherDetailsBox.svelte';
	import { Operation, TeamSide } from '$lib/enum';

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
			side === TeamSide.DARK ? darkTimeouts-- : lightTimeouts--;
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

<div class="flex h-1/3 justify-around p-10 pt-5">
	<OtherDetailsBox boxLabel={'TOL'} boxValue={darkTimeouts} />
	<OtherDetailsBox boxLabel={'FOULS'} boxValue={darkFouls} isFoul={true} />
	<div class="flex flex-col items-center gap-2">
		<h3 class="text-center font-[Impact] text-4xl font-bold tracking-wider text-white">PERIOD</h3>
		<div class="w-full rounded-sm border border-white bg-black px-5 py-1 text-center">
			<span class="font-[Digital-7] text-[10rem] leading-none text-[#FFA500]"
				>{currentPeriod > 4 ? 'OT' : currentPeriod}</span
			>
		</div>
	</div>
	<OtherDetailsBox boxLabel={'FOULS'} boxValue={lightFouls} isFoul={true} />
	<OtherDetailsBox boxLabel={'TOL'} boxValue={lightTimeouts} />
</div>
