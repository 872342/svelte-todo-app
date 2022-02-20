<script>
	import Todoform from '../components/TodoForm.svelte';
	import '../global.css';
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta charset="UTF-8" />
	<title>Svelte localStorage Todo App</title>
</svelte:head>

<main class="container">
	<h1 class="title">Basic Svelte todo</h1>
	<p class="subtitle">with localstorage store.</p>
	<Todoform />
</main>

<style>
	.container {
		font-family: 'Nunito', sans-serif;
	}
	.title,
	.subtitle {
		text-align: center;
		margin: 0;
	}
</style>
