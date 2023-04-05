<svelte:head>
	<script>
		let isPWA = window.matchMedia('(display-mode: standalone)').matches;
		sessionStorage.setItem('isPWA', String(isPWA));
	</script>
</svelte:head>
