const BACKEND_URL = "http://127.0.0.1:8000";

async function getMessage() {
    const res = await fetch(`${BACKEND_URL}/api/`);
    const data = await res.json();

    document.getElementById("response").innerText = data.message;
}

async function greetUser() {
    const name = document.getElementById("nameInput").value;

    const res = await fetch(`${BACKEND_URL}/api/greet/?name=${name}`);
    const data = await res.json();

    document.getElementById("greetResponse").innerText = data.message;
}
