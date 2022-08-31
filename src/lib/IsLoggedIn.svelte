<script>

    import { auth } from '$lib/firebase.js'
	import { onAuthStateChanged } from "firebase/auth"
	import { isLoggedIn } from '$lib/store.js'

	import { onMount } from 'svelte'

	onMount(() => {

		onAuthStateChanged( auth, user => {
			if( user ) {
				$isLoggedIn = true
				console.log("$isLoggedIn",$isLoggedIn)
			}                           
			else {
				$isLoggedIn = false
				console.log("$isLoggedIn",$isLoggedIn)
			}
		})
   
	})
</script>