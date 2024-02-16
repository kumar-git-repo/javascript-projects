//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.




//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

class CrewCandidate {
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore){
        this.scores.push(newScore)
    }

    average(){
        let sum = 0
        for (let i=0; i<this.scores.length; i++) {
            sum = sum+this.scores[i];  
        }
        let average = sum / this.scores.length;
        //return average;
       return Math.round(average*10) /10;
    }

    status(){
        let candidateStaus='';

        if (this.average()>=90){
            candidateStaus = 'Accepted';
            return candidateStaus;
        }
        else if (this.average() <90 && this.average()>=80){
            candidateStaus = 'Reserve';
            return candidateStaus;
        }
        else if (this.average() <80 && this.average()>=70){
            candidateStaus = 'Probationary';
            return candidateStaus;
        }
        else {
            candidateStaus = 'Rejected';
            return candidateStaus;
        }
    }

}


let bear = new CrewCandidate ('Bubba Bear', 135, [88, 85, 90]);
let dog = new CrewCandidate ('Merry Maltese', 1.5, [93, 88, 97]);
let aligator = new CrewCandidate ('Glad Gator', 225, [75, 78, 62]);

console.log(` ${dog.name} earned an average test score of ${dog.average()}% and has a status of ${dog.status()}.`);
console.log(` ${bear.name} earned an average test score of ${bear.average()}% and has a status of ${bear.status()}.`);
console.log(` ${aligator.name} earned an average test score of ${aligator.average()}% and has a status of ${aligator.status()}.`);