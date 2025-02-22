<script lang="ts">
	import BallPossessionArrow from "./components/BallPossessionArrow.svelte";
	import OtherDetailsBox from "./components/OtherDetailsBox.svelte";
	import TeamScore from "./components/TeamScore.svelte";

    let ballPossession: boolean = false;
</script>

<div class="bg-[#242525] w-full h-full min-h-screen">
     <div class="flex flex-col flex-1 justify-evenly gap-3">
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
        <hr class="bg-white h-[.15rem]">
        <div class="flex justify-around p-10 pt-5">
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
        <div class="flex justify-around p-10 pt-5">
            <!-- <div class="flex flex-col items-center gap-2">
                <h2 class="text-white text-center text-3xl font-bold">TOL</h2>
                <div class="border border-white rounded-sm bg-black text-center p-5 w-full">
                    <span class="text-red-500 text-7xl">5</span>
                </div>
            </div> -->
            <OtherDetailsBox 
                boxLabel={"TOL"}
                boxValue={5}
            />
            <OtherDetailsBox 
                boxLabel={"FOULS"}
                boxValue={0}
            />
            <div class="flex flex-col items-center gap-2">
                <h3 class="text-white text-center text-4xl font-[Impact] tracking-wider font-bold">PERIOD</h3>
                <div class="border border-white rounded-sm bg-black text-center py-1 px-5 w-full">
                    <span class="text-[#FFA500] font-[Digital-7] text-[10rem] leading-none">1</span>
                </div>
            </div>
            <OtherDetailsBox 
                boxLabel={"FOULS"}
                boxValue={0}
            />
            <OtherDetailsBox 
                boxLabel={"TOL"}
                boxValue={5}
            />
        </div>   
    </div>
</div>