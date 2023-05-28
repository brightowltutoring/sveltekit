<script>
	import JitsiUser from '$routes/classroom/JitsiUser.svelte';

	// let wasDarkModeLS = browser && sessionStorage.getItem('isDarkMode');
	// onMount(() => {
	// 	isDarkMode.set(true);

	// 	document.documentElement.classList.add('dark-mode');
	// });
	// onDestroy(() => {
	// 	if (wasDarkModeLS === 'false') {
	// 		isDarkMode.set(false);

	// 		document.documentElement.classList.remove('dark-mode');
	// 	}
	// });
</script>

<JitsiUser admin />

<!-- <svelte:head>
	<script src="https://meet.jit.si/external_api.js"></script>
</svelte:head> -->
