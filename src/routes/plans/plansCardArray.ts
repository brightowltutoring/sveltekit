const sampleHref =
	'https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9NU1ljQlpTa1hvSEhnNlkySjhrRmxRWVhQQmhrendpLDU0MTA5ODkz0200eSUPP97h?s=db';

const color = {
	red: 'f34d4e',
	yellow: 'fea45c',
	blue: '2aa5d6'
};

function payNowUrl(session_type: string, payment_type: string, color: string) {
	return `https://calendly.com/thinksolve/${session_type}-${payment_type}?embed_domain=thinksolve.io&embed_type=PopupText&hide_gdpr_banner=1&primary_color=${color}&a2=1.25+hr`;
}

// duplicating this function to allow pre-populating answers ... the now and later calendly urls are slightly different
function payLaterUrl(session_type: string, payment_type: string, color: string) {
	return `https://calendly.com/thinksolve/${session_type}-${payment_type}?embed_domain=thinksolve.io&embed_type=PopupText&hide_gdpr_banner=1&primary_color=${color}&a1=1.25+hr`;
}

export const plansCardArray = [
	{
		card: 1,
		payNowUrl: payNowUrl('classico', 'stripe', color.red),
		payLaterUrl: payLaterUrl('classico', 'invoice', color.red),
		buttonText: 'Classico',
		cardTitle: 'Classico',
		cardText:
			'Classic 1-on-1 session with smooth screen-sharing. Digital session notes available as a +1hr premium.',
		href: sampleHref
	},
	{
		card: 3,
		payNowUrl: payNowUrl('mock', 'stripe', color.blue),
		payLaterUrl: payLaterUrl('mock', 'invoice', color.blue),
		buttonText: 'Mock',
		cardTitle: 'Mock',
		cardText:
			' Get test ready. We provide a mock test session with live support/ answers to completed questions. Digital solution key available as a +2hr premium.',
		href: sampleHref
	},
	{
		card: 2,
		payNowUrl:
			'https://calendly.com/thinksolve/custom?embed_domain=thinksolve.io&embed_type=PopupText&hide_gdpr_banner=1',
		payLaterUrl:
			'https://calendly.com/thinksolve/custom?embed_domain=thinksolve.io&embed_type=PopupText&hide_gdpr_banner=1',
		buttonText: 'Custom',
		cardTitle: 'Custom',
		cardText: `Pick the first session date/time. Describe the remaining quantity of sessions + desired times/dates (check the calendar for availability), and we will send you a custom invoice. `,
		href: sampleHref
	}
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

export const plansCardArraySchools = [
	{
		card: 2,
		schoolUrl: 'https://calendly.com/thinksolve/school-classico?hide_gdpr_banner=1',
		buttonText: 'Classico',
		cardTitle: 'Classico',
		cardText:
			'Classic 1-on-1 session with smooth screen-sharing. Session notes/solutions on a personal URL available as a +2hr premium.',
		href: sampleHref
	},
	{
		card: 1,
		schoolUrl: 'https://calendly.com/thinksolve/school-mock?hide_gdpr_banner=1',
		buttonText: 'Mock',
		cardTitle: 'Mock',
		cardText:
			' Get test ready. We provide a mock test session with live support/ answers to completed questions. Digital solution key on a personal URL available as a +2hr premium.',
		href: sampleHref
	}
];
