<script lang="ts">
	import hotkeys from 'hotkeys-js';
	import OtherDetailsBox from '../components/OtherDetailsBox.svelte';

	let darkTimeouts: number = 5;
	let lightTimeouts: number = 5;
	let darkFouls: number = 0;
	let lightFouls: number = 0;
	let currentPeriod: number = 1;

	hotkeys('p, ctrl+t, ctrl+f, shift+t, shift+f', (event, handler) => {
		event.preventDefault();

		if (handler.key === 'ctrl+t') {
			handleTimeout('dark');
		} else if (handler.key === 'ctrl+f') {
			handleFouls('dark');
		} else if (handler.key === 'shift+t') {
			handleTimeout('light');
		} else if (handler.key === 'shift+f') {
			handleFouls('light');
		} else if (handler.key === 'p') {
			handlePeriod();
		}
	});

	function handleTimeout(side: 'dark' | 'light') {
		if (side === 'dark' && darkTimeouts > 0) {
			darkTimeouts--;
		} else if (side === 'light' && lightTimeouts > 0) {
			lightTimeouts--;
		}
	}

	function handleFouls(side: 'dark' | 'light') {
		if (side === 'dark') {
			darkFouls++;
		} else if (side === 'light') {
			lightFouls++;
		}
	}

	function handlePeriod() {
		currentPeriod++;
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
