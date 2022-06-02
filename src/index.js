const a = [2, 2, 3, 3, 1, 4, 5];
var reducer = (arr) => {
  console.log(arr);
  var count = {},
    result = [];
  for (var i = 0; i < arr.length; i++) {
    if (count[a[i]]) {
      count[a[i]] += 1;
    } else {
      count[a[i]] = 1;
    }
  }
  console.log(count);
  // console.log()
  for (let a in count) {
    if (count[a] >= 2) {
      result.push(...a);
    }
  }
  console.log(result);

  // const Aset = new Set(arr);
  // console.log(Aset.size === arr.size)
};

reducer(a);
