const form=document.querySelector(".popup__form"),inputName=document.getElementById("name"),inputEmail=document.getElementById("email"),inputTel=document.getElementById("tel"),inputsRequired=[inputName,inputEmail,inputTel];form.onsubmit=function(){inputEmail.value,inputTel.value;let e=Array.from(inputsRequired).filter((e=>""===e.value));return inputsRequired.forEach((e=>{""===e.value?(e.classList.add("error"),e.placeholder="Поле обязательно для заполнения"):(e.classList.remove("error"),e.placeholder=" ")})),0===e.length};