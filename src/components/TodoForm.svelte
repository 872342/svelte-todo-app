<script>
	import { todoStore } from '../store';
	import FaRegTrashAlt from 'svelte-icons/fa/FaRegTrashAlt.svelte';
	import { slide } from 'svelte/transition';
	import { elasticInOut } from 'svelte/easing';

	let newTodo;
	function addTodo() {
		if (!newTodo.trim()) return;
		let todoObj = {
			id: Date.now(),
			text: newTodo.trim(),
			checked: false
		};
		newTodo = '';
		todoStore.update((todos) => [todoObj, ...todos]);
	}

	function deleteTodo(id) {
		$todoStore = $todoStore.filter((e) => e.id !== id);
	}
</script>

<div class="container">
	<div class="completed">
		{$todoStore.filter((t) => t.checked).length} out of {$todoStore.length} completed
	</div>

	<form on:submit|preventDefault={addTodo}>
		<label for="add todo">Add todo:</label>
		<input type="text" name="add todo" bind:value={newTodo} placeholder="E.g. Buy Milk" />
		<button>Add</button>
	</form>

	<div class="todo-list">
		{#each $todoStore as todo (todo.id)}
			<div
				class="todo-box"
				transition:slide={{ duration: 400, easing: elasticInOut }}
				on:click={() => {
					todo.checked = !todo.checked;
				}}
			>
				<input type="checkbox" bind:checked={todo.checked} />
				{#if todo.checked}
					<span class="checked">{todo.text}</span>
				{:else}
					<span>{todo.text}</span>
				{/if}
				<div
					on:click={deleteTodo(todo.id)}
					class="delete"
					transition:slide={{ delay: 100, duration: 400, easing: elasticInOut }}
				>
					<FaRegTrashAlt />
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.container {
		margin-top: 1rem;
		display: grid;
		justify-content: center;
		width: 100%;
	}
	.completed {
		margin-bottom: 1em;
		text-align: center;
	}
	.todo-list {
		font-size: large;

		padding: 1em;
	}
	.todo-box {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
		display: flex;
		justify-content: space-between;
		user-select: none;
		border-bottom: 1px solid rgb(104, 104, 104);
	}
	.checked {
		text-decoration: line-through;
	}
	.delete {
		width: 16px;
		height: 16px;
	}
</style>
