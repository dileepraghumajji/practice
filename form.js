function validateForm() {
    var x = document.getElementById("uname").value.length;
    if (x == " " ) {
      alert("Name must be filled out");
      
    }else if (x > 10){
        alert("name must not exceed more than ten letters");
        return false;
    }

  }