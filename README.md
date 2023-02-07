# Calendar Activity Heatmap

[![npm](https://img.shields.io/npm/v/calendar-activity-heatmap.svg)](https://www.npmjs.com/package/@douganderson444/calendar-activity-heatmap)

A light weight and customizable version of GitHub's contribution graph.

<b>Built with ❤️ using SvelteKit 1.0.0.</b>

[![Heatmap examples](https://user-images.githubusercontent.com/7980426/78958159-27d55280-7a9c-11ea-9b08-8b5d7df31d7a.png)](https://svelte-heatmap.netlify.app/)

## 📦 Installation

The recommended way to install this package is through NPM.

```bash
npm install @douganderson444/calendar-activity-heatmap
```

## <img src="./static/svelte-logo.svg" width="14px"> Svelte Example Usage

```svelte
<!-- ./src/routes/+page.svelte -->
<script>
  import Heatmap from '@douganderson444/calendar-activity-heatmap';

  let data =  new Array(365).fill().map((x, offset) => {
	const date = new Date();
	date.setDate(date.getDate() - offset);
	return { date, value: Math.floor(Math.random() * 10) };
});

</script>

<Heatmap data={data}>
```

## 🚀 Vanilla JS usage

To create a heatmap, pass `props` and a `target` to the constructor.

```js
import Heatmap from '@douganderson444/calendar-activity-heatmap/esm';

let data = new Array(365).fill().map((x, offset) => {
	const date = new Date();
	date.setDate(date.getDate() - offset);
	return { date, value: getRand10() };
});

const heatmap = new Heatmap({
	props: {
		data,
		allowOverflow: true
		// other props here as desired
	},
	target: getElementById('heatmap')
});

// ... in the HTML:

<div id="heatmap" />;
```

To remove the component, call `$destroy`.

```js
heatmap.$destroy();
```

See the [Svelte documentation](https://svelte.dev/docs#Client-side_component_API) for more information.

## ⚙️ Optional Properties (Props)

> **Note:** Date values for `data`, `startDate`, and `endDate` should be [JavaScript `Date` objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) objects, or a value compatible with the Date constructor.

##### `allowOverflow: boolean`

Renders cells that fall outside the `startDate` to `endDate` range. Defaults to `false`.

##### `cellGap: number`

Defines the space between cells.

##### `cellRadius: number`

Defines the radius of each cell. This should be a number relative to the `cellSize`, or a string representing a percentage such as `'50%'`.

##### `cellSize: number`

Defines the size of each cell.

##### `colors: string[]`

Array of CSS colors to use for the chart, ordered from lowest to highest. Default colors match GitHub's contribution graph with `['#c6e48b', '#7bc96f', '#239a3b', '#196127']`.

##### `data: { date: Date | string | number; value: number }[]`

Array of objects containing the chart data. These objects should be in the shape of `{ date, value }`.

##### `dayLabelWidth: number`

Horizontal space to allocate for day labels. If this is `0`, day labels will not be rendered.

##### `dayLabels: string[]`

Array of strings to use for day labels. Defaults to `['', 'Mon', '', 'Web', '', 'Fri', '']`.

##### `fontColor: string`

Label font color. Defaults to `#333`.

##### `fontFamily: string`

Label font family. Defaults to `sans-serif`.

##### `fontSize: number`

Label font size. Defaults to `8`.

##### `emptyColor: string`

CSS color to use for cells with no value.

##### `monthGap: number`

Defines the space between months when `view` is set to `monthly`.

##### `monthLabelHeight: number`

Vertical space to allocate for month labels. If this is `0`, month labels will not be rendered.

##### `monthLabels: string[]`

Array of strings to use for month labels. Defaults to `['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']`.

##### `startDate: Date | string | number`

Date object representing the first day of the graph. If omitted, this will default to the first day of the `month` or `year`, based on the current `view`.

##### `endDate: Date | string | number`

Date object represending the last day of the graph. If omitted, this will default to the last day of the current `month` or `year`, depending on the current `view`.

##### `view: 'monthly' | 'yearly'`

Determines how the chart should be displayed. Supported values are `monthly` and `yearly`, defaults to `yearly`.

## 📄 License

[MIT](https://github.com/scottbedard/svelte-heatmap/blob/master/LICENSE)

Updates Copyright (c) 2023 Doug Anderson

Original work Copyright (c) 2017 Scott Bedard
