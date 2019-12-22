var Tutorial = require('./tutorial.js');

exports.noreTutorial = function(){
    console.log("T2");

    this.wywolanie = function(){
    
        var calling = Tutorial;
        calling.tutorial()
    }
}