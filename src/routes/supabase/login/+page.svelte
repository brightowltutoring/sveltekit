<script>
	import { enhance } from '$app/forms';
</script>

<form method="POST" class="socials" use:enhance>
	<button formaction="?/login&provider=google" class="social-btn">Google</button>
</form>
