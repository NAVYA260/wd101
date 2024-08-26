document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const isValidAge = age >= 18 && age <= 55;
    if (!isValidAge) {
        alert('You must be between 18 and 55 years old.');
        return;
    }
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dobValue = document.getElementById('dob').value;
    const termsAccepted = document.getElementById('terms').checked ? 'Yes' : 'No';
    const user = { name, email, password, dob: dobValue, terms: termsAccepted };
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    updateTable();
    document.getElementById('registrationForm').reset();
});
function updateTable() {
    const tableBody = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; 
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach(user => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = user.name;
        row.insertCell(1).textContent = user.email;
        row.insertCell(2).textContent = user.password;
        row.insertCell(3).textContent = user.dob;
        row.insertCell(4).textContent = user.terms;
    });
}
updateTable();
