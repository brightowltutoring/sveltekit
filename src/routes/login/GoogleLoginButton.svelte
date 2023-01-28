<script>
	import { isDarkMode } from '$lib/store';
	import { GoogleLogin } from './GoogleLogin';
	import IconGoogle from '$lib/Icons/LoginIcons/IconGoogle.svelte';
</script>

<!-- href="/plans" -->
<button
	on:keydown={GoogleLogin}
	on:click={GoogleLogin}
	class="group mb-6 rounded-md bg-[#4285f4] p-4 duration-200 hover:scale-[1.01] hover:shadow-md {$isDarkMode
		? 'group-hover:bg-opacity-90'
		: 'group-hover:bg-opacity-90'} flex w-full items-center justify-center gap-5 text-white"
>
	<span class="duration-500 group-hover:scale-[1.15]">
		<IconGoogle />
		<!-- {@html `<svg height="24" width="24">
      <path fill="${$isDarkMode ? "black" : "white"}"
        d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z"
      />
    </svg>`} -->
	</span>
	<!-- <span class="font-bold">Sign-in with Google</span> -->
	<span>Sign-in with Google</span>
</button>
