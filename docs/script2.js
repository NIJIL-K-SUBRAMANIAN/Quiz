//question and answer array 
let qanda = [
    {
        qustion: "Which is the smallest planet within our solar system ?",
        a: "Mercury",
        b: "Earth",
        c: "Mars",
        d: "Jupiter",
        Answer: "blk1-a"
    },
    {
        qustion: "Which is the second smallest planet within our solar system ?",
        a: "Saturn",
        b: "Uranus",
        c: "Mars",
        d: "Earth",
        Answer: "blk2-c"
    },
    {
        qustion: "The moon called Titan orbits which planet ?",
        a: "Jupiter",
        b: "Saturn",
        c: "Neptune",
        d: "Mercury",
        Answer: "blk3-b"
    },
    {
        qustion: "Uranus has only been visited by what spacecraft ?",
        a: "Chandrayaan2",
        b: "Cartosat-2",
        c: "Resourcesat-2",
        d: "The Voyager 2",
        Answer: "blk4-d"
    },
    {
        qustion: "There have been more missions to this planet versus any other planet ?",
        a: "Neptune",
        b: "Uranus",
        c: "Mars",
        d: "Saturn",
        Answer: "blk5-c"
    }

]




//conneting html elemnts to js
//first block
let q1 = document.querySelector('.question1')
let q1a = document.querySelector('.q1a')
let q1b = document.querySelector('.q1b')
let q1c = document.querySelector('.q1c')
let q1d = document.querySelector('.q1d')

//second block
let q2 = document.querySelector('.question2')
let q2a = document.querySelector('.q2a')
let q2b = document.querySelector('.q2b')
let q2c = document.querySelector('.q2c')
let q2d = document.querySelector('.q2c')

//third block
let q3 = document.querySelector('.question3')
let q3a = document.querySelector('.q3a')
let q3b = document.querySelector('.q3b')
let q3c = document.querySelector('.q3c')
let q3d = document.querySelector('.q3d')

//fourth block
let q4 = document.querySelector('.question4')
let q4a = document.querySelector('.q4a')
let q4b = document.querySelector('.q4b')
let q4c = document.querySelector('.q4c')
let q4d = document.querySelector('.q4d')

//fifth block
let q5 = document.querySelector('.question5')
let q5a = document.querySelector('.q5a')
let q5b = document.querySelector('.q5b')
let q5c = document.querySelector('.q5c')
let q5d = document.querySelector('.q5d')

//button
let sbtbtn = document.getElementById('sbt-btn')
let qu1 = document.getElementsByName('blk1')
let Q1 = document.querySelectorAll('.q1')

let qu2 = document.getElementsByName('blk2')
let Q2 = document.querySelectorAll('.q2')

let qu3 = document.getElementsByName('blk3')
let Q3 = document.querySelectorAll('.q3') 

let qu4 = document.getElementsByName('blk4')
let Q4 = document.querySelectorAll('.q4')

let qu5 = document.getElementsByName('blk5')
let Q5 = document.querySelectorAll('.q5')

//other 
let score
let popUpAns = document.querySelector('.popUpAns')






//data display
function displayData() {

    q1.innerHTML = qanda[0].qustion
    q1a.innerHTML = qanda[0].a
    q1b.innerHTML = qanda[0].b
    q1c.innerHTML = qanda[0].c
    q1d.innerHTML = qanda[0].d

    //block 2
    q2.innerHTML = qanda[1].qustion
    q2a.innerHTML = qanda[1].a
    q2b.innerHTML = qanda[1].b
    q2c.innerHTML = qanda[1].c
    q2d.innerHTM = qanda[1].d

    //block 3 
    q3.innerHTML = qanda[2].qustion
    q3a.innerHTML = qanda[2].a
    q3b.innerHTML = qanda[2].b
    q3c.innerHTML = qanda[2].c
    q3d.innerHTML = qanda[2].d

    //block 4
    q4.innerHTML = qanda[3].qustion
    q4a.innerHTML = qanda[3].a
    q4b.innerHTML = qanda[3].b
    q4c.innerHTML = qanda[3].c
    q4d.innerHTML = qanda[3].d

    //block 5
    q5.innerHTML = qanda[4].qustion
    q5a.innerHTML = qanda[4].a
    q5b.innerHTML = qanda[4].b
    q5c.innerHTML = qanda[4].c
    q5d.innerHTML = qanda[4].d
}


//button click function 
function btnclick() {
    sbtbtn.addEventListener("click", function () {
 let Canswer = getAnswer()
 let originalAns = ["blk1-a","blk2-c","blk3-b","blk4-d","blk5-c"]
let i
let flag =0
 for (i=0;i<Canswer.length;i++){
    
    if(Canswer[i]==originalAns[i]){
     flag++
    }else{
        flag=flag+0
    }
 }
console.log("flag:",flag)
popUpAns.innerHTML = flag+"/"+"5"
})
}


function getAnswer() {
    let Canswer=[]
    
    qu1.forEach(function (Q1) {
        if (Q1.checked === true) {
            Canswer[0] = Q1.id
        }
    })

    qu2.forEach(function(Q2){
    
        if(Q2.checked===true){
            Canswer[1]=Q2.id
        }
    })
    qu3.forEach(function(Q3){
    
        if(Q3.checked===true){
            Canswer[2]=Q3.id
        }
    })
    qu4.forEach(function(Q4){
    
        if(Q4.checked===true){
            Canswer[3]=Q4.id
        }
    })
    qu5.forEach(function(Q5){
    
        if(Q5.checked===true){
            Canswer[4]=Q5.id
        }
    })
console.log(Canswer)
 return Canswer
}


//function invoke
displayData()
btnclick()