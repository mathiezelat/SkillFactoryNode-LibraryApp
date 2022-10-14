// import {  Link } from "react-router-dom";



// const Login = () => (
//     <section>


//         <div className="">
//             <div className="form">
//                 <div className="title-create">
//                     <h1 className="title-primary">Login</h1>
//                 </div>
//                 <form>
//                     <div className="inputBox">
//                         <input type="text" placeholder="Email" />
//                     </div>
//                     <div className="inputBox">
//                         <input type="password" placeholder="Password" />
//                     </div>
//                     <div >
//                         <input  className="btn-create" type="submit" value="Login" />
//                     </div>
//                     <p className="forget">
//                         Have you forgotten your password?
//                         <Link to="/">Recover password</Link>
//                     </p>

//                     <p className="forget">
//                         You do not have an account?
//                     </p>  
//                     <Link to="/register" className="btn-create" >Create Account</Link>
                    
//                 </form>

//             </div>
//         </div>
//     </section>
// );

// export default Login;



import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from './ComponentInput.js';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import {
    Form, Label, ContainerTerms, CenteredButtonContainer, Button, SuccessMessage, ErrorMessage
} from '../elements/Forms';

const Login = () => {
    const [usuario, cambiarUsuario] = useState({ campo: '', valido: null });
    const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
    const [password, cambiarPassword] = useState({ campo: '', valido: null });
    const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
    const [formValido, cambiarFormValido] = useState(null);
    const [terminos, cambiarTerminos] = useState(false);


    const exprersiones = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, //letras, numeros, guion, guion_bajo.
        nombre: /^[a-zA-ZÀ-Ÿ\s]{1,40}$/, //letras y espacios, pueden llevar guion.
        password: /^.{4,12}$/,  //4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/   //7 a 14 numeros.
    }

    const onChangeTerminos = (e) => {
        cambiarTerminos(e.target.checked);
    }


    const onSubmit = (e) => {
        e.preventDefault();

        if (
            usuario.valido === 'true' &&
            nombre.valido === 'true' &&
            password.valido === 'true' &&
            correo.valido === 'true' &&
            terminos
            ){
                cambiarFormValido(true);
                cambiarUsuario({campo: '', valido: ''}); //reiniciamos los valores - formulario a vacio
                cambiarNombre({campo: '', valido: null}); //reiniciamos los valores - formulario a vacio
                cambiarPassword({campo: '', valido: null}); //reiniciamos los valores - formulario a vacio
                cambiarCorreo({campo: '', valido: null}); //reiniciamos los valores - formulario a vacio
        }   else {
            cambiarFormValido(false);
        }
    }


    return (
        <main className='contac'>
            <Form action="" onSubmit={onSubmit}>

                <Input
                    estado={usuario}
                    cambiarEstado={cambiarUsuario}
                    type="text"
                    label="User"
                    placeholder="John Doe"
                    name="usuario"
                    legendError="The user must be from 4 to 16 digits and can only contain numbers, letters and underscore."
                    regularPhrase={exprersiones.usuario}
                />

                <Input
                    estado={nombre}
                    cambiarEstado={cambiarNombre}
                    type="text"
                    label="Name"
                    placeholder="John Doe"
                    name="nombre"
                    legendError="The name must contain only letters and space."
                    regularPhrase={exprersiones.nombre}
                />

                <Input
                    estado={password}
                    cambiarEstado={cambiarPassword}
                    type="password"
                    label="Password"
                    name="password 1"
                    placeholder="***********"
                    legendError="The password must contain from 4 to 12 digits."
                    regularPhrase={exprersiones.password}
                />

                <Input
                    estado={correo}
                    cambiarEstado={cambiarCorreo}
                    type="email"
                    label="Email"
                    placeholder="john_Doe@gmail.com"
                    name="correo"
                    legendError="Email can only contain letters, numbers, periods, hyphens and underscores."
                    regularPhrase={exprersiones.correo}
                />

                <ContainerTerms>
                    <Label>
                        <input
                            type="checkbox"
                            name="terms"
                            id="terms"
                            checked={terminos}
                            onChange={onChangeTerminos}
                        />
                        I accept the terms and conditions
                    </Label>
                </ContainerTerms>
                {formValido === false && <ErrorMessage>
                    <p>
                        <FontAwesomeIcon icon={faExclamationTriangle} />
                        <b>Error:</b> Please fill in this field is required.
                    </p>
                </ErrorMessage>}
                <CenteredButtonContainer>
                    <Button type='submit'>Send</Button>
                    {formValido === true &&  <SuccessMessage>The form was sent successfully!</SuccessMessage>}
                </CenteredButtonContainer>
            </Form>
        </main>


    )

}

export default Login;
