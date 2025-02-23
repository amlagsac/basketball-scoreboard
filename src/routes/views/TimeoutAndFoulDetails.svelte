<script lang="ts">
	import OtherDetailsBox from "../components/OtherDetailsBox.svelte";


</script>

<div class="flex justify-around p-10 pt-5 h-1/3">
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