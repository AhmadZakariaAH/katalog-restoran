let fetchCount = 0;

const fetchCountIncrement = () => {
  fetchCount += 1;
};

const fetchCountDecrement = () => {
  fetchCount = fetchCount === 0 ? 0 : fetchCount - 1;
};

export { fetchCount, fetchCountIncrement, fetchCountDecrement };
