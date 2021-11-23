const kangarooJumps = (x1, v1, x2, v2) => {
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