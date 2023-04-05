<script>
	import { navAppClicked } from '$lib/store';
	import { clearNavModals } from '$lib/utils';

	function handleAppNavClick() {
		clearNavModals();
		$navAppClicked = true;
	}
</script>

<button
	on:click={handleAppNavClick}
	class="border-b-1 rounded px-3 py-1 font-Nunito text-2xl font-thin duration-300 hover:rounded hover:bg-indigo-400 hover:text-white hover:shadow-lg active:animate-pulse md:text-xl"
>
	App
</button>
