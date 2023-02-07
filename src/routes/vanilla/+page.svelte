<script>
	import { onMount } from 'svelte';
	import Heatmap from '@douganderson444/calendar-activity-heatmap/esm';
	import data from '../data.js';

	onMount(() => {
		const heatmap = new Heatmap({
			props: {
				data
			},
			target: document.body
		});
	});
</script>
