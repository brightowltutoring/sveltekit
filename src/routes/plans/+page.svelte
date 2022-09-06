<script>
    import PlansCard from "$lib/PlansCard.svelte"
    import { goto } from "$app/navigation"
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-20">

    <PlansCard btnColor={"bg-[rgb(45,165,214)]"} 
    calendlyUrl={'https://calendly.com/brightowltutoring/invoice-webinowl?hide_gdpr_banner=1'} 
     >
        <span slot="buttonText"> Webinowl </span>
        <span slot="cardText"> 
            Classic 1-on-1 session with smooth screen
            sharing. Supported platforms: Zoom,
            TeamViewer Meeting, and Microsoft Teams
            Digital session notes available at a
            premium

            <p>
                <a href="https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9LTVM3TWdiUWkxNDY1Y2hnSXFhNDg0ZGJYVUlUWlJM0100zoHToCyS
                ">sample</a>
            </p>
        </span>

    </PlansCard>
    
    <PlansCard btnColor={"bg-[rgb(244,77,77)]"}
               calendlyUrl={'https://calendly.com/brightowltutoring/invoice-blitzowl?hide_gdpr_banner=1'} 
     >
        <span slot="buttonText">Blitzowl </span>
        <!-- <span slot="cardTitle"> s3ik </span> -->
        <span slot="cardText">
            Submit your homework
            Receive a personal 15-day solution
            URL/page
            Cost calculated based on number of
            questions submitted
            Single and bundled options available.

            <p>
                <a href="https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9LTVM3TWdiUWkxNDY1Y2hnSXFhNDg0ZGJYVUlUWlJM0100zoHToCyS
                ">sample</a>
            </p>
        </span>
    </PlansCard>

    <PlansCard btnColor={"bg-[rgb(254,164,92)]"}
               calendlyUrl={'https://calendly.com/brightowltutoring/invoice-mockowl?hide_gdpr_banner=1'} 
     >
        <span slot="buttonText">Mockowl </span>
        <!-- <span slot="cardTitle"> s3ik </span> -->
        <span slot="cardText"> 
            Get test ready. We provide a mock test
            session complete with live support and a
            digital copy of answers.
            Solution key available at a premium
            <p>
                <a href="https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9LTVM3TWdiUWkxNDY1Y2hnSXFhNDg0ZGJYVUlUWlJM0100zoHToCyS
                ">sample</a>
            </p>
        </span>
    </PlansCard>
</div>

<style>
    a { color:var(--anchor)}
    a:hover { color:var(--anchor_hover)}
</style>