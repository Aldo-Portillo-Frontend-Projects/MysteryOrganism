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

//Creating a factory function to create an organism
let pAequorFactory = (orgNum, dna) => {
  return {
    orgNum,
    dna,
    //Mutate method replicates P. Aequor's high rate of mutation
    mutate(){

      //console.log(dna);
      let randomIndex = Math.floor(Math.random() * this.dna.length);

      //console.log(randomIndex);
      let newBase = returnRandBase();

      //Use a while loop to ensure it only runs as long as the condition is true
      while(this.dna[randomIndex] === newBase){
        newBase = returnRandBase();
      }

      this.dna[randomIndex] = newBase;
      return this.dna;
    },
    compareDNA(otherOrg){
      let commonBases = 0;

      for (let i = 0 ; i < this.dna.length; i++){
          if (dna[i] === otherOrg.dna[i]){
            commonBases += 1;
          } 
      }
      commonBases = (commonBases / this.dna.length) * 100;
      return `Specimen #${this.orgNum} and specimen #${otherOrg.orgNum} have ${commonBases.toFixed(2)}% DNA in common`;
    },
    willLikelySurvive(){
      let numOfCG = 0;
      
      for (let i = 0; i < dna.length; i++){
        if (dna[i] === 'C' || dna[i] === 'G'){
          numOfCG += 1;
        }
      }

      if (numOfCG / this.dna.length >= 0.6){
        return true;
      } else {
        return false;
      }
    }
  }
}

//console.log(pAequorFactory(1, mockUpStrand()).mutate());

//console.log(pAequorFactory(1, mockUpStrand()).compareDNA(pAequorFactory(2, mockUpStrand())));

console.log(pAequorFactory(1, mockUpStrand()).willLikelySurvive());

