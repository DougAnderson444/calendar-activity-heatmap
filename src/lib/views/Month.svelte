<script lang="ts">
	import Cell from './Cell.svelte';
	import { getWeekIndex, stringifyDate } from '../utils/date';

	export let cellGap: number;
	export let cellRadius: number;
	export let cellRect: number;
	export let cellSize: number;
	export let days: { color: string; date: Date; value: number }[];
	export let fontColor: string;
	export let fontFamily: string;
	export let fontSize: number;
	export let index: number;
	export let monthGap: number;
	export let monthLabelHeight: number;
	export let monthLabels: string[];

	$: translation = (7 * cellRect - cellGap + monthGap) * index;
</script>

<g transform={`translate(${translation}, 0)`}>
	{#each days as day}
		<Cell
			color={day.color}
			date={day.date}
			radius={cellRadius}
			size={cellSize}
			value={day.value}
			x={day.date.getDay() * cellRect}
			y={getWeekIndex(day.date) * cellRect + monthLabelHeight}
		/>
	{/each}
	{#if monthLabelHeight > 0}
		<text
			alignment-baseline="hanging"
			fill={fontColor}
			font-family={fontFamily}
			font-size={fontSize}
			x="0"
			y="0"
		>
			{monthLabels[days[0].date.getMonth()]}
		</text>
	{/if}
</g>
