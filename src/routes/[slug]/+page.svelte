<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let a = $state(0);
	let b = $state(0);
	let total = $state(0);
	let putResponse = $state('');

	async function add() {
		const response = await fetch('/api/add', {
			method: 'POST',
			body: JSON.stringify({ a, b }),
			headers: {
				'content-type': 'application/json'
			}
		});

		total = await response.json();
	}

	async function putAdd() {
		const response = await fetch('/api/add', {
			method: 'PUT',
			body: JSON.stringify({ a, b }),
			headers: {
				'content-type': 'application/json'
			}
		});
		putResponse = await response.text();
	}
</script>

<h1>{data.title}</h1>
<div>{@html data.content}</div>

<input type="number" bind:value={a} /> + <input type="number" bind:value={b} /> =
<span>{total}</span>

<button onclick={add}>Calculate</button>
<button onclick={putAdd}>Put</button>

<p>{putResponse}</p>
