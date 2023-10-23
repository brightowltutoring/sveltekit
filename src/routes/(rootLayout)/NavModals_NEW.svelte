<script lang="ts">
	import { modals } from '$lib/store/modalsStore';
	import Modal from '$lib/Wrappers/Modal.svelte';
	import LoginCard from '$routes/login/+page.svelte';
	import Dropzone from '$routes/homework/Dropzone_NEW.svelte';
	import { scale, fly } from 'svelte/transition';
	import { elasticOut, quintOut } from 'svelte/easing';
	import { page } from '$app/stores';
	$: ({ data } = $page);

	// svelte4 has type issues when using directly as props

	let stepOneScale = {
		duration: 1300,
		easing: elasticOut
	};

	let stepTwoFlyIn = {
		x: 100,
		delay: 1200,
		duration: 1000,
		easing: quintOut
	};
	let stepThreeFlyIn = {
		x: 200,
		delay: 2000,
		duration: 1200,
		easing: quintOut
	};
</script>

<Modal
	all
	modalOpen={data.isIOS && $modals.navApp}
	on:closeModal={() => modals.close('navApp')}
	bgTW={'text-white bg-gradient-to-br from-[#6c79f4] to-rose-400'}
>
	<ul class="flex flex-col gap-y-8 p-10 font-Poppins text-3xl sm:text-6xl">
		<li in:scale={stepOneScale}>
			<div class="text-6xl">1.</div>
			Open Safari
		</li>
		<li in:fly={stepTwoFlyIn}>
			<div class="text-6xl">2.</div>
			<div class="flex flex-row items-center justify-center gap-x-2 pt-2">
				<span> Click share icon</span>
				<img
					class="h-7 w-7 -translate-y-1 invert"
					src="/safari-share-icon.png"
					alt="safari share icon"
				/>
			</div>
		</li>

		<li class="text-black" in:fly={stepThreeFlyIn}>
			<div class="text-6xl">3.</div>
			Click 'Add to Home Screen' 🚀
		</li>
	</ul>
</Modal>

<Modal
	on:closeModal={() => modals.close('login')}
	modalOpen={$modals.login}
	bgTW={'backdrop-blur-md'}
>
	<LoginCard />
</Modal>

<Modal
	transitionsOff
	modalOpen={$modals.homework}
	on:closeModal={() => modals.close('homework')}
	bgTW={'bg-[rgba(0,0,0,0.1)]'}
>
	<Dropzone
		textSizeTW={'text-6xl'}
		dimensionsTW={'w-[80vw] h-[85vh]'}
		brightnessTW={'brightness-95'}
	/>
</Modal>
