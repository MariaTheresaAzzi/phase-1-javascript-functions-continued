// code your solution here
//let rollerskate = 'roller-skate';
function saturdayFun(rollerskate = 'roller-skate') {
    return "This Saturday, I want to " + rollerskate + "!";
    // if (rollerskate != 0) {
    //     return "This Saturday, I want to roller-skate!";
    // }
    // //let rollerskate = "bathe my dog";
    // else if (rollerskate == "bathe my dog") {
    //     return "This Saturday, I want to bathe my dog!";
    // }
}


function mondayWork(office = 'go to the office') {
    return "This Monday, I will " + office + ".";
}

function wrapAdjective(highlight) {
    return function (text) { return `You are ${highlight}${text}${highlight}!`; };

}
wrapAdjective("%")("a dedicated programmer");