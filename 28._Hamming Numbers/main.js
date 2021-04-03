function hamming(n) {
  let seq = [1];
  let i2 = 0, i3 = 0, i5 = 0;
  for (let i = 1; i < n; i++) {
    let x = Math.min(2 * seq[i2], 3 * seq[i3], 5 * seq[i5]);
    seq.push(x);
    if (2 * seq[i2] <= x) i2++;
    if (3 * seq[i3] <= x) i3++;
    if (5 * seq[i5] <= x) i5++;
  }
  return seq[n - 1];
}

