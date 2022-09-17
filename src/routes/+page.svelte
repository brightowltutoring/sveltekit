<script>
  import SixMathEqnAnim from "$lib/SixMathEqnAnim.svelte";
  import Testimonials from "$lib/Testimonials.svelte";
  import { isDarkMode } from "$lib/store.js";
</script>

<main class="overflow-x-hidden">
  <video
    autoplay
    loop
    muted
    playsinline
    controlslist="nodownload"
    src="/login-bg-video-blurred.mp4"
    class=" absolute -z-10 top-0 m-0 p-0 w-11/12 sm:h-full {$isDarkMode
      ? 'invert-[0.95] blur-3xl '
      : 'blur-2xl'}"
  />
</main>

<div class="text-6xl font-Poppins text-center pt-20 pb-40">
  We'll be back in October
  <div class="font-Nunito text-[20px] text-center pt-5">
    🎃 pressing inquiries can be sent to brightowl.edu[at]gmail.com
  </div>
</div>

<!-- <SixMathEqnAnim /> -->
<Testimonials />
