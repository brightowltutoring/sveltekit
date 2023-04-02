<script>
	import { PUBLIC_UPLOAD_ENDPOINT } from '$env/static/public';
	const action_API_URL = ['/api/submit-homework', '/api/testPost', PUBLIC_UPLOAD_ENDPOINT];
</script>

<!-- TODO: appears that when js is off there is a limit to how much files can be uploaded at once .. -->
<noscript>
	<iframe
		name="dummyframe"
		id="dummyframe"
		style="display: none;"
		title="this iframe serves as a janky solution so that the page doesnt redirect after form submission"
	/>

	<!-- target="dummyframe" -->
	<form
		target="dummyframe"
		enctype="multipart/form-data"
		method="POST"
		action={action_API_URL[0]}
		class="flex flex-col items-center justify-center gap-5"
	>
		<!-- <form enctype="multipart/form-data" method="POST"> -->
		<label for="file" class="flex items-center justify-center text-lg sm:w-[60vw]">
			<input class="hidden px-5" type="file" name="file" id="file" multiple />
		</label>
		<label
			tabindex="-1"
			for="submit"
			class="border-1 group rounded-lg bg-red-800 p-3 text-white transition-colors duration-500 hover:bg-blue-400 focus:animate-wave focus:bg-emerald-500"
		>
			<span class="block group-focus:hidden">submit</span>
			<span class="hidden group-focus:block">sent</span>
			<input class="hidden" type="submit" value="Submit" id="submit" />
		</label>
	</form>
</noscript>
