<script lang="ts">
	import BallPossessionAndGameTimer from './views/BallPossessionAndGameTimer.svelte';
	import TeamScoreAndShotClock from './views/TeamScoreAndShotClock.svelte';
	import TimeoutAndFoulDetails from './views/TimeoutAndFoulDetails.svelte';

	let shotClock: number = $state(24);
	let isGameClockRunning: boolean = $state(false);
</script>

<div class="min-h-screen w-full bg-[#242525]">
	<div class="flex h-1/3 flex-1 flex-col justify-evenly gap-3">
		<BallPossessionAndGameTimer
			{shotClock}
			isGameClockRunning={(isGameClockRunningValue: boolean) =>
				(isGameClockRunning = isGameClockRunningValue)}
		/>
		<hr class="h-[.15rem] bg-white" />
		<TeamScoreAndShotClock
			shotClockValue={(shotClockValue: number) => (shotClock = shotClockValue)}
			{isGameClockRunning}
		/>
		<TimeoutAndFoulDetails />
	</div>
</div>
