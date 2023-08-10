// CKEDITOR
CKEDITOR.replace('textarea');

let contentCopy = document.getElementById("editor-content-copy")
let postButton = document.getElementById("postButton")

postButton.addEventListener('click', () => {
    //contentCopy.innerHTML = CKEDITOR.instances.editor1.document.getBody().getText(); // For plain text
    contentCopy.innerHTML = CKEDITOR.instances.textarea.getData(); // For formatted text

    let btn = document.createElement("button")
    btn.innerText = "delete"
    contentCopy.appendChild(btn)


    function btnRemove() {
        contentCopy.remove()
    }
    btn.addEventListener("click", btnRemove)

});

// LogIn

function LogIn(params) {
    let name = document.getElementById("name")
    let pass = document.getElementById("pass")
    let x1 = document.getElementById("name").value;
  if (x1 == "") {
      alert("some inputs must be filled out");
      return false;
    }
  
  let x3 = document.getElementById("pass").value;
  if (x3 == "") {
    alert("password must be filled out");
    return false;
  }


  let usernames=document.getElementById("name").value;
  let passwords=document.getElementById("pass").value;
  
      if(usernames == "user1" && passwords == "123456")
        {
          
          let showName = document.getElementById("user-name")

    showName.innerText = "hello " + name.value
    localStorage.setItem("name", name.value)
    location.href = "./bloog.html"
        }
  else{
    alert("Username or Password wrong!");
    return false
  }
    }


    










// Bloog

let userName = document.getElementById("user-name")
userName.innerText = localStorage.getItem("name")
