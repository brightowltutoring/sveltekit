<script>
	import PlansSection from './PlansSection.svelte';
</script>

<!-- calendly iframe breaks without JS on since the calendly website itself does ... cannot progressively enhance -->
<!-- <iframe
	title="Thinksolve Plans"
	class="opacity-100 fixed bottom-0 w-full md:w-[80%] h-[90%] md:-translate-y-5 backdrop-blur-3xl  rounded-xl border-dotted border-gray-500"
	src="https://calendly.com/thinksolve"
/> -->
<!-- src="https://en.wikipedia.org/wiki/The_Joe_Rogan_Experience" -->
<!-- src="https://calendly.com/thinksolve/mock-stripe?&hide_gdpr_banner=1" -->
<!-- src="https://calendly.com/thinksolve/mock-stripe?embed_domain=thinksolve.io&embed_type=PopupText&hide_gdpr_banner=1" -->

<PlansSection />
<!-- <PlansSection on:boop={(e) => console.log("😮", e.detail.message)} /> -->

<!-- <PlansSection
  noTransition
  on:boop={(e) => console.log("😮", e.detail.message)}
/> -->
