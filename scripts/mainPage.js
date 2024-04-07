// Variables
const boy_names = ["Liam","Noah","Oliver","Adam"] // add more later
const girl_names = ["Leila","Astra","Sophie"] // add more later
const generate_button = document.getElementById("generateName")
var gender_selection = document.getElementById("gender").value
const displayName = document.getElementById("displayName").innerHTML

function generateName(){
    let gender_selection = document.getElementById("gender").value
    let firstLetterSelection = document.getElementById("firstLetter").value
    console.log(firstLetterSelection)
    if (gender_selection === "male"){
        for (num_names_boys in boy_names){
            console.log(boy_names[num_names_boys])
        }
    }else{
        for (num_names_girls in girl_names){
            console.log(girl_names[num_names_girls])
        }
    }
}

generate_button.addEventListener("click",generateName)
