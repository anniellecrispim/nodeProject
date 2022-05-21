import Button from './Button'
import TextBox from './TextBox'
import Password from './Password'
import './style.css'

function Forms(props) {
    return (
        <form>
            <TextBox TextoDeInput='Nome'></TextBox>
            <TextBox TextoDeInput='Sobrenome'></TextBox>
            <TextBox TextoDeInput='E-mail'></TextBox>
            <Password Senha='Senha'></Password>
            <Button Botão='Enviar' Mensagem="Dados Enviados!"></Button>
            <Button Botão='Cancelar' Mensagem="Envio Cancelado!"></Button>
        </form>
    );
}

export default Forms;