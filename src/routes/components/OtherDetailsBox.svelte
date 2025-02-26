<script>
	let { boxLabel, boxValue, isFoul = false } = $props();
</script>

<div class="flex flex-col items-center gap-2">
	<h3 class="text-center font-[Impact] text-4xl font-bold tracking-wider text-white">{boxLabel}</h3>
	<div class="w-full rounded-sm border border-white bg-black px-5 py-1 text-center">
		<span class="font-[Digital-7] text-[10rem] leading-none text-red-500"
			>{isFoul && boxValue > 4 ? 'P' : boxValue}</span
		>
	</div>
</div>
