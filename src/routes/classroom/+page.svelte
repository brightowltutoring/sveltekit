<script lang="ts">
	import JitsiUser from './JitsiUser.svelte';
	import { disableScrollingOnPage } from '$lib/utils';
	import { quintOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
	import { page } from '$app/stores';

	disableScrollingOnPage($page.url.pathname);

	const scaleParams = {
		duration: 2000,
		easing: quintOut
	};
</script>

<div in:scale={scaleParams} class="disableScrollOnThisPage">
	<JitsiUser />
</div>

<!-- <svelte:head>
	<script
		src="https://8x8.vc/vpaas-magic-cookie-0c93f8c4b4d6403cbf9746e035d5660e/external_api.js"
		async
	></script>

	<script type="text/javascript">
		window.onload = () => {
			const api = new JitsiMeetExternalAPI('8x8.vc', {
				roomName: 'thinksolveio',
				parentNode: document.querySelector('#jaas-container')
				// Make sure to include a JWT if you intend to record,
				// make outbound calls or use any other premium features!
				// jwt: "eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtMGM5M2Y4YzRiNGQ2NDAzY2JmOTc0NmUwMzVkNTY2MGUvZTU1YjVmLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJpYXQiOjE2ODU4NTQwNDYsImV4cCI6MTY4NTg2MTI0NiwibmJmIjoxNjg1ODU0MDQxLCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtMGM5M2Y4YzRiNGQ2NDAzY2JmOTc0NmUwMzVkNTY2MGUiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOmZhbHNlLCJvdXRib3VuZC1jYWxsIjpmYWxzZSwic2lwLW91dGJvdW5kLWNhbGwiOmZhbHNlLCJ0cmFuc2NyaXB0aW9uIjpmYWxzZSwicmVjb3JkaW5nIjpmYWxzZX0sInVzZXIiOnsiaGlkZGVuLWZyb20tcmVjb3JkZXIiOmZhbHNlLCJtb2RlcmF0b3IiOnRydWUsIm5hbWUiOiJUZXN0IFVzZXIiLCJpZCI6Imdvb2dsZS1vYXV0aDJ8MTA4NzQ1NzU5NzI2MTA3NjIwOTA3IiwiYXZhdGFyIjoiIiwiZW1haWwiOiJ0ZXN0LnVzZXJAY29tcGFueS5jb20ifX0sInJvb20iOiIqIn0.WpyvvxjTQXKbtXEg0eIJzZiAZM_3CtM02N3S0x5RGEAO9VJRdfB6clcbnEt8fvf7GKjDgdO8Rs4qVLQXBCCD3w8-PsdVbYqs_OPqm2SEj_Tk9M-R-vUzlGE32NpjATGjkS7htEg_Z8YfbZNJ8QiXBbZM-8bpZEFHLt0xIth0OL-6dvWM8nGs8CZkJxUxQZM30ipKcJowj0c8USw13spXxjTaTfBDk6hjx0UmJQnICzIBtQO0giZDVdMnUjtnK-hxrFzg1hX85m9ep7REFsQ5pt-rlG6zC_5q-l8wWmR-9gg3iwQbDdS_PIu8tQG9MYtxW6yQbC7k7B6lSqWUXv5Cuw"
			});
		};
	</script>
</svelte:head>
<div id="jaas-container" class="h-screen w-full" /> -->
