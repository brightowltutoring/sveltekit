<script>
  import { RecaptchaVerifier } from "firebase/auth";
  import { auth } from "$lib/firebase";
  import { generateRecaptcha2 } from "$lib/Login/loginFunctions";

  let smsCode;
  let countryCode = "+1";

  // would rather import generateRecaptcha() from "$lib/Login/loginFunctions", where { RecaptchaVerifier } from "firebase/auth" is dynamically imported inside that function at the time of use (and { auth } from "$lib/firebase" imported at the module level)... but ran into firebse SMS limit as I was testing
  async function generateRecaptcha() {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {},
      },
      auth
    );
  }

  function handleSMSCode() {
    alert(`still need to handle sms code: ${smsCode}`); //document.querySelector("#smsCodeID").value
    let code = smsCode;
    let confirmationResult = window.confirmationResult;

    confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        // const user = result.user;
        // ...
        console.log("result", result);
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        console.log("error", error);
      });
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
    if ((e.type == "click" || e.key == "Enter") && isPhoneNumber) {
      let formattedPhoneNumber =
        countryCode + phoneFieldValue.replace(/\D/g, "");

      // await generateRecaptcha2();
      await generateRecaptcha(); // this creates 'window.recaptchaVerifier'  ... maybe have this return it instead to consolidate the code

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
      phoneFieldValue = "";
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
</script>

<!-- {#if !smsCodeSent} -->
<!-- id 'sign-in-button' used here for recaptcha logic in loginFunctions.js -->
<!-- dec1,2022: changed from 'signin-button' to 'button' since otherwise I needed to add both keydown and click -->
{#if !phoneCodeSent}
  <button
    id="sign-in-button"
    bind:this={sendPhoneCodeBtn}
    on:click={signinWithLinkAndStop}
    class="w-full group bg-rose-400 hover:scale-[1.01]  hover:shadow-md  duration-200 rounded-md p-4 {$isDarkMode
      ? 'group-hover:bg-opacity-80'
      : 'group-hover:bg-opacity-80'}  text-white flex justify-center items-center gap-5"
  >
    <span class="group-hover:scale-[1.15] duration-500">
      <IconPhone />
    </span>
    <span>Get SMS Code</span>
  </button>

  <div class="grid grid-cols-6 w-full">
    <input
      type="text"
      bind:value={countryCode}
      class="text-center p-3 mt-3  col-span-1"
    />
    <input
      on:keydown={(e) => {
        signinWithLinkAndStop(e);
      }}
      on:paste={onInputphoneField(phoneFieldValue)}
      on:keyup={onInputphoneField(phoneFieldValue)}
      bind:this={phoneField}
      class="text-center p-3 mt-3 {shortPing} focus:outline-none col-span-5"
      bind:value={phoneFieldValue}
      type="phone"
      placeholder="phone"
    />
  </div>
{/if}

<div id="recaptcha-container" />

<div id="phoneStatusMessage" />

{#if phoneCodeSent}
  <div class="grid grid-cols-3">
    <input
      id="smsCodeID"
      bind:value={smsCode}
      class="col-span-2 text-center p-3 mt-3 focus:outline-none "
      placeholder="enter sms code"
    />
    <button
      id="smsCodeEnterBtn"
      class="text-center p-3 mt-3 bg-rose-300 text-white font-bold"
      on:click={handleSMSCode}
      >Enter
    </button>
  </div>
{/if}
