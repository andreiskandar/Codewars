function rank(st, we, n) {
  const nameArray = st.split(',');
  if (!st.length) return 'No participants';
  if (n > nameArray.length) return 'Not enough participants';

  let outputIdx;
  let sortedNameArray = [];
  const len = nameArray.map((name) => name.length);

  let som = nameArray
    .map((name, i) =>
      name
        .toLowerCase()
        .split('')
        .reduce((a, b) => {
          let code = typeof a === 'string' ? a.charCodeAt(0) - 96 : a;
          return code + b.charCodeAt(0) - 96;
        }, 0)
    )
    .map((num, idx) => (num + len[idx]) * we[idx]);
  const somArray = [...som];

  return nameArray
    .map((n, i) => ({
      name: n,
      s: [...n].reduce((a, b) => a + b.charCodeAt() - 96, 0) * we[i]
    }))
    .sort((a, b) => a.name - b.name)
    .sort((a, b) => b.s - a.s)[n - 1].name;

  // return nameArray.map((n, i) => ({name: n,
  //   s: [...n.toLowerCase()].reduce((a, b) => a + b.charCodeAt() - 95, 0) * we[i]
  //   })).sort((a, b) => a.name > b.name).sort((a, b) => b.s - a.s)[n - 1].name;
}

console.log(
  rank('William,Willaim,Olivia,Olivai,Lily,Lyli', [1, 1, 1, 1, 1, 1], 1)
);

// console.log(rank("Lagon,Lily", [1, 5], 2), "Lagon")
