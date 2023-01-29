<script>
	import LazyMount from '$lib/Wrappers/LazyMount.svelte';
	import Modal from '$lib/Wrappers/Modal.svelte';
	import Dropzone from './homework/Dropzone.svelte';
	import { scale, fly } from 'svelte/transition'; // slide, fade, blur
	import { elasticOut, quintOut } from 'svelte/easing';

	import { getOS } from '$lib/utils';

	import {
		showLoginModal,
		showHomeworkModal,
		navAppClicked,
		isDarkMode,
		contactLinkClicked
	} from '$lib/store';
</script>

<Modal showModal={$contactLinkClicked} bgTint={'backdrop-blur-3xl'}>
	{#key !$contactLinkClicked}
		<ul
			in:scale={{
				duration: 1500,
				easing: elasticOut
			}}
			class="flex flex-col gap-y-2 bg-gradient-to-r bg-clip-text text-center font-Poppins text-3xl text-transparent sm:text-5xl  {$isDarkMode
				? 'from-teal-200 via-rose-300 to-pink-200 '
				: 'from-teal-700 via-rose-700 to-pink-700 '}"
		>
			<li>Email:</li>
			<li class="p-5">thinksolve.io@gmail.com</li>
		</ul>
	{/key}
</Modal>

<!-- although the 'app' button is also screened in Navbar.svelte, it's also a good idea to not render the popup here -->
{#if getOS() == 'iOS'}
	<Modal
		all
		showModal={$navAppClicked}
		bgTint={'text-white bg-gradient-to-br from-[#6c79f4] to-rose-400'}
	>
		{#key !$navAppClicked}
			<ul in:scale class="flex flex-col gap-y-8 p-10 font-Poppins text-3xl sm:text-6xl">
				<li
					in:scale={{
						duration: 1300,
						easing: elasticOut
					}}
				>
					<div class="text-6xl">1.</div>
					Open Safari
				</li>
				<li
					in:fly={{
						x: 100,
						delay: 1200,
						duration: 1000,
						easing: quintOut
					}}
				>
					<div class="text-6xl">2.</div>
					<div class="flex flex-row items-center justify-center gap-x-2 pt-2">
						<span> Click share icon</span>
						<img
							class="h-7 w-7 -translate-y-1  invert"
							src="/safari-share-icon.png"
							alt="safari share icon"
						/>
					</div>
				</li>

				<li
					class=" text-black"
					in:fly={{
						x: 200,
						delay: 2000,
						duration: 1200,
						easing: quintOut
					}}
				>
					<div class="text-6xl ">3.</div>
					Click 'Add to Home Screen' 🚀
				</li>
			</ul>
		{/key}
	</Modal>
{/if}

<!-- <Modal body bind:showModal={$showLoginModal} bgTint={`backdrop-blur-md `}>
			<LoginCard /> -->
<Modal body bind:showModal={$showLoginModal} bgTint={`backdrop-blur-md `}>
	<LazyMount
		bind:contactLinkClicked={$contactLinkClicked}
		Import={() => import('./login/LoginCard.svelte')}
	/>
</Modal>

<Modal bind:showModal={$showHomeworkModal} bgTint={'bg-[rgba(0,0,0,0.1)]'}>
	<Dropzone
		textSizeTW={'text-6xl'}
		dimensionsTW={'w-[80vw] h-[85vh]'}
		brightnessTW={'brightness-95'}
	/>
	<!-- NOTE: having the Dropzone lazyMounted prevents the 'popupOnce' logic defined inside Dropzone.svelte; even WITH timeout delay it would not work. Luckily this one modal dropzone has no impact on the perfect lightscore ! -->
</Modal>
