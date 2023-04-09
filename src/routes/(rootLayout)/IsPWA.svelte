<svelte:head>
	<script>
		const isPwaMode = window.matchMedia('(display-mode: standalone)').matches;
		sessionStorage.setItem('isPWA', String(isPwaMode));
	</script>
</svelte:head>
