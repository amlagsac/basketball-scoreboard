<script>
    let { teamName, teamScore } = $props();
</script>

<div class="flex flex-col items-center gap-2">
    <h2 class="text-white text-center text-5xl tracking-wider font-[Impact]">{teamName}</h2>
    <div class="border border-white rounded-sm bg-black text-center py-1 px-5 w-full">
        <span class="text-[#2CE71E] font-[Digital-7] text-[15rem] leading-none">{teamScore}</span>
    </div>
</div>