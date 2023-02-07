<script>
	import Heatmap from '@douganderson444/calendar-activity-heatmap';

	import data from './data.js';
</script>

<Heatmap {data} />

<hr />

<Heatmap view={'monthly'} monthGap={30} allowOverflow={true} {data} />
