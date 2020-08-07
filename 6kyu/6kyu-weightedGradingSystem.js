// 6 kyu - Weighted Grading System

// The grading system that I use for my high school courses assigns different weights to different categories of assessments. This can make it difficult for my students to calculate the effect of a given assessment on the overall grade for the current marking period. Your task is to take an array that describes my weighted system and an object representing a new assessment score, and then return the student's overall grade both before and after this new score is applied.

// The first argument (categories) is an array of objects. Each object represents a different category of assessment and has the following structure:

// {descr: string, weight: integer, actualScoreSoFar: integer, maxScoreSoFar: integer}

// The second argument (assessment) is an object with the following structure:

// {descr: string, actualScore: integer, maxScore: integer}

// Your code should return an array of the form [before, after], containing the overall grade before and after this new assessment score is applied. Round both of these scores to a whole number.

// Some input validation will be necessary. For one thing, the weight values are percentages, so they must add up to 100. Also check to ensure that the description in the new assessment score matches one of the category descriptions in the categories array. If either of these conditions is not met, return the string "Invalid input!".

// EXAMPLE:

// The categories array reflects the following weighted grading system and current state of the student's grade:

// The classwork/homework category (CWHW) is weighted at 35%. So far, the student has earned 30 out of 50 possible points in this category.
// The projects category (Proj) is weighted at 30%. So far, the student has earned 80 out of 100 possible points in this category.
// The participation category (Part) is weighted at 20%. So far, the student has earned 95 out of 100 possible points in this category.
// The tests/quizzes category (TQ) is weighted at 15%. So far, the student has earned 22 out of 25 possible points in this category.
// Calculating the "before" grade:

// CWHW category: 60% x weight of 35 = 21
// Proj category: 80% x weight of 30 = 24
// Part category: 95% x weight of 20 = 19
// TQ category: 88% x weight of 15 = 13.2
// "Before" grade: 21 + 24 + 19 + 13.2 = 77.2, rounded off to 77.

// Now we add the new assessment score to the gradebook. It is a homework assignment (category CWHW), and the student has a perfect score of 50 out of 50 possible points. Adding this to the current values in the CWHW category, the student has now earned 80 of 100 possible points. 80% x weight of 35 = 28. All other category point totals remain unchanged.

// "After" grade: 28 + 24 + 19 + 13.2 = 84.2, rounded off to 84.

// The solution should return a result of [77, 84].

function beforeAndAfterGrades(categories, assessment) {
	const totalWeight = categories.reduce((a, b) => a + b.weight, 0);
	const found = categories.find(i => i.descr === assessment.descr);
	const before = Math.ceil(
		categories.reduce(
			(acc, curr) =>
				acc +
				((curr.actualScoreSoFar / curr.maxScoreSoFar) * curr.weight) / 100,
			0
		) * 100
	);
	let newScore = 0;

	if (totalWeight !== 100 || !found) return 'Invalid input!';
	else {
		const after = categories.reduce((acc, curr) => {
			if (assessment.descr === curr.descr) {
				curr.actualScoreSoFar += assessment.actualScore;
				curr.maxScoreSoFar += assessment.maxScore;
				newScore = (curr.actualScoreSoFar / curr.maxScoreSoFar) * curr.weight;
				acc += newScore;
			} else {
				acc += (curr.actualScoreSoFar / curr.maxScoreSoFar) * curr.weight;
			}
			return acc;
		}, 0);
		newScore = after;
	}

	return [
		before,
		newScore % 1 > 5 ? Math.ceil(newScore) : Math.floor(newScore)
	];
}
