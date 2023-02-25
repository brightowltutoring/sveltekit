<script lang="ts">
	import { regexEmailChecker, magicLinkToEmail } from './MagicLinkLogin';
	import IconEmail from '$lib/Icons/LoginIcons/IconEmail.svelte';
	import { isDarkMode } from '$lib/store';
	import LoginButton from './LoginButton.svelte';

	let magicLinkSent = false;
	let emptyEmailInputAnimated: boolean;
	$: shortPing = !magicLinkSent && emptyEmailInputAnimated && 'animate-ping';

	let magicLinkBtn: HTMLElement;
	let emailField: HTMLElement;
	let emailFieldValue: string = '';
	let isEmail = false;

	// @ts-ignore
	let magicLinkInputVisible = globalThis.magicLinkInputVisible;

	let emailStatusMessage: HTMLElement;

	function signinWithLinkAndStop(e: MouseEvent | KeyboardEvent) {
		// @ts-ignores
		magicLinkInputVisible = globalThis.magicLinkInputVisible = true;

		let clickOrEnterFired = (<MouseEvent>e).type == 'click' || (<KeyboardEvent>e).key == 'Enter';

		if (clickOrEnterFired && emailFieldValue == '') {
			emptyEmailInputAnimated = true;
			setTimeout(() => (emptyEmailInputAnimated = !emptyEmailInputAnimated), 100);
		}
		if (clickOrEnterFired && isEmail) {
			magicLinkToEmail(emailFieldValue);
			magicLinkSent = true;
			emailFieldValue = '';

			emailStatusMessage.style.display = 'block';

			emailStatusMessage.innerHTML = `
                  <div class="p-3 font-Poppins" style=" color: #10bb8a"> 
                      Link sent to email 🚀
                  </div>
                  `;

			emailField.style.opacity = '0.5';
			emailField.style.pointerEvents = 'none';

			magicLinkBtn.style.opacity = '0.5';
			magicLinkBtn.style.pointerEvents = 'none';
		}
	}

	function onInputEmailField(EMAIL: string) {
		isEmail = regexEmailChecker(EMAIL);
		if (EMAIL == '') {
			emailField.style.border = '1px solid #aaa';
			emailField.style.color = '#aaa';
			emailField.style.fontSize = '16px';
		} else if (!isEmail) {
			emailField.style.border = '1.5px solid red';
			emailField.style.color = 'red';
			emailField.style.fontSize = '20px';
		} else if (isEmail) {
			emailField.style.border = '2px solid #59d0ae';
			emailField.style.backgroundColor = 'white';
			emailField.style.color = '#10bb8a'; // green-ish colour
		}
	}
</script>

<LoginButton
	bindThis={magicLinkBtn}
	onClick={() => signinWithLinkAndStop()}
	innerText={'Get Magic Link'}
	bgColorTW={'bg-emerald-500'}
>
	<IconEmail />
</LoginButton>

{#if magicLinkInputVisible}
	<input
		on:keydown={signinWithLinkAndStop}
		on:paste={() => onInputEmailField(emailFieldValue)}
		on:keyup={() => onInputEmailField(emailFieldValue)}
		bind:this={emailField}
		class="mt-3 w-full p-3 text-center {shortPing} focus:outline-none "
		bind:value={emailFieldValue}
		type="email"
		placeholder="email"
	/>
{/if}

<span bind:this={emailStatusMessage} />
