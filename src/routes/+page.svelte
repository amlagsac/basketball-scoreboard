<script>
	import BallPossessionAndGameTimer from "./views/BallPossessionAndGameTimer.svelte";
	import TeamScoreAndShotClock from "./views/TeamScoreAndShotClock.svelte";
	import TimeoutAndFoulDetails from "./views/TimeoutAndFoulDetails.svelte";

</script>

<div class="bg-[#242525] w-full min-h-screen">
     <div class="flex flex-col flex-1 justify-evenly gap-3 h-1/3">
        <BallPossessionAndGameTimer />
        <hr class="bg-white h-[.15rem]">    
        <TeamScoreAndShotClock />
        <TimeoutAndFoulDetails />
    </div>
</div>