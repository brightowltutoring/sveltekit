<noscript>
	<!-- class="bg-rose-500 w-full p-7 top-0 left-0 fixed font-Poppins text-2xl text-center z-50 flex justify-center place-items-center " -->
	<div
		class="fixed left-0 top-0 z-50 flex w-full place-items-center justify-center bg-rose-500 p-7 text-center font-Poppins text-2xl"
	>
		<!-- class="animate-bounce" -->
		<span> Please enable Javascript to continue using this page. </span>
	</div>
</noscript>

<style>
	:root {
		--hueRotateMaxAngle: 5deg;
		/* --alpha: 0.85; */
	}

	div {
		/* background-color: rgb(244, 63, 94, 1); */
		filter: hue-rotate(0deg);
		/* opacity: 1; */
		animation: flicker 2s infinite;
	}

	@keyframes flicker {
		0% {
			/* background-color: rgb(244, 63, 94, var(--alpha)); */
			/* opacity: 0.5; */
			filter: hue-rotate(var(--hueRotateMaxAngle));
		}
		50% {
			/* background-color: rgb(244, 63, 94, 1); */
			/* opacity: 0.95; */

			filter: hue-rotate(0deg);
		}
		100% {
			/* background-color: rgb(244, 63, 94, var(--alpha)); */
			/* opacity: 0.5; */
			filter: hue-rotate(var(--hueRotateMaxAngle));
		}
	}
</style>
