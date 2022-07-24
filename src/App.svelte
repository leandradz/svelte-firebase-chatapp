<script>
  import { auth, googleProvider } from "./firebase";
  import { authState } from "rxfire/auth";

  let user;

  const unsubscribe = authState(auth).subscribe((u) => (user = u));

  function login() {
    auth.signInWithPopup(googleProvider);
  }
</script>

<main>
  {#if user}
    Logged in as {user.uid}
  {:else}
    <button on:click={login}>
      <i class="fa fa-google" />
      Sing in with Google
    </button>
  {/if}
</main>

<style>
  main {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 500px;
  }
</style>
