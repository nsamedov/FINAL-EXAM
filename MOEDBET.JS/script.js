function targil2(arr) {
    const newArr = [...new Set(arr)];
    let even = 0;
    let odd = 0;
    for (let i = 0; i < newArr.length; i++) {
      const num = newArr[i];
      if (isNaN(+num)) {
        throw Error(`${newArr[i]} is not a number`);
      }
      if (num % 2 !== 0) {
        odd += 1;
      } else {
        even += 1;
      }
    }
    return { even, odd, total: arr.length };
  }
  console.log(targil2([6, 3, 3, 4, 13, 6, 7, 18, 7, 11]));
  