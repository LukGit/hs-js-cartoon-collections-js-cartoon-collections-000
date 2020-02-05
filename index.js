function dwarfRollCall(dwarves) {
  let str =  "";
  for (let i = 0; i < dwarves.length; i++) {  
    str = str + `${i + 1}. ${dwarves[i]} `  
  }
  return str;
}

function summonCaptainPlanet(planeteerCalls){
  let arr = [];
  let upperStr = "";
  for (let i = 0; i < planeteerCalls.length; i++) {  
    upperStr = `${planeteerCalls[i].toUpperCase()}!`;
    arr.push(upperStr);
  }
  return arr;
}

function longPlaneteerCalls(words) {
  let j = 0;
  for (let i = 0; i < words.length; i++) {  
    if (words[i].length > 4) {
      j++;
    }
  }  
  if (j > 0) {
    return true;
  } else {
    return false;
  }
}

function findTheCheese (foods) {
  const cheese = ["gouda", "cheddar", "camembert"];
  for (let i = 0; i < foods.length; i++) {
    for (let j = 0; j < cheese.length; j++) {
      if (foods[i] === cheese[j]) {
        return foods[i]
      }
    }
  }
  return "no cheese!"
}
