<script>
    let { boxLabel, boxValue } = $props();
</script>

<div class="flex flex-col items-center gap-2">
    <h3 class="text-white text-center text-4xl font-[Impact] tracking-wider font-bold">{boxLabel}</h3>
    <div class="border border-white rounded-sm bg-black text-center py-1 px-5 w-full">
        <span class="text-red-500 font-[Digital-7] text-[10rem] leading-none">{boxValue}</span>
    </div>
</div>