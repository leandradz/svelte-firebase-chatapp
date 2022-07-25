<script>
  import { auth, googleProvider } from "./firebase";
  import { authState } from "rxfire/auth";

  import Chatroom from "./Chatroom.svelte";

  let user;

  const unsubscribe = authState(auth).subscribe((u) => (user = u));

  const login = () => {
    auth.signInWithPopup(googleProvider);
  };
</script>

<main>
  {#if user}
    <Chatroom {user} logout={() => auth.signOut()} />
  {:else}
    <div class="login-form">
      <button on:click={login}>
        <i class="fa fa-google" />
        Sing in with Google
      </button>
    </div>
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
    background: #fff;
    border: 1px solid #eee;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  }

  .login-form {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .login-form button {
    padding: 10px;
    background-color: #D0463B;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    border: 1px solid #bbb;
  }
  .login-form button:hover {
    background-color: #cd3328;
  }

  .login-form button i.fa {
    padding-right: 10px;
    border-right: 1px solid #ddd;
    color: #fff;
  }
</style>
