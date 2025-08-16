function totalFine(fare) {
    if (typeof fare !== 'number' || fare < 1) {
        return "Invalid";
    }

    let sarcharge = fare * 0.20;
    let serviceCharge = 30;

    let total = fare + sarcharge + serviceCharge;

    return total;
}

console.log("Total Fine:", totalFine(200));

function onlyCharacter(str) {
    
    if (typeof str !== 'string') {
        return "Invalid";
    }

    
    let cleanStr = str.replaceAll(" ", "");

    let upperStr = cleanStr.toUpperCase();

    return upperStr;
}
console.log(onlyCharacter(" h e llo wor ld")); 
console.log(onlyCharacter(true));   

function bestTeam(player1, player2) {
    // Step 1: check input valid object kina
    if (typeof player1 !== 'object' || typeof player2 !== 'object') {
        return "Invalid";
    }

    // Step 2: Total foul + cardY + cardR count
    let player1Total = player1.foul + player1.cardY + player1.cardR;
    let player2Total = player2.foul + player2.cardY + player2.cardR;

    // Step 3: Compare
    if (player1Total < player2Total) {
        return player1.name;
    } else if (player2Total < player1Total) {
        return player2.name;
    } else {
        return "Tie";
    }
}
console.log(bestTeam(
  { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
  { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
)); // Brazil

console.log(bestTeam(
  { name: "Germany", foul: 12, cardY: 0, cardR: 0 },
  { name: "Sweden", foul: 7, cardY: 4, cardR: 1 }
)); // Tie

console.log(bestTeam(
  { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
  { name: "France", foul: 10, cardY: 2, cardR: 1 }
)); // Germany

console.log(bestTeam(
  { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
  "France"
)); // Invalid



function isSame(arr1, arr2) {
    // Step 1: check input array kina
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }

    // Step 2: check length
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Step 3: compare each element
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    // Step 4: all matched
    return true;
}
console.log(isSame([1, 2, 3], [1, 2, 3])); // true
console.log(isSame([1, undefined, 3], [1, null, 3])); // false
console.log(isSame([1, "4", 4], [1, 4, 4])); // false
console.log(isSame([1, 4, 5], [1, 4, 5])); // true
console.log(isSame([2, 5, 6], 256)); // Invalid
console.log(isSame({ data: [2, 5, 6] }, [2, 5, 6])); // Invalid




function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    let total = 0;
    let pass = 0;
    let fail = 0;

    for (let i = 0; i < marks.length; i++) {
        let mark = marks[i];
        total += mark;

        if (mark >= 40) {
            pass++;
        } else {
            fail++;
        }
    }

    let avg = marks.length > 0 ? Number((total / marks.length).toFixed(0)) : 0;

    return {
        finalScore: avg,
        pass: pass,
        fail: fail,
    }
}

console.log(resultReport([])); 
// { finalScore: 0, pass: 0, fail: 0 }

console.log(resultReport([98, 87, 67, 91, 92, 33, 87])); 
// { finalScore: 79, pass: 6, fail: 1 }

console.log(resultReport([99, 87, 67, 12, 87])); 
// { finalScore: 70, pass: 4, fail: 1 }

console.log(resultReport([99])); 
// { finalScore: 99, pass: 1, fail: 0 }

console.log(resultReport(100)); 
// "Invalid"
