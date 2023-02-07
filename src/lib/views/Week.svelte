<script lang="ts">
	import Cell from './Cell.svelte';
	import { stringifyDate } from '../utils/date';

	export let cellRadius: number;
	export let cellRect: number;
	export let cellSize: number;
	export let days: { color: string; date: Date; value: number }[];
	export let index: number;
	export let monthLabelHeight: number;

	$: translation = cellRect * index;
</script>

<g transform={`translate(${translation}, ${monthLabelHeight})`}>
	{#each days as day, index}
		<Cell
			color={day.color}
			date={day.date}
			radius={cellRadius}
			size={cellSize}
			value={day.value}
			y={day.date.getDay() * cellRect}
		/>
	{/each}
</g>
