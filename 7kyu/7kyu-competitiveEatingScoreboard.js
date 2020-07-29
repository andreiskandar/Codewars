// 7kyu - Competitive eating scoreboard
// You are the judge at a competitive eating competition and you need to choose a winner!

// There are three foods at the competition and each type of food is worth a different amount of points. Points are as follows:

// Chickenwings: 5 points

// Hamburgers: 3 points

// Hotdogs: 2 points

// Write a function that helps you create a scoreboard. It takes as a parameter a list of objects representing the participants, for example:

// [
//   {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
//   {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
// ]
// It should return "name" and "score" properties sorted by score; if scores are equals, sort alphabetically by name.

// [
//   {name: "Big Bob", score: 134},
//   {name: "Habanero Hillary", score: 98}
// ]
// Happy judging!

const POINTS = {
  chickenwings: 5,
  hamburgers: 3,
  hotdogs: 2
};

// var whoAteWhat = [
//   {name: "Billy The Beast", chickenwings: 17 , hamburgers: 7, hotdogs: 8},
//   {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
//   {name: "Joey Jaws", chickenwings: 8, hamburgers: 8, hotdogs: 15},
//   {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
// ];

const whoAteWhat = [
  { name: 'Joey Jaws', chickenwings: 0, hamburgers: 1, hotdogs: 1 },
  { name: 'Big Bob', chickenwings: 1, hamburgers: 0, hotdogs: 0 }
];

function scoreboard(whoAteWhat) {
  let totalScoreArray = [];
  let competitorPoints = 0;
  for (let i = 0; i < whoAteWhat.length; i++) {
    competitorPoints =
      whoAteWhat[i].chickenwings * POINTS.chickenwings +
      whoAteWhat[i].hamburgers * POINTS.hamburgers +
      whoAteWhat[i].hotdogs * POINTS.hotdogs;
    totalScoreArray.push({ name: whoAteWhat[i].name, score: competitorPoints });
  }

  return totalScoreArray
    .slice(0)
    .sort((a, b) =>
      a.score === b.score ? a.name.localeCompare(b.name) : b.score - a.score
    );

  //SHORT SOLUTION
  // return whoAteWhat.map(obj => ({
  //   name: obj.name,
  //   score: obj.chickenwings * POINTS.chickenwings +
  //          obj.hamburgers * POINTS.hamburgers +
  //          obj.hotdogs * POINTS.hotdogs }))
  //   .sort((a,b) => b.score - a.score || a.name > b.name)
}

console.log(scoreboard(whoAteWhat));
// console.log(scoreboard([{name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}]));
