<script lang="ts">
	import LoginButton from './LoginButton.svelte';
	let smsCode: string;
	let countryCode = '+1';

	import {
		regexPhoneChecker,
		generateRecaptchaVerifier,
		sendCodeToPhone,
		verifySMSCode
	} from './PhoneLogin';
	import IconPhone from '$lib/Icons/LoginIcons/IconPhone.svelte';
	import { isDarkMode } from '$lib/store';

	let phoneCodeSent = false;
	let emptyPhoneInputAnimated = false;
	$: shortPing = !phoneCodeSent && emptyPhoneInputAnimated && 'animate-ping';

	let sendPhoneCodeBtn: HTMLElement;
	let phoneField: HTMLElement;
	let phoneFieldValue: string = '';
	let isPhoneNumber = false;
	let phoneStatusMessage: HTMLElement;
	// phoneStatusMessage.style.display = 'none';

	// @ts-ignore
	let phoneInputVisible: boolean = globalThis.phoneInputVisible;

	async function submitPhoneNumber(e: MouseEvent | KeyboardEvent) {
		// phoneInputVisible alone allows for immediate change in dom; globalThis.phoneInputVisible allows for persistence given that the component is destroyed (logincard is destroyed when modal closes)

		// @ts-ignore
		phoneInputVisible = globalThis.phoneInputVisible = true;

		let clickOrEnterFired = (<MouseEvent>e).type == 'click' || (<KeyboardEvent>e).key == 'Enter';

		if (clickOrEnterFired && phoneFieldValue == '') {
			emptyPhoneInputAnimated = true;
			setTimeout(() => (emptyPhoneInputAnimated = !emptyPhoneInputAnimated), 100);
		}
		if (clickOrEnterFired && isPhoneNumber) {
			let formattedPhoneNumber = countryCode + phoneFieldValue.replace(/\D/g, '');

			let recaptchaVerifier = await generateRecaptchaVerifier('recaptcha-container');
			sendCodeToPhone(formattedPhoneNumber, recaptchaVerifier);

			phoneStatusMessage.style.display = 'block';
			phoneStatusMessage.innerHTML = `Code sent to ${formattedPhoneNumber} `;

			phoneField.style.opacity = '0.5';
			phoneField.style.pointerEvents = 'none';

			sendPhoneCodeBtn.style.opacity = '0.5';
			sendPhoneCodeBtn.style.pointerEvents = 'none';

			phoneCodeSent = true;
		}
	}

	function onInputPhoneField(e: ClipboardEvent | KeyboardEvent, PHONE: string) {
		if (<ClipboardEvent>e || <KeyboardEvent>e) {
			isPhoneNumber = regexPhoneChecker(PHONE);
			if (PHONE == '') {
				phoneField.style.border = '1px solid #aaa';
				phoneField.style.color = '#aaa';
				phoneField.style.fontSize = '16px';
			} else if (!isPhoneNumber) {
				phoneField.style.border = '1.5px solid red';
				phoneField.style.color = 'red';
				phoneField.style.fontSize = '20px';
			} else if (isPhoneNumber) {
				phoneField.style.border = '2px solid #59d0ae';
				phoneField.style.backgroundColor = 'white';
				phoneField.style.color = '#10bb8a'; // green-ish colour
			}
		}
	}

	// import { browser } from "$app/environment";
	// $: phoneInputVisible = browser && window.phoneInputVisible;
	// phoneInputVisible controls the visibility of an input dom element; starts as false, but then persisted as true even when the component is destroyed ...thanks to storing the truthiness globally in window.phoneInputVisible (which is set to true on an onclick). Note: using 'window.phoneInputVisible' alone does not update DOM immediately (updates only on the next closing-openining of the modal), therefore need phoneInputVisible as well.

	// Update: using the modern 'globalThis' instead of 'window' means I don't need to use the sveltekit browser check
</script>

<!-- dec1,2022: changed 'button' to div ..since it flashes through the hidden modal on pageload -->
{#if !phoneCodeSent}
	<LoginButton
		bindThis={sendPhoneCodeBtn}
		onClick={() => submitPhoneNumber()}
		innerText={'Get SMS Code'}
		bgColorTW={'bg-rose-400'}
	>
		<IconPhone />
	</LoginButton>

	<div class="grid w-full grid-cols-6 text-black">
		{#if phoneInputVisible}
			<input
				bind:value={countryCode}
				class="col-span-1 mt-3 border-r-2 p-3 text-center focus:outline-none"
			/>
			<input
				on:keydown={submitPhoneNumber}
				on:paste={(e) => onInputPhoneField(e, phoneFieldValue)}
				on:keyup={(e) => onInputPhoneField(e, phoneFieldValue)}
				bind:this={phoneField}
				class="col-span-5 mt-3 p-3 text-center focus:outline-none {shortPing}"
				bind:value={phoneFieldValue}
				type="phone"
				placeholder="phone"
			/>
		{/if}
	</div>
{/if}

<div id="recaptcha-container" />
<div
	bind:this={phoneStatusMessage}
	class="hidden p-3 font-Poppins text-rose-600 dark:text-lime-100"
/>
<!-- {$isDarkMode ? 'text-lime-100' : 'text-rose-600' -->

{#if phoneCodeSent}
	<!-- {#if true} -->
	<div class="grid grid-cols-3 pb-5">
		<!-- on:keydown={(e) => verifySMSCode(smsCode, e)} -->
		<!-- col-span-2 -->
		<input
			on:keyup={(e) => verifySMSCode(e, smsCode)}
			on:paste={(e) => verifySMSCode(e, smsCode)}
			bind:value={smsCode}
			class="col-span-3 mt-3 p-3 text-center focus:outline-none "
			placeholder="enter sms code"
		/>

		<!-- <button
    on:click={(e) => verifySMSCode(smsCode, e)}
      class="col-span-1 text-center p-3 mt-3 bg-rose-300 text-white font-bold"
      >Enter
    </button> -->
	</div>
{/if}
