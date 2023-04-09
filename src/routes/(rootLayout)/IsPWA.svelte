<svelte:head>
	<script>
		// const isPwaMode = window.matchMedia('(display-mode: standalone)').matches;
		// sessionStorage.setItem('isPWA', String(isPwaMode));
		sessionStorage.setItem('isPwaMode', window.matchMedia('(display-mode: standalone)').matches);
	</script>
</svelte:head>
