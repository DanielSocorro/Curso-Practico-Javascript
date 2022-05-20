/* const bunny = {
    name: "gentleman",
    tasks: ["speak", "learn", "teach"],
    showTasks: function(){
        this.tasks.forEach(function (task) {
            console.log(this.name + "wants to : " + task); // no se llama al name
        });
    },
};

bunny.showTasks(); */

/* for (var i = 1; i <=9; i++) { // el var se reemplaza por let 
    setTimeout(() => {           // ya que let esta ligado al scope
        console.log(i);          // sino seria 10 10 10 10 10 10 10 
    }, 10);                       // y con let si hace de 1 al 9
} */   

const persona = {
    name: "Alan",
    lastName: "brgalia",
};

persona.name = 'Jorge';
console.log(persona);