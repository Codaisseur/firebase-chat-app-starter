



//generate arguments for newMessage function
var userName = "testuser"
var text = document.getElementById('form').value
var button1 = document.getElementById("button1")

button1.onclick = ChatApp.newMessage(userName, text)
