<script>
  import {
    regexEmailChecker,
    magicLinkToEmail,
  } from "$lib/Login/loginFunctions";
  import IconEmail from "$lib/Icons/LoginIcons/IconEmail.svelte";
  import { isDarkMode } from "$lib/store";

  let magicLinkSent = false;
  let emptyEmailInputAnimated;
  $: shortPing = !magicLinkSent && emptyEmailInputAnimated && "animate-ping";

  let magicLinkBtn;
  let emailField;
  let emailFieldValue = "";
  let isEmail = false;

  function signinWithLinkAndStop(e) {
    if ((e.type == "click" || e.key == "Enter") && emailFieldValue == "") {
      emptyEmailInputAnimated = true;
      setTimeout(
        () => (emptyEmailInputAnimated = !emptyEmailInputAnimated),
        100
      );
    }
    if ((e.type == "click" || e.key == "Enter") && isEmail) {
      magicLinkToEmail(emailFieldValue);
      magicLinkSent = true;
      emailFieldValue = "";

      emailStatusMessage.style.display = "block";

      emailStatusMessage.innerHTML = `
                  <div class="p-3 font-Poppins" style=" color: #10bb8a"> 
                      Link sent to email 🚀
                  </div>
                  `;

      emailField.style.opacity = "0.5";
      emailField.style.pointerEvents = "none";

      magicLinkBtn.style.opacity = "0.5";
      magicLinkBtn.style.pointerEvents = "none";
    }
  }

  function onInputEmailField(EMAIL) {
    isEmail = regexEmailChecker(EMAIL);
    if (EMAIL == "") {
      emailField.style.border = "1px solid #aaa";
      emailField.style.color = "#aaa";
      emailField.style.fontSize = "16px";
    } else if (!isEmail) {
      emailField.style.border = "1.5px solid red";
      emailField.style.color = "red";
      emailField.style.fontSize = "20px";
    } else if (isEmail) {
      emailField.style.border = "2px solid #59d0ae";
      emailField.style.backgroundColor = "white";
      emailField.style.color = "#10bb8a"; // green-ish colour
    }
  }
</script>

<signin-button
  bind:this={magicLinkBtn}
  on:click={signinWithLinkAndStop}
  on:keydown={signinWithLinkAndStop}
  class="group bg-red-400 hover:scale-[1.01]  hover:shadow-md  duration-200 rounded-md p-4 {$isDarkMode
    ? 'group-hover:bg-opacity-80'
    : 'group-hover:bg-opacity-80'}  text-white flex justify-center items-center gap-5"
>
  <span class="group-hover:scale-[1.15] duration-500">
    <IconEmail />
  </span>
  <span>Get Magic Link</span>
</signin-button>

<input
  on:keydown={(e) => {
    signinWithLinkAndStop(e);
  }}
  on:paste={onInputEmailField(emailFieldValue)}
  on:keyup={onInputEmailField(emailFieldValue)}
  bind:this={emailField}
  class="text-center p-3 mt-3 w-full {shortPing} focus:outline-none "
  bind:value={emailFieldValue}
  type="email"
  placeholder="email"
/>

<span id="emailStatusMessage" />
