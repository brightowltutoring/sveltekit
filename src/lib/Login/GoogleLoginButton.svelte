<script>
  import { GoogleLogin } from "$lib/Login/loginFunctions";
  import { isDarkMode } from "$lib/store";
  import IconGoogle from "$lib/Icons/IconGoogle.svelte";
</script>

<signin-button
  on:keydown={GoogleLogin}
  on:click={GoogleLogin}
  class="group mb-6  bg-[#4285f4]  hover:shadow-md hover:scale-[1.01] duration-200 rounded-md p-4 {$isDarkMode
    ? 'group-hover:bg-opacity-90'
    : 'group-hover:bg-opacity-90'}  text-white  flex justify-center items-center gap-5"
>
  <span class="group-hover:scale-[1.15] duration-500">
    <IconGoogle />
  </span>
  <span>Sign-in with Google</span>
</signin-button>
