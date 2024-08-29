import logo from './logo.svg';
import './App.css';
import FormButton from './Component/FormButton/FormButton';
import FormLabel from './Component/FormLabel/FormLabel';
import FormText from './Component/FormText/FormText';
import FormPassword from './Component/FormPassword/FormPassword';
import FormSubmitUsuario from './Component/FormSubmit/FormSubmitUsuario';
import FormSubmitCliente from './Component/FormSubmit/FormSubmitCliente';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className="box-button"><FormButton text="Cadastro Cliente" target="cliente"></FormButton></div>
        <div className="box-button"><FormButton text="Cadastro Usuário" target="usuario"></FormButton></div>
        <div className="control-form">
            <div id="boxCliente" className="box-container">
              <h2>Cadastro de Cliente</h2>
              <div className="control-row">
                <div className="control-label">
                  <FormLabel name="company" text="Razão Social"/>
                </div>
                <div className="control-input">
                  <FormText name="company" placeholder="Razão Social"/>
                </div>
              </div>
              <div className="control-row">
                <div className="control-label">
                  <FormLabel name="company_name" text="Nome Fantasia"/>
                </div>
                <div className="control-input">
                  <FormText name="company_name" placeholder="Nome Fantasia"/>
                </div>
              </div>
              <div className="control-row">
                <div className="control-label">
                  <FormLabel name="company_email" text="E-mail"/>
                </div>
                <div className="control-input">
                  <FormText name="company_email" placeholder="E-mail"/>
                </div>
              </div>
              <div className="control-row">
                <div className="control-label">
                  <FormLabel name="company_contact" text="Responsável"/>
                </div>
                <div className="control-input">
                  <FormText name="company_contact" placeholder="Responsável"/>
                </div>
              </div>
              <div className="control-row">
                <FormSubmitCliente label="Cadastro de Cliente"/>
              </div>
            </div>
            <div id="boxUsuario" className="box-container">  
              <h2>Cadastro de Usuário</h2>
              <div className="control-row">
                <div className="control-label">
                  <FormLabel name="fullname" text="Nome Completo"/>
                </div>
                <div className="control-input">
                  <FormText name="fullname" placeholder="Nome Completo"/>
                </div>
              </div>
              <div className="control-row">
                <div className="control-label">
                  <FormLabel name="email" text="E-mail"/>
                </div>
                <div className="control-input">
                  <FormText name="email" placeholder="E-mail"/>
                </div>
              </div>
              <div className="control-row">
                <div className="control-label">
                  <FormLabel name="mypass" text="Senha"/>
                </div>
                <div className="control-input">
                  <FormPassword name="mypass"/>
                </div>
              </div>
              <div className="control-row">
                <div className="control-label">
                  <FormLabel name="fullname" text="Confirmação Senha"/>
                </div>
                <div className="control-input">
                  <FormPassword name="mypass_confirm"/>
                </div>
              </div>
              <div className="control-row">
                <FormSubmitUsuario label="Cadastro de Usuário"/>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;

