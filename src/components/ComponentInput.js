import React from 'react'
import {
	Input,
	Label,
	GroupInput,
	LegendError,
	IconValidation,
} from '../elements/Forms'
import { faCircleCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const ComponentInput = ({
	estado,
	cambiarEstado,
	label,
	placeholder,
	type,
	name,
	legendError,
	regularPhrase,
	funcion,
}) => {
	const onChange = e => {
		cambiarEstado({ ...estado, campo: e.target.value })
	}

	const validacion = () => {
		if (regularPhrase) {
			if (regularPhrase.test(estado.campo)) {
				cambiarEstado({ ...estado, valido: 'true' })
			} else {
				cambiarEstado({ ...estado, valido: 'false' })
			}
		}
		if (funcion) {
			funcion()
		}
	}

	return (
		<div>
			<Label htmlFor={name} valido={estado.valido}>
				{label}
			</Label>
			<GroupInput>
				<Input
					type={type}
					placeholder={placeholder}
					id={name}
					value={estado.campo}
					onChange={onChange}
					onKeyUp={validacion}
					onBlur={validacion}
					valido={estado.valido}
				/>
				<IconValidation
					icon={
						estado.valido === 'true' ? faCircleCheck : faTimesCircle
					}
					valido={estado.valido}
				/>
			</GroupInput>
			<LegendError valido={estado.valido}>{legendError}</LegendError>
		</div>
	)
}

export default ComponentInput
