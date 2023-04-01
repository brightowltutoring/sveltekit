<script>
	import { PUBLIC_UPLOAD_ENDPOINT } from '$env/static/public';
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
	<!-- <form
		target="dummyframe"
		enctype="multipart/form-data"
		method="POST"
		action={PUBLIC_UPLOAD_ENDPOINT}
	> -->
	<!-- <form enctype="multipart/form-data" method="POST" action="/api/submit-homework"> -->
	<form enctype="multipart/form-data" method="POST" action="/api/testPost">
		<!-- <form enctype="multipart/form-data" method="POST"> -->
		<label
			for="file"
			class="submitArea group mx-auto flex w-[65vw] flex-wrap items-center justify-center overflow-scroll text-3xl backdrop-blur-3xl sm:w-[60vw]"
		>
			<!-- <div class="font-Nunito text-2xl group-hover:animate-pulse">Drop it like it's 🔥</div> -->
			<!-- <input class="hidden" type="file" name="file" id="file" required multiple /> -->
			<div class="grid w-1/2 grid-cols-1 gap-5">
				<!-- animate-pulse -->
				<!-- <IconUpload /> -->
				<input type="file" name="file" id="file" multiple />
				<input
					class="border-1 hover: rounded bg-red-800 p-3 text-white hover:bg-blue-400 focus:animate-ping focus:bg-indigo-700"
					type="submit"
					value="Submit"
				/>
			</div>
		</label>
	</form>
</noscript>
