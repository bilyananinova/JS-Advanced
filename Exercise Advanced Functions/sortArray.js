function sortArray(arr, argument) {
  return sort(arr);

  function sort(arr) {
    return (arr =
      argument == "asc"
        ? arr.sort((a, b) => a - b)
        : arr.sort((a, b) => b - a));
  }
}

sortArray([14, 7, 17, 6, 8], "asc");
sortArray([14, 7, 17, 6, 8], "desc");
