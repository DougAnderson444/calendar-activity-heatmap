<script lang="ts">
	import { stringifyDate } from '../utils/date';

	export let color: string = '';
	export let date: Date | string | number = 0;
	export let radius: number = 0;
	export let size: number = 0;
	export let value: number = 0;
	export let x: number = 0;
	export let y: number = 0;
</script>

<rect
	data-date={stringifyDate(date)}
	data-value={value}
	fill={color}
	height={size}
	rx={radius}
	width={size}
	{x}
	{y}
/>
