<script>
	let { teamName, teamScore } = $props();
</script>

<div class="flex flex-col items-center gap-2">
	<h2
		contenteditable="true"
		class="text-center font-[Impact] text-lg break-words text-white md:text-4xl md:tracking-wider"
	>
		{teamName}
	</h2>
	<div class="w-full rounded-sm border border-white bg-black px-5 py-1 text-center">
		<span class="font-[Digital-7] text-6xl leading-none text-[#2CE71E] md:text-[12rem]"
			>{teamScore}</span
		>
	</div>
</div>
