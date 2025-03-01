<script>
	let { boxLabel, boxValue, isFoul = false } = $props();
</script>

<div class="flex flex-col items-center gap-2 md:gap-1">
	<h3 class="text-md text-center font-[Impact] tracking-wider text-white md:text-2xl">
		{boxLabel}
	</h3>
	<div class="rounded-sm border border-white bg-black px-2 py-1 text-center md:px-5 md:py-1">
		<span class="font-[Digital-7] text-5xl leading-none text-red-500 md:text-[8rem]"
			>{isFoul && boxValue > 4 ? 'P' : boxValue}</span
		>
	</div>
</div>
