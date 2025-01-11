let arr = [244, 5555, 4326, 76584, 342, 256, 999];

arr.forEach((num) => {
  if (num.toString()[0] === "2" || num.toString()[0] === "4") {
    console.log(num);
  }
});

for (let i = 2; i < 101; i++) {
  let count = 0;
  for (let num = 1; num * num <= i; num++) {
    if (i % num == 0) {
      count++;
      if (num != i / num) {
        count++;
      }
    }
  }
  if (count == 2) {
    console.log(i + " - Делители этого числа: 1 и " + i);
  }
}
