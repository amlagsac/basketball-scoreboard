<script lang="ts">
	import TeamScore from "../components/TeamScore.svelte";


</script>

<div class="flex justify-around p-10 pt-5 h-1/3">
    <TeamScore 
        teamName={"DARK"}
        teamScore={0}
    />
    <div class="flex flex-col items-center gap-2">
        <h2 class="text-white text-center text-5xl tracking-wider font-[Impact]">SHOT CLOCK</h2>
        <div class="border border-white rounded-sm bg-black text-center py-2.5 px-2.5 w-full">
            <span class="text-[#FFA500] font-[Digital-7] text-[14rem] leading-none">24</span>
        </div>
    </div>
    <TeamScore 
        teamName={"LIGHT"}
        teamScore={0}
    />
</div>    