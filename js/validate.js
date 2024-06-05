const name = document.getElementById('name');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const contactForm = document.getElementById('contactForm');

const no_error= document.getElementById('no_error');

contactForm.addEventListener('submit',(e)=>
    {
        if(tel.value ==='' || tel.value == null || tel.value.length < 10 || tel.value.length >10 || isNaN(tel.value))
            {
                e.preventDefault();
                no_error.innerHTML = 'Enter a 10 valid digit mobile number';
            }
        else{
            no_error.innerHTML = '';
        }
    })