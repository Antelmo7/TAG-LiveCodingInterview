function fibonacci(): void {
  let numbers: number[] = [0, 1];

  for (let i = 0; i <= 10; i++) {
    console.log(numbers[i]);

    if (numbers[i - 1] === undefined || numbers[i - 1] === null) {
      continue;
    } else {
      const next: number = numbers[i - 1] + numbers[i]
      numbers.push(next);
    }
  }
}

fibonacci();