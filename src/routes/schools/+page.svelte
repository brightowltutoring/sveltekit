<script>
  import UploadForm from "$lib/UploadForm.svelte";
  import PlansCardSchools from "$lib/PlansCardSchools.svelte";
  import { scale } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  let sampleHref =
    "https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9NU1ljQlpTa1hvSEhnNlkySjhrRmxRWVhQQmhrendpLDU0MTA5ODkz0200eSUPP97h?s=db";
  const plansCardArray = [
    {
      card: 2,
      schoolUrl:
        "https://calendly.com/thinksolve/school-classico?hide_gdpr_banner=1",
      buttonText: "Classico",
      cardTitle: "Classico",
      cardText:
        "Classic 1-on-1 session with smooth screen-sharing. Session notes/solutions on a personal URL available as a +2hr premium.",
      href: sampleHref,
    },
    {
      card: 1,
      schoolUrl:
        "https://calendly.com/thinksolve/school-mock?hide_gdpr_banner=1",
      buttonText: "Mock",
      cardTitle: "Mock",
      cardText:
        " Get test ready. We provide a mock test session with live support/ answers to completed questions. Digital solution key on a personal URL available as a +2hr premium.",
      href: sampleHref,
    },
  ];
</script>

<!-- <div class="font-Poppins text-center sm:text-7xl text-6xl pb-2  ">Plans</div> -->

<!-- in:scale={{ duration: 1000, easing: elasticOut }} -->

<div class="grid grid-cols-1 lg:grid-cols-2  p-7 ">
  {#each plansCardArray as item, i}
    <div in:scale={{ duration: 1000, easing: elasticOut, delay: 100 * i }}>
      <PlansCardSchools card={item.card} schoolUrl={item.schoolUrl}>
        <span slot="buttonText"> Book Date/Time </span>
        <span slot="cardTitle"> {item.cardTitle} </span>

        <span slot="cardText">
          {item.cardText}

          <!-- <p><a sveltekit:prefetch href={item.href}>invoice sample</a></p> -->
        </span>
      </PlansCardSchools>
    </div>
  {/each}
</div>

<style>
  a {
    color: var(--anchor);
  }
  a:hover {
    color: var(--anchor_hover);
  }
</style>
