const formDOM = document.forms[0];
const usernameOrEmailDOM = document.getElementById('username_or_email');
const passwordDOM = document.getElementById('password');

if (formDOM) {
    formDOM.addEventListener('submit', (e) => {
        e.preventDefault();

        const data = {
            usernameOrEmail: usernameOrEmailDOM.value,
            password: passwordDOM.value,
        };

        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // ir virsutinio sukurto objecto value. 
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success' && data.action === 'redirect') {
                    location.href = data.href;
                }
            })
            .catch(console.error);
    });
}
/* Paprasta uzklausa. 
fetch('https://api.example.com/books')  
  .then(response => response.json())  // Konvertuoja atsakymą į JSON  
  .then(data => console.log(data))   // Spausdina gautus duomenis  
  .catch(error => console.error('Klaida:', error)); // Sugaudo klaidas*/

/*POST užklausos pavyzdys (siunčiam duomenis):
fetch('https://api.example.com/books', {  
  method: 'POST',  
  headers: {  
    'Content-Type': 'application/json',  
  },  
  body: JSON.stringify({ title: "Nauja knyga", author: "Jonas" })  
})  
.then(response => response.json())  
.then(data => console.log('Pavyko:', data))  
.catch(error => console.error('Klaida:', error));  */