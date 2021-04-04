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

const admn = document.getElementById('admn');
const firstName = document.getElementById('firstName');
const middleName = document.getElementById('middleName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const grade = document.getElementById('grade');
const photo = document.getElementById('photo');


const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');
const updateBtn = document.getElementById('updateBtn');
const readBtn = document.getElementById('readBtn');

const studentsCollection = db.collection('Student_Info');

addBtn.addEventListener('click', (e) =>{
    e.preventDefault;

    const ID =  studentsCollection.doc(admn.value);
    
    ID.set({

        first_name: firstName.value,
        middle_name: middleName.value,
        last_name: lastName.value,
        age: age.value,
        grade: grade.value

    }).then(() =>{
       console.log('Data has been written successfully');

    }).catch((error) =>{
        console.error(error);
    });
});

addBtn.addEventListener('click', e =>{
    e.preventDefault();

    studentsCollection.doc().set({
        First_name: firstName.value,
        Middle_Name: middleName.value,
        Last_Name: lastName.value,
        age: age.value,
        student_photo : photo.value,
        grade: grade.value

    }).then(() =>{
        window.location.href = "profile.html";

    }).catch(error =>{
        console.log(error);
    });
});


updateBtn.addEventListener('click', e =>{
    e.preventDefault;

    studentsCollection.doc(admn.value).update({
        age: age.value

    }).then(() =>{
        console.log('data has been updated sucessfully')
    }).catch(error =>{
        console.log(error);
    })



});

removeBtn.addEventListener('click', e =>{
    e.preventDefault;

    studentsCollection.doc(admn.value).delete();

});

readBtn.addEventListener('click', e=>{
    e.preventDefault();

    studentsCollection.doc(admn.value).get()
    .then((user) =>{
        if(user.exists){
            console.log(user.data());
        }else{
            console.log('user does not exists');
        }
        
    }).catch(error =>{
        console.log(error);
    })

})


