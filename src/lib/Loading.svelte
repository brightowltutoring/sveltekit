<!-- <script>
	import { elasticOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
</script> -->

<div class="flex h-full w-full backdrop-blur-lg">
	<first-level class="!grid h-full w-full animate-pulse place-content-center overflow-hidden">
		<!-- in:fly|global={{ y: -400, duration: 2000, easing: elasticOut }} -->
		<span class="loading animate-bounce text-center font-Poppins text-2xl"> just a sec</span>
		<br /><br />

		<second-level class="!flex w-full scale-[150%] space-x-5 md:scale-[200%]">
			<third-level class="COMMON_COLOR h-12 w-12 rounded-full" />

			<third-level class="!flex flex-col place-content-center space-y-2">
				<fourth-level class="COMMON_COLOR h-4 w-40 rounded" />
				<fourth-level class="COMMON_COLOR h-4 w-20 rounded" />
			</third-level>
		</second-level>
	</first-level>
</div>

<style>
	.loading:after {
		content: ' . . .';
		animation: dots 1s steps(5, end) infinite;
	}

	@keyframes dots {
		0%,
		40% {
			color: rgba(0, 0, 0, 0);
		}
	}
	fourth-level,
	third-level,
	second-level,
	first-level {
		display: block;
	}

	:global(html.dark-mode) .COMMON_COLOR {
		background-color: rgb(255, 255, 255);
	}
	.COMMON_COLOR {
		background-color: rgb(0, 0, 0);
		opacity: 0.7;
	}
	/* third-level {
		background-color: rgb(80, 140, 137);
		opacity: 0.5;
	} */
	/* second-level {
		background-color: rgb(230, 78, 78);
	}
	first-level {
		background-color: rgb(108, 108, 199);
	} */
</style>
