function showRockets(){
    let rocket1 = new Rocket('32WESSDS');
    rocket1.addThruster(new Thruster(10));
    rocket1.addThruster(new Thruster(30));
    rocket1.addThruster(new Thruster(80));
    

    let rocket2 = new Rocket('LDSFJA32');
    rocket2.addThruster(new Thruster(30));
    rocket2.addThruster(new Thruster(40));
    rocket2.addThruster(new Thruster(50));
    rocket2.addThruster(new Thruster(50));
    rocket2.addThruster(new Thruster(30));
    rocket2.addThruster(new Thruster(10));
    
    
        const showRocket = <HTMLElement>document.getElementById('infoRocket');
        const elementRocket1: HTMLElement = document.createElement('div');
  //array with for of  
        let rockets = [rocket1, rocket2];
        for (let i of rockets) {
            console.log(i);
            elementRocket1.innerHTML += '<br> ROCKET ' + i.code +' :  ';
            showRocket.appendChild(elementRocket1);
            i.thrusters.forEach(Thruster => {  // forEach() method for every element of array
                elementRocket1.innerHTML += Thruster.power + '  ';
               showRocket.appendChild(elementRocket1);
            });
        
         }
    
        var button = <HTMLElement>document.getElementById("create-rocket");
        button.classList.add('hide');
    
    }   