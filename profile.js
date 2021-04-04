var firebaseConfig = {
    apiKey: "AIzaSyDUUFpufiJrWNOsWSMuBGDM2tsbJDqledk",
    authDomain: "firebasics-b8c9b.firebaseapp.com",
    projectId: "firebasics-b8c9b",
    storageBucket: "firebasics-b8c9b.appspot.com",
    messagingSenderId: "970320590384",
    appId: "1:970320590384:web:b01434531c068fea515ff5",
    measurementId: "G-CXYXVPTN88"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();


   
    var docRef = db.collection("Students_Info").doc();
    
    docRef.get().then((doc) => {
        // if (doc.exists) {
            console.log("Document data:", doc.data());
            var firstName = doc.data().first_name;
            var middleName = doc.data().Middle_Name;
            var lastName = doc.data().Last_Name;
            var age = doc.data().age;
            var grade = doc.data().grade;
    
            document.getElementById('firstName').innerHTML = firstName;
            document.getElementById('middleName').innerHTML = middleName;
            document.getElementById('lastName').innerHTML = lastName;
            document.getElementById('age').innerHTML = age;
            document.getElementById('grade').innerHTML = grade;
        // } else {
        //     // doc.data() will be undefined in this case
        //     console.log("No such document!");
        // }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });


  