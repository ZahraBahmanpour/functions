const specialNum = () => {
  let cache = {};
  return (name) => {
    if (cache[name]) {
      return cache[name];
    }
    const rand = Math.floor(Math.random() * 100) + 1;
    cache[name] = rand;
    return rand;
  };
};

const generateSecretNum = specialNum();

const specialNumBrian = generateSecretNum("brian");
const specialNumPiper = generateSecretNum("piper");
const specialNumBrian1 = generateSecretNum("brian");
console.log(specialNumBrian);
console.log(specialNumPiper);
console.log(specialNumBrian1);
