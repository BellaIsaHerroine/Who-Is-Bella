let soilWoman = document.getElementById("bella")
const imgElement = document.querySelector(".img");
const text = document.getElementById("text")



function myFunction(){
    
    const bella =soilWoman.value.trim().toLowerCase();

    if(bella === "soil woman"){
       imgElement.src = "images/iamakebda.jpg"  
       text.textContent = "საბა შენით იამაყებდა!" 
       text.style.fontSize = "28px"
    } else{
       imgElement.src = "images/mogechveneboda.jpg"
       text.textContent = "მოგეჩვენებოდა"
    }

}