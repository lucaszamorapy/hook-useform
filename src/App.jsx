import { useState } from "react";
import Input from './Form/Input';
import useForm from './Hooks/useForm';

const App = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm(); // No argument passed here
  const sobrenome = useForm(); // No argument passed here

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      setFormSubmitted(true);
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <Input label="Nome" id="nome" type="text" {...nome} />
          <Input label="Sobrenome" id="sobrenome" type="text" {...sobrenome} />
          <Input
            label="CEP"
            id="cep"
            type="text"
            placeholder="00000-000"
            {...cep}
          />
          <Input label="Email" id="email" type="email" {...email} />
          <div className="flex items-center justify-center">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg mt-5">Enviar</button>
          </div>
        </form>
        {formSubmitted && <p className="text-green-500">Formulário enviado com sucesso!</p>}
      </div>
    </>
  );
};

export default App;
