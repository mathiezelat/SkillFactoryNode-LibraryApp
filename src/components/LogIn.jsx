import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from './ComponentInput.js'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import {
	Form,
	CenteredButtonContainer,
	Button,
	SuccessMessage,
	ErrorMessage,
} from '../elements/Forms'

const LogIn = () => {
	const [usuario, cambiarUsuario] = useState({ campo: '', valido: null })
	const [password, cambiarPassword] = useState({ campo: '', valido: null })
	const [correo, cambiarCorreo] = useState({ campo: '', valido: null })
	const [formValido, cambiarFormValido] = useState(null)

	const exprersiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/, //letras, numeros, guion, guion_bajo.
		password: /^.{4,12}$/, //4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	}




	const onSubmit = e => {
		e.preventDefault()

		if (
			usuario.valido === 'true' &&
			password.valido === 'true' &&
			correo.valido === 'true' 
		) {
			cambiarFormValido(true)
			cambiarUsuario({ campo: '', valido: '' }) //reiniciamos los valores - formulario a vacio
			cambiarPassword({ campo: '', valido: null }) //reiniciamos los valores - formulario a vacio
			cambiarCorreo({ campo: '', valido: null }) //reiniciamos los valores - formulario a vacio
		} else {
			cambiarFormValido(false)
		}
	}

	return (
		<main className="contac">
			<Form action="" onSubmit={onSubmit}>


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


				{formValido === false && (
					<ErrorMessage>
						<p>
							<FontAwesomeIcon icon={faExclamationTriangle} />
							<b>Error:</b> Please fill in this field is required.
						</p>
					</ErrorMessage>
				)}
				<CenteredButtonContainer>
					<Button type="submit">Send</Button>
					{formValido === true && (
						<SuccessMessage>
							The form was sent successfully!
						</SuccessMessage>
					)}
				</CenteredButtonContainer>
			</Form>
		</main>
	)
}

export default LogIn
