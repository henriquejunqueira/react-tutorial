// document.getElementById('root').innerHTML = '<h1>Olá, Henrique!</h1>';

// ReactDOM.render('Olá, Henrique!', document.getElementById('root'));

let imgperfil = './img/perfil.jpg';
// let meunome = 'Fulano';
let meunome = 'Henrique Junqueira';

// const tituloPagina = <h1>Olá, Henrique!</h1>;
// const tituloPagina = <h1>Olá, {meunome}!</h1>;
const tituloPagina = <h1>Olá, meu nome é {meunome}!</h1>;
// const minhaTagFoto = <img src={imgperfil} className='inline_img' />;
const minhaTagFoto = <img src={imgperfil} className='rounded-circle w-50' />;

const perfilContent = (
	<div className='container'>
		<div className='row'>
			<div className='col-md-2'></div>
			<div className='col-md-8'>
				{/* <div className='nome'>{tituloPagina}</div> */}
				{tituloPagina}
			</div>
			<div className='col-md-2'></div>
		</div>
		<div className='row'>
			<div className='col-md-4'></div>
			<div className='col-md-4'>
				{/* <div>{minhaTagFoto}</div> */}
				{minhaTagFoto}
			</div>
			<div className='col-md-4'></div>
		</div>
	</div>
);

ReactDOM.render(perfilContent, document.getElementById('root'));
