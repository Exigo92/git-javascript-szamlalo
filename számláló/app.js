//Alapérték felvétele
let count = 0;

//Gombok és egyéb elemek eltárolása változóba 
const value = document.getElementById("value");
//const decrease = document.getElementById("decrease");
//const reset = document.getElementById("reset");
//const inscrease = document.getElementById("increase");

const btns = document.querySelectorAll(".btn");


//Ciklussal végiglépkedek az eltárolt gombokon
btns.forEach((btn)=>{

    btn.addEventListener("click", (e)=>{

        const style = e.currentTarget.classList;

        if(style.contains("decrease")){

            count--;
        }
        else if(style.contains("increase")){

            count ++;
        }
        else{

            count = 0;
        }

        if(count > 0){
            value.style.color = "green";
        }
        else if(count < 0){

            value.style.color = "red";
        }
        else{
            value.style.color = "black";
        }


        value.textContent = count;
    })
})






































/*Egyszerű módszer
inscrease.addEventListener("click" , ()=>{

    //Növelem az alapértékem egyel
    count++;

    //Megnézem hogy az alapérték nagyob-e mint 0
    if(count > 0){

        //Ha nagyobb akkor hozzáadok egy betűszínt
        value.style.color = "green";
    }

    value.textContent = count;

})

decrease.addEventListener("click" , ()=>{

    //Csökkentem az alapértékem egyel
    count--;

    //Megnézem hogy az alapérték nagyob-e mint 0
    if(count < 0){

        //Ha nagyobb akkor hozzáadok egy betűszínt
        value.style.color = "red";
    }

    value.textContent = count;

})


reset.addEventListener("click" , ()=>{

    //Az alapértéket visszaállítjuk 0 ra

    count = 0;
    value.style.color = "black";

    value.textContent = count;

})
*/