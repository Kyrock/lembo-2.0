
document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('.form-container');

    form.addEventListener('submit', async (event)=>{
    event.preventDefault();
    const userName = document.querySelector('.register__input--name')
    const userLastName = document.querySelector('.register__input--lastname')
    const userId = document.querySelector('.register__input--id')
    const userPhone = document.querySelector('.register__input--phone')

    const formData = {
        name: userName ? userName.value: '',
        lastname: userLastName ? userLastName.value: '',
        ID: userId ? userId.value: '',
        phone: userPhone ? userPhone.value: ''
    
    };

    try{
        const response = await fetch('http://localhost:3306',{
            method: 'POST',
            //Se esta indicando que el cuerpo de la solicitud esta en formato JSON
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(formData)
        });
            if(!response.ok){
            throw new Error('Error en la conexion con el servidor')
        }
            const result=await response.json();
            console.log('Usuario agregado:', result);

            form.reset();
        
        }catch(error){
        console.log('Error', error);
        }
    });
});