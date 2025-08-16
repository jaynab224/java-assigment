
function totalFine(fare) {
    if (typeof fare !== 'number' || fare < 1) {
        return "Invalid";
    }

    let sarcharge = fare * 0.20;
    let serviceCharge = 30;

    let total = fare + sarcharge + serviceCharge;

    return total;
}


function onlyCharacter(str) {
    
    if (typeof str !== 'string') {
        return "Invalid";
    }

    
    let cleanStr = str.replaceAll(" ", "");

    let upperStr = cleanStr.toUpperCase();

    return upperStr;
}

function bestTeam(player1, player2) {
    
    if (typeof player1 !== 'object' || typeof player2 !== 'object') {
        return "Invalid";
    }

    
    let player1Total = player1.foul + player1.cardY + player1.cardR;
    let player2Total = player2.foul + player2.cardY + player2.cardR;

    
    if (player1Total < player2Total) {
        return player1.name;
    } else if (player2Total < player1Total) {
        return player2.name;
    } else {
        return "Tie";
    }
}


function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

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
