const form = document.querySelector('form');
form.addEventListener('input', (event)=>{
    let formData = new FormData(form);
    console.table(Object.fromEntries(formData))
})