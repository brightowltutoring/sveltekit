<script>
	import JitsiUser from '$routes/classroom/JitsiUser.svelte';
</script>

<JitsiUser isAdmin={true} />

<dummy-element />

<style>
	:global(.dark-mode):has(dummy-element) {
		--bg-color: black;
	}
</style>
