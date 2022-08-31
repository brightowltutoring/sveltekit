<script>

    import { auth } from '$lib/firebase.js'
	import { onAuthStateChanged } from "firebase/auth"
	import { isLoggedIn } from '$lib/store.js'

	import { onMount } from 'svelte'

	onMount(() => {

		  // TODO: previpously missing login code for passwordless login
                // Confirm the link is a sign-in with email link.
                if (isSignInWithEmailLink(auth, window.location.href)) {
                    // Additional state parameters can also be passed via URL.
                    // This can be used to continue the user's intended action before triggering
                    // the sign-in operation.
                    // Get the email if available. This should be available if the user completes
                    // the flow on the same device where they started it.
                    let email = window.localStorage.getItem('emailForSignIn');
                    if (!email) {
                        // User opened the link on a different device. To prevent session fixation
                        // attacks, ask the user to provide the associated email again. For example:
                        email = window.prompt('Please provide your email for confirmation');
                    }
                    // The client SDK will parse the code from the link for you.
                    signInWithEmailLink(auth, email, window.location.href)
                        .then((result) => {
                            // Clear email from storage.
                            window.localStorage.removeItem('emailForSignIn');
                        })
                        .catch( error => console.log(error));
                }
            // TODO: previpously missing login code for passwordless login

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