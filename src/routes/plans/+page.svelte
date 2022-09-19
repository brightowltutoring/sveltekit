<script>
  import PlansCard from "$lib/PlansCard.svelte";
  import { scale } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
  let sampleHref =
    "https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9NU1ljQlpTa1hvSEhnNlkySjhrRmxRWVhQQmhrendpLDU0MTA5ODkz0200eSUPP97h?s=db";
  const plansCardArray = [
    {
      card: 1,
      calendlyUrl:
        "https://calendly.com/brightowltutoring/invoice-webinowl?hide_gdpr_banner=1",
      buttonText: "Classico",
      cardText:
        "  Classic 1-on-1 session with smooth screen sharing. Supported platforms: Zoom, TeamViewer Meeting, and Microsoft Teams Digital session notesavailable at a premium ",
      href: sampleHref,
    },
    {
      card: 2,
      calendlyUrl:
        "https://calendly.com/brightowltutoring/invoice-blitzowl?hide_gdpr_banner=1",
      buttonText: "Blitz",
      cardText:
        "  Submit your homework Receive a personal 15-day solution URL/page Cost calculated based on number of questions submitted Single and bundled options available.",
      href: sampleHref,
    },
    {
      card: 3,
      calendlyUrl:
        "https://calendly.com/brightowltutoring/invoice-mockowl?hide_gdpr_banner=1",
      buttonText: "Mock",
      cardText:
        " Get test ready. We provide a mock test session complete with live support and a digital copy of answers. Solution key available at a premium",
      href: sampleHref,
    },
  ];
</script>

<div class="font-Poppins text-center sm:text-7xl text-6xl pb-2  ">Plans</div>

<!-- in:scale={{ duration: 1000, easing: elasticOut }} -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-7 ">
  {#each plansCardArray as item, i}
    <div in:scale={{ duration: 1000, easing: elasticOut, delay: 100 * i }}>
      <PlansCard card={item.card} calendlyUrl={item.calendlyUrl}>
        <span slot="buttonText"> {item.buttonText} </span>
        <span slot="cardText">
          {item.cardText}
          <p><a sveltekit:prefetch href={item.href}>sample</a></p>
        </span>
      </PlansCard>
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
