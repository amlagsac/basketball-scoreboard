<script>
    let { ballPossession = $bindable(), rightArrow } = $props();
</script>

<div class="flex items-center">
    {#if rightArrow}
        <span class="text-white text-4xl font-[Impact] mr-2 font-medium tracking-wider">POS</span>
        <div class="w-0 h-0 border-y-[3rem] border-l-[5rem] border-transparent border-l-black"
            class:border-l-red-500={ballPossession}>
        </div>
    {:else}
        <div class="w-0 h-0 border-y-[3rem] border-r-[5rem] border-transparent border-r-black"
            class:border-r-red-500={ballPossession}>
        </div>
        <span class="text-white text-4xl font-[Impact] ml-2 font-medium tracking-wider">POS</span>
    {/if}
</div>