console.log("script started"); 

function processForm(event) {
    console.log("click");
    event.preventDefault(); // prevent default form submission
    
    //Get name input element
    let fNameInput = document.getElementById("Firstname");
    let  firsrName = fNameInput.value;
    console.log(firsrName);


}