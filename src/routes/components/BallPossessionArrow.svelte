<script>
	let { ballPossession = $bindable(), rightArrow } = $props();
</script>

<div class="flex items-center">
	{#if rightArrow}
		<span class="mr-2 font-[Impact] text-xl text-white md:text-4xl">POS</span>
		<div
			class="h-0 w-0 border-y-[1rem] border-l-[2rem] border-transparent border-l-black md:border-y-[2rem] md:border-l-[4rem]"
			class:border-l-red-500={ballPossession === 'Light'}
		></div>
	{:else}
		<div
			class="h-0 w-0 border-y-[1rem] border-r-[2rem] border-transparent border-r-black md:border-y-[2rem] md:border-r-[4rem]"
			class:border-r-red-500={ballPossession === 'Dark'}
		></div>
		<span class="ml-2 font-[Impact] text-xl text-white md:text-4xl">POS</span>
	{/if}
</div>
