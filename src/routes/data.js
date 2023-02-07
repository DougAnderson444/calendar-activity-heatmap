// random number between 0 and 10
const getRand10 = () => Math.floor(Math.random() * 10);

// make an array of 365 objects with random values between 0 and 10 from now until a year ago, one for each day
export default new Array(365).fill().map((x, offset) => {
	const date = new Date();
	date.setDate(date.getDate() - offset);
	return { date, value: getRand10() };
});
