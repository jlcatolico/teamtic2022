import 'styles/styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from 'layouts/AuthLayout';
import PublicLayout from 'layouts/PublicLayout';
import Login from 'pages/Login';
import Registro from 'pages/Registro';
import Index from 'pages/Index';
import Productos from 'pages/Productos';
import ProductosActualizar from 'pages/ProductosActualizar';
import ProductosCrear from 'pages/ProductosCrear';
import ProductosListar from 'pages/ProductosListar';
import UsuariosActualizar from 'pages/UsuariosActualizar';
import UsuariosListar from 'pages/UsuariosListar';
import VentasActualizar from 'pages/VentasActualizar';
import VentasCrear from 'pages/VentasCrear';
import Inside from 'pages/Inside';
import VentasListar from 'pages/VentasListar';
import Usuarios from 'pages/Usuarios';
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
	return (
		<Auth0Provider
			domain='misiontic-teamtic2022.us.auth0.com'
			clientId='MIcna23UC1pxqrntWCDKM22RQAz4MsyY'
			redirectUri="http://localhost:3000/inside">
			<div>
				<Router>
					<Switch>
						<Route path={['/login', '/registro']}>
							<AuthLayout>
								<Switch>
									<Route path='/login'>
										<Login />
									</Route>
									<Route path='/registro'>
										<Registro />
									</Route>
								</Switch>
							</AuthLayout>
						</Route>
						<Route
							path={[
								'/Inside',
								'/Productos',
								'/ProductosActualizar',
								'/ProductosCrear',
								'/ProductosListar',
								'/UsuariosActualizar',
								'/UsuariosListar',
								'/Usuarios',
								'/VentasActualizar',
								'/VentasCrear',
								'/VentasListar',
							]}>
							<PrivateLayout>
								<Switch>
									<Route path='/Inside'>
										<Inside />
									</Route>
									<Route path='/Productos'>
										<Productos />
									</Route>
									<Route path='/ProductosActualizar'>
										<ProductosActualizar />
									</Route>
									<Route path='/ProductosCrear'>
										<ProductosCrear />
									</Route>
									<Route path='/ProductosListar'>
										<ProductosListar />
									</Route>
									<Route path='/UsuariosActualizar'>
										<UsuariosActualizar />
									</Route>
									<Route path='/UsuariosListar'>
										<UsuariosListar />
									</Route>
									<Route path='/Usuarios'>
										<Usuarios />
									</Route>
									<Route path='/VentasActualizar'>
										<VentasActualizar />
									</Route>
									<Route path='/VentasListar'>
										<VentasListar />
									</Route>
									<Route path='/VentasCrear'>
										<VentasCrear />
									</Route>
								</Switch>
							</PrivateLayout>
						</Route>
						<Route path={['/']}>
							<PublicLayout>
								<Switch>
									<Route path='/'>
										<Index />
									</Route>
								</Switch>
							</PublicLayout>
						</Route>
					</Switch>
				</Router>
			</div>
		</Auth0Provider>
	);
}

export default App;
