/*
7kyu - Tails of the High Seas
You also found a sticky note under your rear end with the following power levels:

Orangutans: 5
Chimpanzees: 3
Gorillas: 9
Humans: 1
The dynamics of your function, bite_me_monkey, boil down to this:

The highest numeric outcome of your functions' two competing sides determines the return string of bite_me_monkey
If the final primate number is greater than or equal to your client's final number, then the primates win and the function should return "Abandon ship! Save your own skin and blame it on the 'modestly-sized' yacht!"
Otherwise, return "Everything's good, I'll see you in the office on Monday."
A third function parameter, terrain, determines which side has an advantage in the fight:
If the terrain bonus is "island," then the humans have 20 extra points on top of their fighting battle number.
If the terrain bonus is "sea," then the primates have 10 extra points on top of their fighting battle number.
The monkey object will contain a Boolean wildcard value, jane_reporting_4_duty, that confirms whether or not Jane Goodall is present. If so, then the primates' fighting battle value is multiplied by half of however many chimpanzees are present (this is applied after any terrain bonus).
The two fighting battle numbers are calculated by:
Multiplying power levels against the headcount of the appropriate species.
Taking the aggregate of those products and adding it to the appropriate object's hit points value
Godspeed! The fate of the free world does not depend on this. However, your client may never be able to maintain a healthy relationship with local zoos or enjoy James Franco's dimples ever again...
*/

function biteMeMonkey(monkObj, clientObj, terrain) {
  const m =
    (monkObj.hitPoints +
      monkObj.orangutans * 5 +
      monkObj.chimpanzees * 3 +
      monkObj.gorillas * 9 +
      (terrain === 'sea' ? 10 : 0)) *
    (monkObj.janeReporting4Duty ? monkObj.chimpanzees / 2 : 1);

  const h =
    clientObj.hitPoints + clientObj.crew + (terrain === 'island' ? 20 : 0);

  return m >= h
    ? "Abandon ship! Save your own skin and blame it on the 'modestly-sized' yacht!"
    : "Everything's good, I'll see you in the office on Monday.";
}
