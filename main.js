// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, dna) => {
  return {
    specimenNum: number,
    dna: dna,
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (newBase === this.dna[randomIndex]) {
        newBase = returnRandBase();
      }
      this.dna[randomIndex] = newBase;
      return this.dna;
    },
    compareDNA(pAequor) {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          count++;
        }
      }
      const percentage = (count / this.dna.length) * 100;
      console.log(`Specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentage.toFixed(2)}% DNA in common.`);
    },
    willLikelySurvive() {
      const cOrG = this.dna.filter(base => base === 'C' || base === 'G');
      return cOrG.length / this.dna.length >= 0.6;
    }
  };
}

// Create 30 pAequor objects that will likely survive
const pAequorArray = [];
let specimenNum = 1;
while (pAequorArray.length < 30) {
  const newPAequor = pAequorFactory(specimenNum, mockUpStrand());
  if (newPAequor.willLikelySurvive()) {
    pAequorArray.push(newPAequor);
    specimenNum++;
  }
}
// Log the array of 30 pAequor objects
console.log(pAequorArray);
// Log the first pAequor object in the array
console.log(pAequorArray[0]);






