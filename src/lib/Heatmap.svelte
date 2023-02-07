<script lang="ts">
	import { chunkMonths, chunkWeeks, getCalendar } from './utils/heatmap';

	import Month from './views/Month.svelte';
	import Week from './views/Week.svelte';

	export let allowOverflow: boolean = false;
	export let cellGap: number = 2;
	export let cellRadius: number = 2;
	export let cellSize: number = 10;
	export let colors: string[] = ['#c6e48b', '#7bc96f', '#239a3b', '#196127'];
	export let data: { date: Date | string | number; value: number }[] = [];
	export let dayLabelWidth: number = 20;
	export let dayLabels: string[] = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
	export let emptyColor: string = '#ebedf0';
	export let endDate: Date | string | number = Date.now();
	export let fontColor: string = '#333';
	export let fontFamily: string = 'sans-serif';
	export let fontSize: number = 8;
	export let monthGap: number = 2;
	export let monthLabelHeight: number = 12;
	export let monthLabels: string[] = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];
	export let startDate: Date | string | number = Date.now() - 1000 * 60 * 60 * 24 * 365; // defaulto 1 year
	export let view: string = 'weekly';

	const isNewMonth = (chunks: { date: Date; value: number }[][], index: number) => {
		const chunk = chunks[index];
		const prev = chunks[index - 1];

		if (!prev) {
			return true;
		}

		if (!prev.length || !chunk.length) {
			return false;
		}

		const currentIndex = chunk[0].date.getMonth();
		const prevIndex = prev[0].date.getMonth();

		return (
			index < chunks.length &&
			index < chunks.length - 1 &&
			(currentIndex > prevIndex || (currentIndex === 0 && prevIndex === 11))
		);
	};

	$: cellRect = cellSize + cellGap;

	$: calendar = getCalendar({ colors, data, emptyColor, endDate, startDate, view });

	$: chunks =
		view === 'monthly'
			? chunkMonths({ allowOverflow, calendar, endDate, startDate })
			: chunkWeeks({ allowOverflow, calendar, endDate, startDate });

	$: weekRect = 7 * cellRect - cellGap;

	$: height =
		view === 'monthly'
			? 6 * cellRect - cellGap + monthLabelHeight // <- max of 6 rows in monthly view
			: weekRect + monthLabelHeight;

	$: width =
		view === 'monthly'
			? (weekRect + monthGap) * chunks.length - monthGap
			: cellRect * chunks.length - cellGap + dayLabelWidth;

	$: dayLabelPosition = (index: number) => {
		return cellRect * index + cellRect / 2 + monthLabelHeight;
	};
</script>

<svg viewBox={`0 0 ${width} ${height}`}>
	{#if view === 'monthly'}
		{#each chunks as chunk, index}
			<Month
				{cellGap}
				{cellRadius}
				{cellRect}
				{cellSize}
				days={chunk}
				{fontColor}
				{fontFamily}
				{fontSize}
				{index}
				{monthGap}
				{monthLabelHeight}
				{monthLabels}
			/>
		{/each}
	{:else}
		{#if dayLabelWidth > 0}
			{#each dayLabels as label, index}
				<text
					alignment-baseline="middle"
					fill={fontColor}
					font-family={fontFamily}
					font-size={fontSize}
					x="0"
					y={dayLabelPosition(index)}
				>
					{label}
				</text>
			{/each}
		{/if}
		<g transform={`translate(${dayLabelWidth})`}>
			{#each chunks as chunk, index}
				<Week {cellRadius} {cellRect} {cellSize} days={chunk} {index} {monthLabelHeight} />
				{#if monthLabelHeight > 0 && isNewMonth(chunks, index)}
					<text
						alignment-baseline="hanging"
						fill={fontColor}
						font-family={fontFamily}
						font-size={fontSize}
						x={cellRect * index}
					>
						{monthLabels[chunk[0].date.getMonth()]}
					</text>
				{/if}
			{/each}
		</g>
	{/if}
</svg>
