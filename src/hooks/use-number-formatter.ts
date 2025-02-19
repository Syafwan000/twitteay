const useNumberFormatter = (num: number | string, digits: number) => {
  let number
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "Qd" }
  ];

  if(typeof num === "string") {
    number = parseInt(num)
  } else {
    number = num
  }

  const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
  const item = lookup.slice().reverse().find(item => number >= item.value);

  return item ? (number / item.value).toFixed(digits).replace(regexp, "").concat(item.symbol) : null;
}

export default useNumberFormatter