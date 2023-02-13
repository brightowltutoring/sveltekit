// const sampleHref =
// 	'https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9NU1ljQlpTa1hvSEhnNlkySjhrRmxRWVhQQmhrendpLDU0MTA5ODkz0200eSUPP97h?s=db';

const color = {
	red: 'f34d4e',
	yellow: 'fea45c',
	blue: '2aa5d6'
};

// helper function
function payUrl(
	session_type: string,
	payment_type: string,
	color: string,
	default_form_params: string
) {
	return `https://calendly.com/thinksolve/${session_type}-${payment_type}?embed_domain=thinksolve.io&embed_type=PopupText&hide_gdpr_banner=1&primary_color=${color}${default_form_params}`;
}

export const plansCardArray = [
	{
		card: 1,
		payNowUrl: payUrl('classico', 'stripe', color.red, '&a2=2'),
		payLaterUrl: payUrl('classico', 'invoice', color.red, '&a1=1'),
		buttonText: 'Classico',
		cardTitle: 'Classico',
		cardText:
			'Classic 1-on-1 session with smooth screen-sharing. Digital session notes available as a +1hr premium.'
		// href: sampleHref
	},
	{
		card: 3,
		payNowUrl: payUrl('mock', 'stripe', color.blue, '&a2=2'),
		payLaterUrl: payUrl('mock', 'invoice', color.blue, '&a1=2'),
		buttonText: 'Mock',
		cardTitle: 'Mock',
		cardText:
			'Get test ready. We provide a live mock test session with answers to completed questions. Digital solution key available as a +2hr premium.'
		// href: sampleHref
	}
	// TODO: commenting out this service for now (feb13,2023) ... havent thought of a good third service
	// {
	// 	card: 2,
	// 	payNowUrl:
	// 		'https://calendly.com/thinksolve/custom?embed_domain=thinksolve.io&embed_type=PopupText&hide_gdpr_banner=1',
	// 	payLaterUrl:
	// 		'https://calendly.com/thinksolve/custom?embed_domain=thinksolve.io&embed_type=PopupText&hide_gdpr_banner=1',
	// 	buttonText: 'Custom',
	// 	cardTitle: 'Custom',
	// 	cardText: `Pick the first session date/time. Describe the remaining quantity of sessions + desired times/dates (check the calendar for availability), and we will send you a custom invoice. `,
	// 	href: sampleHref
	// }
	// TODO: commenting this option long ago ... not sure if I'll ever bring back 'blitzowl' service ... but keep here in case
	// {
	//   card: 2,
	//   payNowUrl:
	//     "https://calendly.com/thinksolve/invoice-blitzowl?hide_gdpr_banner=1",
	//   buttonText: "Blitz",
	//   cardText:
	//     "  Submit your homework Receive a personal 15-day solution URL/page Cost calculated based on number of questions submitted Single and bundled options available.",
	//   href: sampleHref,
	// },
];
