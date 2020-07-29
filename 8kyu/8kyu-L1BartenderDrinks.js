/*
8kyu - L1:Bartender, drinks!
Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
 "Programmer"	 "Hipster Craft Beer"
 "Bike Gang Member"	"Moonshine" 
 "Politician"	"Your tax dollars" 
 "Rapper"	"Cristal" 
 *anything else*	"Beer" 
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer."

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, getDrinkByProfession("pOLitiCIaN") should still return "Your tax dollars".
*/

const paramInput = {
  Jabroni: 'Patron Tequila',
  'School Counselor': 'Anything with Alcohol',
  Programmer: 'Hipster Craft Beer',
  'Bike Gang Member': 'Moonshine',
  Politician: 'Your tax dollars',
  Rapper: 'Cristal'
};

function getDrinkByProfession(param) {
  const output =
    paramInput[
      param
        .toLowerCase()
        .replace(/^\w/, x => x.toUpperCase())
        .replace(/(?<=\s)\w/g, c => c.toUpperCase())
    ];
  return output === undefined ? 'Beer' : output;
}

console.log(
  getDrinkByProfession('jabrOni'),
  'Patron Tequila',
  "'Jabroni' should map to 'Patron Tequila'"
);
console.log(
  getDrinkByProfession('scHOOl counselor'),
  'Anything with Alcohol',
  "'School Counselor' should map to 'Anything with alcohol'"
);
console.log(
  getDrinkByProfession('prOgramMer'),
  'Hipster Craft Beer',
  "'Programmer' should map to 'Hipster Craft Beer'"
);
console.log(
  getDrinkByProfession('bike ganG member'),
  'Moonshine',
  "'Bike Gang Member' should map to 'Moonshine'"
);
console.log(
  getDrinkByProfession('poLiTiCian'),
  'Your tax dollars',
  "'Politician' should map to 'Your tax dollars'"
);
console.log(
  getDrinkByProfession('rapper'),
  'Cristal',
  "'Rapper' should map to 'Cristal'"
);
console.log(
  getDrinkByProfession('pundit'),
  'Beer',
  "'Pundit' should map to 'Beer'"
);
console.log(getDrinkByProfession('Pug'), 'Beer', "'Pug' should map to 'Beer'");
