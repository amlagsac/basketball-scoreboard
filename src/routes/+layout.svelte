<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}

<svelte:head>
	<link rel="icon" href="/images/basketball-icon.png" type="image/png" />
</svelte:head>
