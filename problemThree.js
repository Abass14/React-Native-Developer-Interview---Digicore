const kangarooJumps = (x1, v1, x2, v2) => {
    //declare to variables that specify YES or NO for when kangaroos meet or not
    //declare a mutable variable result that returns either of the first declared variables
    //the velocity for first kangaroo will mostly be higher than velocity for second kangaroo (v1 > v2) for kangaroos to meet if first kangaroo starts at x1
    //if the distance convered by both kangaroos are y1 and y2 respectively
    //And j is the number of times jumped by both kangaroos
    //then y1 = x1 + j(v1) and y2 = x2 + j(v2)
    //factorizing both equations x1 + j(v1) = x2 + j(v2)
    //therefore, j = x1-x2/v2 -v1 and if j is a whole number, hence, kangaroos meet
    const kangaroosMeet = 'YES'
    const kangaroosNeverMeet = 'NO'
    let result;
    if ((v1 > v2) && (x1 - x2) % (v2 - v1) === 0) {
        result = kangaroosMeet
    }else{
        result = kangaroosNeverMeet
    }

    console.log(result)
    return result;
}

kangarooJumps(1, 2, 2, 1)