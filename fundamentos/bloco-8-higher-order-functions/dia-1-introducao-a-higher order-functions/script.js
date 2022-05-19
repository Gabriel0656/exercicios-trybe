const acord = () => 'Acordando!!';

const cafe = () => 'Bora tomar café!!';

const dormir = () => 'Partiu dormir'

const doingThings = (callback) => {
  const result = callback();
  console.log(result);
};

doingThings(acord)
doingThings(cafe)
doingThings(dormir)

