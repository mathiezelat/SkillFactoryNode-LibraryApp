const Footer = () => {
	const team = [
		{
			name: 'Mathías Ezequiel Latrónico',
			href: 'https://github.com/mathiezelat',
		},
		{ name: 'Rolando Duarte', href: 'https://github.com/Rolando-Du' },
		{
			name: 'Emmanuel Enrique Mombelli',
			href: 'https://github.com/emma-25',
		},
		{ name: 'Tomás Napolitano', href: '/create-book' },
	]

	return (
		<footer className="pt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="flex sm:justify-center items-center py-10 border-t-2 border-gray-50 gap-2">
				<ul className="flex flex-col sm:flex-row gap-4">
					{team.map(person => (
						<li key={person.name}>
							<a
								href={person.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm text-gray-600 hover:text-gray-900"
							>
								{person.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	)
}

export default Footer
