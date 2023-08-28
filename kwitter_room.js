const firebaseConfig = {
  apiKey: "AIzaSyDpAZwDDKRdpyZH5_gdwQEtXJHAfmkNEiw",
  authDomain: "kwitter-fb831.firebaseapp.com",
  databaseURL: "https://kwitter-fb831-default-rtdb.firebaseio.com",
  projectId: "kwitter-fb831",
  storageBucket: "kwitter-fb831.appspot.com",
  messagingSenderId: "259175609386",
  appId: "1:259175609386:web:0b3b664c7cc81e38e77f53",
  measurementId: "G-ZJEW36Y72L"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
