<script lang="ts">
	import { GoogleLogin } from './GoogleLogin';
	import IconGoogle from '$lib/Icons/LoginIcons/IconGoogle.svelte';
	import LoginButton from './LoginButton.svelte';
</script>

<LoginButton
	on:click={() => GoogleLogin()}
	innerText={'Sign-in with Google'}
	bgColorTW={'bg-[#4285f4]'}
>
	<IconGoogle />
</LoginButton>
