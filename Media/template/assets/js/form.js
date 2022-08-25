function toggleButton(){
    let username = document.getElementById('username').value;
 
    if (username){
        document.getElementById('submitButton').disabled = false; 
    } else {
         document.getElementById('submitButton').disabled = true;
    }
}