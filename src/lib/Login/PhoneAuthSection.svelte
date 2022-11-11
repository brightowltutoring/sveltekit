<script>
  let smsCodeSent = false;
  // updates once code sent

  import {
    regexEmailChecker,
    magicLinkToEmail,
  } from "$lib/Login/loginFunctions.js";
  import IconPhone from "$lib/Icons/IconPhone.svelte";
  import { isDarkMode } from "$lib/store.js";

  let magicLinkSent = false;
  let emptyPhoneInputAnimated;
  $: shortPing = !magicLinkSent && emptyPhoneInputAnimated && "animate-ping";

  let magicLinkBtn;
  let phoneField;
  let phoneFieldValue = "";
  let isEmail = false;

  function signinWithLinkAndStop(e) {
    if ((e.type == "click" || e.key == "Enter") && phoneFieldValue == "") {
      emptyPhoneInputAnimated = true;
      setTimeout(
        () => (emptyPhoneInputAnimated = !emptyPhoneInputAnimated),
        100
      );
    }
    if ((e.type == "click" || e.key == "Enter") && isEmail) {
      // magicLinkToEmail(phoneFieldValue); TODO: replace with phone sms logic
      magicLinkSent = true;
      phoneFieldValue = "";

      phoneStatusMessage.style.display = "block";

      phoneStatusMessage.innerHTML = `
                  <div class="p-3 font-Poppins" style=" color: #10bb8a"> 
                      Link sent to email 🚀
                  </div>
                  `;

      phoneField.style.opacity = "0.5";
      phoneField.style.pointerEvents = "none";

      magicLinkBtn.style.opacity = "0.5";
      magicLinkBtn.style.pointerEvents = "none";
    }
  }

  function onInputphoneField(EMAIL) {
    isEmail = regexEmailChecker(EMAIL);
    if (EMAIL == "") {
      phoneField.style.border = "1px solid #aaa";
      phoneField.style.color = "#aaa";
      phoneField.style.fontSize = "16px";
    } else if (!isEmail) {
      phoneField.style.border = "1.5px solid red";
      phoneField.style.color = "red";
      phoneField.style.fontSize = "20px";
    } else if (isEmail) {
      phoneField.style.border = "2px solid #59d0ae";
      phoneField.style.backgroundColor = "white";
      phoneField.style.color = "#10bb8a"; // green-ish colour
    }
  }
</script>

{#if !smsCodeSent}
  <signin-button
    bind:this={magicLinkBtn}
    on:click={signinWithLinkAndStop}
    on:keydown={signinWithLinkAndStop}
    class="group bg-red-400 hover:scale-[1.01]  hover:shadow-md  duration-200 rounded-md p-4 {$isDarkMode
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
{:else}
  <!-- button and input section updates  -->
{/if}

<span id="phoneStatusMessage" />
