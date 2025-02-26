<script lang="ts">
	let activeTab: string = $state('general');
	let { showModal = false, setModalValue } = $props();

	function closeModal() {
		showModal = false;
		setModalValue?.(showModal);
	}
</script>

{#if showModal}
	<div
		class="fixed inset-0 flex items-center justify-center bg-black/75 p-4"
		role="dialog"
		aria-modal="true"
	>
		<div class="w-full max-w-lg rounded-xl bg-white p-6 shadow-lg">
			<div class="mb-4 flex items-center justify-between">
				<h1 class="text-xl font-semibold">Hotkeys Information</h1>
				<button
					class="cursor-pointer text-gray-600 hover:text-gray-900"
					onclick={closeModal}
					aria-label="Close modal">✖</button
				>
			</div>
			<div class="mb-4 flex border-b">
				{#each ['general', 'dark', 'light'] as tab}
					<button
						class="flex-1 cursor-pointer border-b-2 py-2 text-center transition-colors duration-200"
						class:font-bold={activeTab === tab}
						class:text-blue-600={activeTab === tab}
						class:border-blue-600={activeTab === tab}
						class:text-gray-500={activeTab !== tab}
						onclick={() => (activeTab = tab)}
						onkeydown={(e) => e.key === 'Enter' && (activeTab = tab)}
					>
						{tab === 'general' ? 'General' : tab === 'dark' ? 'Dark Side' : 'Light Side'}
					</button>
				{/each}
			</div>
			<div class="text-gray-800">
				{#if activeTab === 'general'}
					<ul class="space-y-2">
						<li><strong>B</strong> - Change Ball Possession</li>
						<li><strong>S</strong> - Start/Stop Game Timer</li>
						<li><strong>R</strong> - Reset Game Timer</li>
						<li><strong>U</strong> - Play Substitution Buzzer Sound</li>
						<li><strong>Z</strong> - Reset Shot Clock to 24</li>
						<li><strong>X</strong> - Reset Shot Clock to 14</li>
						<li><strong>P</strong> - Add Period/Quarter by 1</li>
						<li><strong>O</strong> - Minus Period/Quarter by 1</li>
					</ul>
				{:else if activeTab === 'dark'}
					<ul class="space-y-2">
						<li><strong>Ctrl+1</strong> - Increase Dark Team Score by 1</li>
						<li><strong>Ctrl+2</strong> - Increase Dark Team Score by 2</li>
						<li><strong>Ctrl+3</strong> - Increase Dark Team Score by 3</li>
						<li><strong>Ctrl+-</strong> - Decrease Dark Team Score by 1</li>
						<li><strong>Ctrl+T</strong> - Dark Team Use Timeout</li>
						<li><strong>Ctrl+Y</strong> - Dark Team Add 1 Timeout</li>
						<li><strong>Ctrl+F</strong> - Dark Team Add Foul by 1</li>
						<li><strong>Ctrl+F</strong> - Dark Team Minus Foul by 1</li>
					</ul>
				{:else if activeTab === 'light'}
					<ul class="space-y-2">
						<li><strong>Shift+1</strong> - Increase Light Team Score by 1</li>
						<li><strong>Shift+2</strong> - Increase Light Team Score by 2</li>
						<li><strong>Shift+3</strong> - Increase Light Team Score by 3</li>
						<li><strong>Shift+-</strong> - Decrease Light Team Score by 1</li>
						<li><strong>Shift+T</strong> - Light Team Use Timeout</li>
						<li><strong>Shift+Y</strong> - Light Team Add 1 Timeout</li>
						<li><strong>Shift+F</strong> - Light Team Add Foul by 1</li>
						<li><strong>Shift+F</strong> - Light Team Minus Foul by 1</li>
					</ul>
				{/if}
			</div>
		</div>
	</div>
{/if}
