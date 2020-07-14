const scriptURL = 'https://script.google.com/macros/s/AKfycbz1scFlsq-u3TX5VuWVZ2Y9zl1l93W57OyBxZvu5e3XIwDNVB4/exec'
const form = document.forms['form']

form.addEventListener('submit', e => {
   e.preventDefault()
   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
   .then (response => console.log("Success!", response))
   .catch(error => console.error('Error!', error.message))
})
