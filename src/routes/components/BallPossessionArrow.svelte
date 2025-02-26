<script>
	let { ballPossession = $bindable(), rightArrow } = $props();
</script>

<div class="flex items-center">
	{#if rightArrow}
		<span class="mr-2 font-[Impact] text-4xl font-medium tracking-wider text-white">POS</span>
		<div
			class="h-0 w-0 border-y-[3rem] border-l-[5rem] border-transparent border-l-black"
			class:border-l-red-500={ballPossession === 'Light'}
		></div>
	{:else}
		<div
			class="h-0 w-0 border-y-[3rem] border-r-[5rem] border-transparent border-r-black"
			class:border-r-red-500={ballPossession === 'Dark'}
		></div>
		<span class="ml-2 font-[Impact] text-4xl font-medium tracking-wider text-white">POS</span>
	{/if}
</div>
