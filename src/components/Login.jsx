import { Link } from 'react-router-dom'

const LogIn = () => (
	<section>
		<div className="">
			<div className="form">
				<div className="title-create">
					<h1 className="title-primary">Login</h1>
				</div>
				<form>
					<div className="inputBox">
						<input type="text" placeholder="Email" />
					</div>
					<div className="inputBox">
						<input type="password" placeholder="Password" />
					</div>
					<div>
						<input
							className="btn-create"
							type="submit"
							value="Login"
						/>
					</div>
					<p className="forget">
						Have you forgotten your password?
						<Link to="/">Recover password</Link>
					</p>

					<p className="forget">You do not have an account?</p>
					<Link to="/register" className="btn-create">
						Create Account
					</Link>
				</form>
			</div>
		</div>
	</section>
)

export default LogIn
