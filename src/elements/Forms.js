import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const colors = {
	borde: '#0075FF',
	error: '#bb2929',
	exito: '#1ed12d',
}

const Form = styled.form`
	display: grid;
	margin-left: 0.5rem;
	margin-right: 0.5rem;
	grid-template-columns: 1fr 1fr;
	gap: 20px;

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`

const Label = styled.label`
	display: block;
	font-weight: 700;
	color: #000;
	padding: 10px;
	min-height: 40px;
	cursor: pointer;

	${props =>
		props.valido === 'false' &&
		css`
			color: ${colors.error};
		`}
`

const GroupInput = styled.div`
	position: relative;
	z-index: 90;
`

const Input = styled.input`
	width: 100%;
	background: #ccc;
	border-radius: 3px;
	height: 45px;
	line-height: 45px;
	padding: 0 40px 0 10px;
	transition: 0.3s ease all;
	border: 3px solid transparent;

	&:focus {
		border: 3px solid ${colors.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
	}

	${props =>
		props.valido === 'true' &&
		css`
			border: 3px solid transparent;
		`}

	${props =>
		props.valido === 'false' &&
		css`
			border: 3px solid ${colors.error} !important;
		`}
`

const LegendError = styled.p`
	font-size: 12px;
	margin-bottom: 0;
	color: ${colors.error};
	display: none;

	${props =>
		props.valido === 'true' &&
		css`
			display: none;
		`}

	${props =>
		props.valido === 'false' &&
		css`
			display: block;
		`}
`

const IconValidation = styled(FontAwesomeIcon)`
	position: absolute;
	right: 10px;
	bottom: 14px;
	z-index: 100;
	font-size: 16px;
	opacity: 0;

	${props =>
		props.valido === 'false' &&
		css`
			opacity: 1;
			color: ${colors.error};
		`}

	${props =>
		props.valido === 'true' &&
		css`
			opacity: 1;
			color: ${colors.exito};
		`}
`

const ContainerTerms = styled.div`
	grid-column: span 2;
	color: #000;

	input {
		margin-right: 10px;
	}

	@media (max-width: 800px) {
		grid-column: span 1;
	}
`

const CenteredButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	grid-column: span 2;

	@media (max-width: 800px) {
		grid-column: span 1;
	}
`

const Button = styled.button`
	height: 45px;
	line-height: 45px;
	width: 30%;
	background: green;
	color: #fff;
	font-weight: bold;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	transition: 0.1s ease all;

	&:hover {
		box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
	}
`

const SuccessMessage = styled.p`
	font-size: 14px;
	color: ${colors.exito};
`

const ErrorMessage = styled.div`
	height: 45px;
	line-height: 45px;
	background: #f66060;
	padding: 0px 15px;
	border-radius: 3px;
	grid-column: span 2;
	p {
		margin: 0;
	}
	b {
		margin-left: 10px;
	}
`

export {
	Form,
	Label,
	GroupInput,
	Input,
	LegendError,
	IconValidation,
	ContainerTerms,
	CenteredButtonContainer,
	Button,
	SuccessMessage,
	ErrorMessage,
}
