function greet(firstName, lastName) {
    console.log(`Welcome Monkey ${firstName} ${lastName}`);
}

function choose(choice) {
    const para = document.getElementById("para");
    const paratruth = document.getElementById("paratruth");
    let truth = [
        "Who is your crush?",
        "What is your favorite food?",
        "What is your favorite color?",
        "What is your favorite movie?",
        "Who was/is your first boy/girlfriend?",
        "What is the weirdest thing you've ever eaten?",
        "What is the most interesting thing you have ever done?",
        "What's your plan for surviving a zombie/alien invasion?",
        "What is your favorite book?",
        "What is your favorite song?",
        "What is your favorite TV show?",
        "What's the dumbest thing you've done recently?",
        "Would you like to be immortal?",
        "If you had one wish, and you cannot wish for more wishes, what would you wish for?",
    ];

    let easy_dare = [
        "Slap your face, hard enough to split an atom",
        "Be a chicken",
        "Be a monkey",
        "Send a pic of your pet",
        "Send a pic of where you are",
        "Wear socks on your hands for the next 3 rounds.",
        "Make a funny face and keep it that way until your next turn.",
        "Slap the first person in your DM's in the face",
    ];

    let medium_dare = [
        "Propose to someone in the group",
        "Go to any media platform, then Tell the 3rd person in your DMs that you love them",
        "Let the group look through your phone for 30 seconds.",
        "Imitate your least favorite celebrity.",
        "Eat a piece of paper",
        "Spam the fifth person in your DMs for 20 seconds of keyboard spam",
        "Act like a chicken until your next turn",
        "Show the last five people you texted and what the messages said.",
        "Fly to russia, by a bottle of vodka, and drink it"
    ];

    let hard_dare = [
        "Jump off a cliff",
        "Say 'I love you' or 'I have always had a crush on you' to any girl/boy in the group",
        "Do 10 pushups and shout 'I love [a player's name]!' after each one.",
        "Try to juggle 3 things of the group's choice.",
        "Pretend to be a food item of your choice.",
        "Show the group your search history for the past three days",
        "Commit murder",
        "Commit Arson"
    ];

    let question;
    if (choice === "truth") {
        location.href = "truth.html";
    } else if (choice === "dare") {
        location.href = "dare.html";
    } else if (choice === "random") {
        if (Math.random() < 0.5) {
            location.href = "truth.html";
        } else {
            location.href = "dare.html";
        }
    } else if (choice === "easy") {
        question = easy_dare[Math.floor(Math.random() * easy_dare.length)];
        // console.log(question);
        para.textContent = question;
    } else if (choice === "medium") {
        question = medium_dare[Math.floor(Math.random() * medium_dare.length)];
        // console.log(question);
        para.textContent = question;
    } else if (choice === "hard") {
        question = hard_dare[Math.floor(Math.random() * hard_dare.length)];
        // console.log(question);
        para.textContent = question;
        
    } else if (choice === "truthgo") {
        question = truth[Math.floor(Math.random() * truth.length)];
        paratruth.textContent = question;
    }
}

function handleInput() {
    const userInput = document.getElementById("userInput").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    greet(firstName, lastName);
    console.log(userInput); // Print the current input to the console

    const start = document.getElementById("start");
    start.addEventListener("mouseleave", function () {
        start.textContent = "Start";
        start.style.backgroundColor = "lightblue";
    });

    if (userInput === "Hi") {
        console.log("User said exactly: " + userInput);
    } else {
        console.log("User did not say the expected phrase.");
    }
}
// function Signup() {
//     // This array is to store the data of the users and in the log in function we are going to check if they exist here
//     const users = [
//         {firstname: "Ethan", lastname: "Fan", password: "Ethandontknowwhattochoose", username: "heheha", ssn: "123 456 789", ccn: "1234 5678 9012 3456"},
//         {firstname: "Fozhan", lastname: "Baba", password: "Foojboo", username: "foojboo", ssn: "123 456 789", ccn: "1234 5678 9012 3456"},
//     ];
//     const firstname = document.getElementById("signUpFirstName").value;
//     const lastname = document.getElementById("signUpLastName").value;
//     const username = document.getElementById("signUpUsername").value;
//     const social = document.getElementById("signUpSocialSecurity").value;
//     const credit = document.getElementById("signUpCreditCard").value;

// }

// // Create an object to store user data
// let users = {};

// // Function to handle the sign-up process
// function handleSignUp(event) {
//     event.preventDefault();

//     const firstname = document.getElementById("signUpFirstName").value;
//     const lastname = document.getElementById("signUpLastName").value;
//     const username = document.getElementById("signUpUsername").value;
//     const password = document.getElementById("signUpPassword").value;
//     const social = document.getElementById("signUpSocialSecurity").value;
//     const credit = document.getElementById("signUpCreditCard").value;

//     if (username in users) {
//         alert("Username already exists. Please choose a different username.");
//         return;
//     }

//     // Store the user data in the users object
//     users[username] = {
//         firstname: firstname,
//         lastname: lastname,
//         password: password,
//         social: social,
//         credit: credit
//     };

//     alert("Sign up successful!");

//     // Optionally, redirect to login page after successful sign up
//     window.location.href = "login.html";
// }

// // Function to handle the login process
// function handleLogin(event) {
//     event.preventDefault();

//     console.log(users);
    
//     const username = document.getElementById("loginUsername").value;
//     const password = document.getElementById("loginPassword").value;

//     if (username in users && users[username].password === password) {
//         alert("Login successful!");
//         // Redirect to the home page or another page after successful login
//         window.location.href = "index.html";
//     } else {
//         alert("Invalid username or password. Please try again.");
//     }
// }
// const interval = setInterval(function () {
//     console.log("Click me!");
//   }, 500);
  
//   setTimeout(function () {
//     clearInterval(interval);
//   }, 5000);
// // Attach the functions to the form submit events
// document.getElementById("signUpForm").addEventListener("submit", handleSignUp);
// document.getElementById("loginForm").addEventListener("submit", handleLogin);


const form = document.querySelector("form");
const input = document.querySelector("input");
const ol = document.querySelector("ol");

let editing = false;
let editingItem;
let list = [];

if (localStorage.getItem("list") != null) {
  list = JSON.parse(localStorage.getItem("list"));

  for (let i = 0; i < list.length; i++) {
    ol.innerHTML += `
  <li>
    <p>${list[i]}</p>
    <div>
      <i class="fa-solid fa-pen-to-square" onClick="editItem(this)"></i>
      <i class="fa-solid fa-trash" onClick="deleteItem(this)"></i>
    </div>
  </li>`;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  if (!editing) {
    ol.innerHTML += `
  <li>
    <p>${username}</p>
    <div>
      <i class="fa-solid fa-pen-to-square" onClick="editItem(this)"></i>
      <i class="fa-solid fa-trash" onClick="deleteItem(this)"></i>
    </div>
  </li>`;
    list.push(username);
    localStorage.setItem("list", JSON.stringify(list));
    username = "";
  } else {
    editingItem.textContent = username;
    username = "";
    editing = false;
    list = Array.from(document.querySelectorAll("li p")).map(
      (p) => p.textContent
    );
    localStorage.setItem("list", JSON.stringify(list));
  }
});

// const editItem = (item) => {
//   editing = true;
//   editingItem = item.parentElement.previousElementSibling;
//   username = editingItem.textContent;
// };

// const deleteItem = (item) => {
//   item.parentElement.parentElement.remove();
//   list = Array.from(document.querySelectorAll("li p")).map(
//     (p) => p.textContent
//   );
//   localStorage.setItem("list", JSON.stringify(list));
// };