// 7kyu - Complementary DNA
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

// DNAStrand ("ATTGC") // return "TAACG"

const pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };
function DNAStrand(s) {
  return [...s]
    .map((c) => {
      if (c === 'A') return c.replace('A', 'T');
      if (c === 'T') return c.replace('T', 'A');
      if (c === 'C') return c.replace('C', 'G');
      if (c === 'G') return c.replace('G', 'C');
    })
    .join('');

  // Short solution
  return [...s].map((c) => pairs[c]).join('');
}
console.log(DNAStrand('TAATGC'));
