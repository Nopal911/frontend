import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { ProductoListaComponent } from './componentes/producto-lista/producto-lista.component';
import { authGuard } from './guardias/guard.guard';
import { ProductosComponent } from './componentes/productos/productos.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'register',
        component: RegisterComponent
    },

    {
        path: 'productlist',
        component: ProductoListaComponent,
        canActivate: [authGuard]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    
    {
        path: 'productos',
        component: ProductosComponent
    }
];
