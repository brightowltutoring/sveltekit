<script>
	import DropzoneOpener from './DropzoneOpener.svelte';

	export let form;
	$: success = form?.success;
</script>

<DropzoneOpener {success} />
<!-- {#if success}
	success!
{/if} -->
