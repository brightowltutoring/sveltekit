<script>
  import { TwitterLogin } from "$lib/Login/loginFunctions";
  import { isDarkMode } from "$lib/store";
  import IconTwitter from "$lib/Icons/LoginIcons/IconTwitter.svelte";
</script>

<signin-button
  on:click={TwitterLogin}
  on:keydown={TwitterLogin}
  class=" group bg-[#1d9bf0]  hover:shadow-md hover:scale-[1.01] duration-200 rounded-md p-4 {$isDarkMode
    ? 'group-hover:bg-opacity-90'
    : 'group-hover:bg-opacity-90'} text-white flex justify-center items-center  gap-5"
>
  <span class="group-hover:scale-[1.15] duration-500">
    <IconTwitter />
  </span>
  <!-- <span class="font-bold">Sign-in with Twitter</span> -->
  <span>Sign-in with Twitter</span>
</signin-button>
