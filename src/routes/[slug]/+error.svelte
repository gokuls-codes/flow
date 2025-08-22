<script lang="ts">
	import { page } from '$app/state';
</script>

<h1 class=" bg-amber-200 text-4xl font-semibold text-red-500">
	{page.status}: {page.error?.message}
</h1>
