import React from "react";
import { FormSubmit } from "./FormSubmit";

function onSubmit(event) {
    if(validateForm()) {
        alert('Cadastro realizado com sucesso!');
        document.getElementById('fullname').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mypass').value = '';
        document.getElementById('mypass_confirm').value = '';
    }
}

function validateForm() {
    if(document.getElementById("fullname").value == "") {
        document.getElementById("fullname").style.borderColor = "red";
        alert('Você precisa informar uma nome completo válido');
        return false;
    }
    if(document.getElementById("email").value == "") {
        document.getElementById("email").style.borderColor = "red";
        alert('Você precisa informar um e-mail válido');
        return false;
    }
    if(document.getElementById("mypass").value == "") {
        document.getElementById("mypass").style.borderColor = "red";
        alert('Você precisa informar uma senha válida');
        return false;
    }
    if(document.getElementById("mypass_confirm").value == "") {
        document.getElementById("mypass_confirm").style.borderColor = "red";
        alert('Você precisa informar uma senha válida');
        return false;
    }
    if(document.getElementById("mypass").value != document.getElementById("mypass_confirm").value) {
        document.getElementById("mypass").style.borderColor = "red";
        document.getElementById("mypass_confirm").style.borderColor = "red";
        alert('A senha e a confirmação de senha devem ser iguais!');
        return false;
    }
    return true;
}

function FormSubmitUsuario({label}) {
    return (<div>
        <button className="btn-submit" onClick={(event) => onSubmit(event)}>{label}</button>
    </div>);
}

export default FormSubmit(FormSubmitUsuario);


