import { writable } from 'svelte/store';
import { browser } from '$app/env';

const defaultValue = [];

export const todoStore = writable(
	(browser && JSON.parse(localStorage.getItem('todos'))) || defaultValue
);

todoStore.subscribe((value) => {
	if (browser) localStorage.setItem('todos', JSON.stringify(value));
});
