const tableTennisScore = (tomScores, jackScores) => {
    //set score counts for the two mutable variables
    //declare an empty array that will later be the result
    //loop through the game round
    //compare the scores of both players at same index, and record score with count variables declared ealier
    //push counts for both playes into result array and output result array 
    let tomCount = 0;
    let jackCount = 0;
    const result = []
    for (let i = 0; i < tomScores.length; i++) {
        const tom = tomScores[i];
        const jack = jackScores[i];
        if (tom > jack) {
            tomCount++
        } else if (jack > tom) {
            jackCount++
        }
    }
    result.push(tomCount)
    result.push(jackCount)

    console.log(result)
}

const first = [1, 4, 7, 2, 4]
const second = [3, 4, 2, 4, 4]
tableTennisScore(first, second)