import './style.css'

function Button(props) {
    return (
      <button onClick={()=>alert(props.Mensagem)}>{props.Botão}</button>
    );
  }
  
  export default Button;