<script lang="ts">
	import BallPossessionArrow from "../components/BallPossessionArrow.svelte";

    let ballPossession: string = "";

</script>

<div class="flex justify-evenly flex-1 p-5">
    <BallPossessionArrow
        bind:ballPossession
        rightArrow={false}
    />
    <div class="border-4 border-white bg-black rounded-2xl py-5 px-16">
        <div class="h-full">
            <span class="text-red-500 text-[13rem] font-[Digital-7] leading-none">10:00</span>
        </div>
    </div>
    <BallPossessionArrow 
        bind:ballPossession
        rightArrow={true}
    />
</div>