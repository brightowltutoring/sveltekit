<!-- this isnt really working ... would like to check for auth only on pages that matter -->
<script>

    import { onAuthStateChanged } from "firebase/auth"
    import { auth } from '$lib/firebase.js'
    import { onMount } from 'svelte'
    import { isLoggedIn } from '$lib/store.js'
    
    $: console.log("user",user);



    onMount( ()=>{
 
        onAuthStateChanged( auth, user => { $isLoggedIn = user })
    })
</script>