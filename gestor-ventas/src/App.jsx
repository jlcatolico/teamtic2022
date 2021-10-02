import 'styles/styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from 'layouts/AuthLayout';
import PublicLayout from 'layouts/PublicLayout';
import Login from 'pages/Login';
import Registro from 'pages/Registro';
import Index from 'pages/Index';
import ProductosActualizar from 'pages/ProductosActualizar';
import ProductosCrear from 'pages/ProductosCrear';
import ProductosListar from 'pages/ProductosListar';
import UsuariosActualizar from 'pages/UsuariosActualizar';
import UsuariosListar from 'pages/UsuariosListar';
import VentasActualizar from 'pages/VentasActualizar';
import VentasCrear from 'pages/VentasCrear';
import Inside from 'pages/Inside';
import VentasListar from 'pages/VentasListar';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path={['/login','/registro']}>
            <AuthLayout>
              <Switch>
                <Route path='/login'>
                  <Login/>
                </Route>
                <Route path='/registro'>
                  <Registro/>
                </Route>
              </Switch>
            </AuthLayout>
          </Route>
          <Route path={['/Inside', '/ProductosActualizar', '/ProductosCrear','/ProductosListar', '/UsuariosActualizar', '/UsuariosListar', '/VentasActualizar', '/VentasCrear', '/VentasListar']}>
            <PrivateLayout>
              <Switch>
                <Route path='/Inside'>
                  <Inside/>
                </Route>
                <Route path='/ProductosActualizar'>
                  <ProductosActualizar/>
                </Route>
                <Route path='/ProductosCrear'>
                  <ProductosCrear/>
                </Route>
                <Route path='/ProductosListar'>
                  <ProductosListar/>
                </Route>
                <Route path='/UsuariosActualizar'>
                  <UsuariosActualizar/>
                </Route>
                <Route path='/UsuariosListar'>
                  <UsuariosListar/>
                </Route>
                <Route path='/VentasActualizar'>
                  <VentasActualizar/>
                </Route>
                <Route path='/VentasListar'>
                  <VentasListar/>
                </Route>
                <Route path='/VentasCrear'>
                  <VentasCrear/>
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path={['/']}>
            <PublicLayout>
              <Switch>
                <Route path='/'>
                  <Index/>
                </Route>
              </Switch>
            </PublicLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
