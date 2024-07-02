function calc(){
    var str = document.getElementById("strength").value;
    var per = document.getElementById("perception").value;
    var end = document.getElementById("endurance").value;
    var cha = document.getElementById("charisma").value;
    var int = document.getElementById("intelligence").value;
    var agi = document.getElementById("agility").value;
    var luc = document.getElementById("luck").value;
    var sk1 = document.getElementById("skill-1").value;
    var sk2 = document.getElementById("skill-2").value;
    var sk3 = document.getElementById("skill-3").value;
    
    var barter = (cha - 5) + Math.floor((luc - 5)/2);
    var breach = 0;
    
    if (per > int) {
        breach = (per -5) + Math.floor((luc - 5)/2);
    } else {
        breach = (int -5) + Math.floor((luc - 5)/2);
    }
    
    var crafting = (int -5) + Math.floor((luc - 5)/2);
    var energyWeapons = (per -5) + Math.floor((luc - 5)/2);
    var explosives = (per-5) + Math.floor((luc - 5)/2);
    var guns = (agi -5) + Math.floor((luc - 5)/2);
    var intimidation = 0;
    
    if (str > cha) {
        intimidation = (str -5) + Math.floor((luc - 5)/2);
    } else {
        intimidation = (cha -5) + Math.floor((luc - 5)/2);
    }
    
    var medicine = 0;
    
    if (per > int) {
        medicine = (per -5) + Math.floor((luc - 5)/2);
    } else {
        medicine = (int -5) + Math.floor((luc - 5)/2);
    }

    var meleeWeapons = (str -5) + Math.floor((luc - 5)/2);
    var science = (int -5) + Math.floor((luc - 5)/2);
    var sneak = (agi -5) + Math.floor((luc - 5)/2);
    var speech = (cha -5) + Math.floor((luc - 5)/2);
    var survival = (end -5) + Math.floor((luc - 5)/2);
    var unarmed = (str -5) + Math.floor((luc - 5)/2);
    
    var SP = (agi -5) + 10;
    var HP = (end -5) + 10;
    var AP = (agi -5) + 10;
    var heal = Math.floor((1 + end)/2);
    var CL = str * 10;
    var PS = 12 + (per -5);
    var RDC = 12 - (end -5);
    
    switch (sk1) {
        case "1":
            barter = barter + 2;
            break;
        case "2":
            breach = breach + 2;
            break;
        case "3":
            crafting = crafting + 2;
            break;
        case "4":
            energyWeapons = energyWeapons + 2;
            break;
        case "5":
            explosives = explosives + 2;
            break;
        case "6":
            guns = guns + 2;
            break;
        case "7":
            intimidation = intimidation + 2;
            break;
        case "8":
            medicine = medicine + 2;
            break;
        case "9":
            meleeWeapons = meleeWeapons + 2;
            break;
        case "10":
            science = science + 2;
            break;
        case "11":
            sneak = sneak + 2;
            break;
        case "12":
            speech = speech + 2;
            break;
        case "13":
            survival = survival + 2;
            break;
        case "14":
            unarmed = unarmed + 2;
            break;
    }
    switch (sk2) {
        case "1":
            barter = barter + 2;
            break;
        case "2":
            breach = breach + 2;
            break;
        case "3":
            crafting = crafting + 2;
            break;
        case "4":
            energyWeapons = energyWeapons + 2;
            break;
        case "5":
            explosives = explosives + 2;
            break;
        case "6":
            guns = guns + 2;
            break;
        case "7":
            intimidation = intimidation + 2;
            break;
        case "8":
            medicine = medicine + 2;
            break;
        case "9":
            meleeWeapons = meleeWeapons + 2;
            break;
        case "10":
            science = science + 2;
            break;
        case "11":
            sneak = sneak + 2;
            break;
        case "12":
            speech = speech + 2;
            break;
        case "13":
            survival = survival + 2;
            break;
        case "14":
            unarmed = unarmed + 2;
            break;
    }
    switch (sk3) {
        case "1":
            barter = barter + 2;
            break;
        case "2":
            breach = breach + 2;
            break;
        case "3":
            crafting = crafting + 2;
            break;
        case "4":
            energyWeapons = energyWeapons + 2;
            break;
        case "5":
            explosives = explosives + 2;
            break;
        case "6":
            guns = guns + 2;
            break;
        case "7":
            intimidation = intimidation + 2;
            break;
        case "8":
            medicine = medicine + 2;
            break;
        case "9":
            meleeWeapons = meleeWeapons + 2;
            break;
        case "10":
            science = science + 2;
            break;
        case "11":
            sneak = sneak + 2;
            break;
        case "12":
            speech = speech + 2;
            break;
        case "13":
            survival = survival + 2;
            break;
        case "14":
            unarmed = unarmed + 2;
            break;
    }
    
    
    document.getElementById("barter").innerHTML = barter;
    document.getElementById("breach").innerHTML = breach;
    document.getElementById("crafting").innerHTML = crafting;
    document.getElementById("energy-weapons").innerHTML = energyWeapons;
    document.getElementById("explosives").innerHTML = explosives;
    document.getElementById("guns").innerHTML = guns;
    document.getElementById("intimidation").innerHTML = intimidation;
    document.getElementById("medicine").innerHTML = medicine;
    document.getElementById("melee-weapons").innerHTML = meleeWeapons;
    document.getElementById("science").innerHTML = science;    
    document.getElementById("sneak").innerHTML = sneak;
    document.getElementById("speech").innerHTML = speech;
    document.getElementById("survival").innerHTML = survival;
    document.getElementById("unarmed").innerHTML = unarmed;
    document.getElementById("SP").innerHTML = SP;
    document.getElementById("HP").innerHTML = HP;
    document.getElementById("heal").innerHTML = heal;
    document.getElementById("CL").innerHTML = CL;
    document.getElementById("AP").innerHTML = AP;
    document.getElementById("PS").innerHTML = PS;
    document.getElementById("RDC").innerHTML = RDC;
    
}