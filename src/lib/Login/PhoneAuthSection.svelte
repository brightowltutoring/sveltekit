<script>
  // const { RecaptchaVerifier } = import("firebase/auth");
  import { RecaptchaVerifier } from "firebase/auth";
  import { auth } from "$lib/firebase";
  import { onMount } from "svelte";

  function generateRecaptcha() {
    window.recaptchaVerifier = new RecaptchaVerifier(
      // "phoneStatusMessage",
      "recaptcha-container",
      // "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // onSignInSubmit();
        },
      },
      auth
    );
  }

  // TODO: the above is experimental

  import {
    regexPhoneChecker,
    SendCodeToPhone,
    // CheckPhoneCodeAndSignIn
  } from "$lib/Login/loginFunctions";
  import IconPhone from "$lib/Icons/LoginIcons/IconPhone.svelte";
  import { isDarkMode } from "$lib/store";

  let phoneCodeSent = false;
  let emptyPhoneInputAnimated;
  $: shortPing = !phoneCodeSent && emptyPhoneInputAnimated && "animate-ping";

  let sendPhoneCodeBtn;
  let phoneField;
  let phoneFieldValue = "";
  let isPhoneNumber = false;

  async function signinWithLinkAndStop(e) {
    if ((e.type == "click" || e.key == "Enter") && phoneFieldValue == "") {
      emptyPhoneInputAnimated = true;
      setTimeout(
        () => (emptyPhoneInputAnimated = !emptyPhoneInputAnimated),
        100
      );
    }
    if (isPhoneNumber) {
      generateRecaptcha();
    }
    if ((e.type == "click" || e.key == "Enter") && isPhoneNumber) {
      let formattedPhoneNumber = "+1" + phoneFieldValue.replace(/\D/g, "");
      // alert( `original:${phoneFieldValue}\nformatted:${formattedPhoneNumber}` );

      // SendCodeToPhone(phoneFieldValue);
      // SendCodeToPhone(formattedPhoneNumber, APP_VERIFIER);

      let appVerifier = window.recaptchaVerifier;
      SendCodeToPhone(formattedPhoneNumber, appVerifier);

      phoneStatusMessage.style.display = "block";

      // style=" color: #10bb8a"
      phoneStatusMessage.innerHTML = `
                  <div class="p-3 font-Poppins ${
                    $isDarkMode ? "text-lime-100" : "text-rose-800"
                  }" > 
                      Code sent to ${formattedPhoneNumber} 
                  </div>
                  `;

      phoneField.style.opacity = "0.5";
      phoneField.style.pointerEvents = "none";

      sendPhoneCodeBtn.style.opacity = "0.5";
      sendPhoneCodeBtn.style.pointerEvents = "none";

      phoneCodeSent = true;
      // phoneFieldValue = "";
    }
  }

  function onInputphoneField(PHONE) {
    isPhoneNumber = regexPhoneChecker(PHONE);
    if (PHONE == "") {
      phoneField.style.border = "1px solid #aaa";
      phoneField.style.color = "#aaa";
      phoneField.style.fontSize = "16px";
    } else if (!isPhoneNumber) {
      phoneField.style.border = "1.5px solid red";
      phoneField.style.color = "red";
      phoneField.style.fontSize = "20px";
    } else if (isPhoneNumber) {
      phoneField.style.border = "2px solid #59d0ae";
      phoneField.style.backgroundColor = "white";
      phoneField.style.color = "#10bb8a"; // green-ish colour
    }
  }

  let smsCodeInputField;

  // import { onMount } from "svelte";
  // import { auth, RecaptchaVerifier } from "$lib/firebase";

  // onMount(async () => {
  //   window.recaptchaVerifier = new RecaptchaVerifier(
  //     "sign-in-button",
  //     {
  //       size: "invisible",
  //       callback: (response) => {
  //         // reCAPTCHA solved, allow signInWithPhoneNumber.
  //         onSignInSubmit();
  //       },
  //     },
  //     auth
  //   );
  // });
</script>

<!-- {#if !smsCodeSent} -->
<!-- id 'sign-in-button' used here for recaptcha logic in loginFunctions.js -->
<signin-button
  id="sign-in-button"
  bind:this={sendPhoneCodeBtn}
  on:click={signinWithLinkAndStop}
  on:keydown={signinWithLinkAndStop}
  class="group bg-rose-400 hover:scale-[1.01]  hover:shadow-md  duration-200 rounded-md p-4 {$isDarkMode
    ? 'group-hover:bg-opacity-80'
    : 'group-hover:bg-opacity-80'}  text-white flex justify-center items-center gap-5"
>
  <span class="group-hover:scale-[1.15] duration-500">
    <IconPhone />
  </span>
  <span>Get SMS Code</span>
</signin-button>

<input
  on:keydown={(e) => {
    signinWithLinkAndStop(e);
  }}
  on:paste={onInputphoneField(phoneFieldValue)}
  on:keyup={onInputphoneField(phoneFieldValue)}
  bind:this={phoneField}
  class="text-center p-3 mt-3 w-full {shortPing} focus:outline-none "
  bind:value={phoneFieldValue}
  type="phone"
  placeholder="phone"
/>
<div id="recaptcha-container">recaptcha-container</div>

<!-- {:else} -->
<!-- button and input section updates  -->
<!-- on:click={()=>SendCodeToPhone(phoneFieldValue) } -->
<!-- {/if} -->

<span id="phoneStatusMessage" />

<!-- TODO: later only show this when regex-verified number sent -->

{#if phoneCodeSent}
  <div class="grid grid-cols-3">
    <input
      id="smsCodeInputField"
      bind:this={smsCodeInputField}
      class="col-span-2 text-center p-3 mt-3 focus:outline-none "
      placeholder="enter sms code"
    />
    <span
      id="smsCodeEnterBtn"
      class="text-center p-3 mt-3 bg-rose-300 text-white font-bold"
      on:keydown={() => {
        alert(`still need to handle sms code: ${smsCodeInputField.value}`); //document.querySelector("#smsCodeInputField").value
      }}>Enter</span
    >
  </div>
{/if}
