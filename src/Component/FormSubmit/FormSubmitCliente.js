import React from "react";
import { FormSubmit } from "./FormSubmit";

function onSubmit(event) {
    if(validateForm()) {
        alert('Cadastro realizado com sucesso!');
        document.getElementById('company').value = '';
        document.getElementById('company_name').value = '';
        document.getElementById('company_email').value = '';
        document.getElementById('company_contact').value = '';
    }
}

function validateForm() {
    if(document.getElementById("company").value == "") {
        document.getElementById("company").style.borderColor = "red";
        alert('Você precisa informar uma Razão Social válida');
        return false;
    }
    if(document.getElementById("company_name").value == "") {
        document.getElementById("company_name").style.borderColor = "red";
        alert('Você precisa informar um Nome Fantasia válido');
        return false;
    }
    if(document.getElementById("company_email").value == "") {
        document.getElementById("company_email").style.borderColor = "red";
        alert('Você precisa informar um e-mail válido');
        return false;
    }
    if(document.getElementById("company_contact").value == "") {
        document.getElementById("company_contact").style.borderColor = "red";
        alert('Você precisa informar um responsável válido');
        return false;
    }
    return true;
}

function FormSubmitCliente({label}) {
    return (<div>
        <button className="btn-submit" onClick={(event) => onSubmit(event)}>{label}</button>
    </div>);
}

export default FormSubmit(FormSubmitCliente);


