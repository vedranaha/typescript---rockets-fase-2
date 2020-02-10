"use strict";
function showRockets() {
    var rocket1 = new Rocket('32WESSDS');
    rocket1.addThruster(new Thruster(10));
    rocket1.addThruster(new Thruster(30));
    rocket1.addThruster(new Thruster(80));
    var rocket2 = new Rocket('LDSFJA32');
    rocket2.addThruster(new Thruster(30));
    rocket2.addThruster(new Thruster(40));
    rocket2.addThruster(new Thruster(50));
    rocket2.addThruster(new Thruster(50));
    rocket2.addThruster(new Thruster(30));
    rocket2.addThruster(new Thruster(10));
    var showRocket = document.getElementById('infoRocket');
    var elementRocket1 = document.createElement('div');
    //array with for of  
    var rockets = [rocket1, rocket2];
    for (var _i = 0, rockets_1 = rockets; _i < rockets_1.length; _i++) {
        var i = rockets_1[_i];
        console.log(i);
        elementRocket1.innerHTML += '<br> ROCKET ' + i.code + ' :  ';
        showRocket.appendChild(elementRocket1);
        i.thrusters.forEach(function (Thruster) {
            elementRocket1.innerHTML += Thruster.power + '  ';
            showRocket.appendChild(elementRocket1);
        });
    }
    var button = document.getElementById("create-rocket");
    button.classList.add('hide');
}
