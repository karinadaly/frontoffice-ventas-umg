import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { CategoriaComponent } from './components/categoria/categoria.component';
import { AddUpdateUsuarioComponent } from './components/usuario/add-update-usuario/add-update-usuario.component';

import { UsuarioComponent } from './components/usuario/usuario.component';
import { AddUpdateCategoriaComponent } from './components/categoria/add-update-categoria/add-update-categoria.component';
import { AddUpdateTipoEmpaqueComponent } from './components/tipo-empaque/add-update-tipo-empaque/add-update-tipo-empaque.component';
import { TipoEmpaqueComponent } from './components/tipo-empaque/tipo-empaque.component';
import { TipoRegistroComponent } from './components/tipo-registro/tipo-registro.component';
import { AddUpdateTipoRegistroComponent } from './components/tipo-registro/add-update-tipo-registro/add-update-tipo-registro.component';
import { CompraComponent } from './components/compra/compra.component';
import { AddUdpateCompraComponent } from './components/compra/add-udpate-compra/add-udpate-compra.component';
import { DetalleCompraComponent } from './components/detalle-compra/detalle-compra.component';
import { AddUpdateDetalleCompraComponent } from './components/detalle-compra/add-update-detalle-compra/add-update-detalle-compra.component';

import { RolComponent } from './components/rol/rol.component';
import { AddUpdateRolComponent } from './components/rol/add-update-rol/add-update-rol.component';

import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { AddUpdateProveedorComponent } from './components/proveedor/add-update-proveedor/add-update-proveedor.component';
import { DirprovComponent } from './components/dirprov/dirprov.component';
import { AddUpdateDirprovComponent } from './components/dirprov/add-update-dirprov/add-update-dirprov.component';
import { EmailprovComponent } from './components/emailprov/emailprov.component';
import { AddUpdateEmailprovComponent } from './components/emailprov/add-update-emailprov/add-update-emailprov.component';
import { TelprovComponent } from './components/telprov/telprov.component';
import { AddUpdateTelprovComponent } from './components/telprov/add-update-telprov/add-update-telprov.component';
import { AddUpdateClienteComponent} from './components/cliente/add-update-cliente/add-update-cliente.component';
import { ClienteComponent} from './components/cliente/cliente.component';
import { AddUpdateTelClienteComponent} from './components/tel-cliente/add-update-tel-cliente/add-update-tel-cliente.component';
import { TelClienteComponent} from './components/tel-cliente/tel-cliente.component';
import { AddUpdateDirClienteComponent} from './components/dir-cliente/add-update-dir-cliente/add-update-dir-cliente.component';
import { DirClienteComponent} from './components/dir-cliente/dir-cliente.component';
import { AddUpdateEmailClienteComponent} from './components/email-cliente/add-update-email-cliente/add-update-email-cliente.component';
import { EmailClienteComponent} from './components/email-cliente/email-cliente.component';
import { LoginComponent } from './components/login/login.component';
import { FacturaComponent } from './components/factura/factura.component';
import { AddUpdateFacturaComponent } from './components/factura/add-update-factura/add-update-factura.component';
import { ProductoComponent } from './components/producto/producto.component';
import { AddUpdateProductoComponent } from './components/producto/add-update-producto/add-update-producto.component';
import { DetalleFacturaComponent } from './components/detalle-factura/detalle-factura.component';

import { BuscadorComponent } from './components/buscador/buscador.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'telprov', component: TelprovComponent },
    { path: 'emailprov', component: EmailprovComponent },
    { path: 'dirprov', component: DirprovComponent },
    { path: 'proveedor', component: ProveedorComponent },
    { path: 'categoria', component: CategoriaComponent },
    { path: 'categoria-add', component: AddUpdateCategoriaComponent },
    { path: 'categoria-update/:id', component: AddUpdateCategoriaComponent },
    { path: 'tipo-empaque-update/:id', component: AddUpdateTipoEmpaqueComponent },
    { path: 'tipo-empaque', component: TipoEmpaqueComponent },
    { path: 'tipo-empaque-add', component: AddUpdateTipoEmpaqueComponent },
    { path: 'tipo-registro', component: TipoRegistroComponent },
    { path: 'tipo-registro-add', component: AddUpdateTipoRegistroComponent },
    { path: 'tipo-registro-update/:id', component: AddUpdateTipoRegistroComponent },
    { path: 'compra', component: CompraComponent },
    { path: 'compra-add', component: AddUdpateCompraComponent },
    { path: 'compra-update/:id', component: AddUdpateCompraComponent },
    { path: 'detalle-compra', component: DetalleCompraComponent },
    { path: 'detalle-compra-add', component: AddUpdateDetalleCompraComponent },
    { path: 'detalle-compra-update/:id', component: AddUpdateDetalleCompraComponent },
    { path: 'factura', component: FacturaComponent },
    { path: 'factura-add', component: AddUpdateFacturaComponent },
    { path: 'factura-update/:id', component: AddUpdateFacturaComponent },
    { path: 'detalle-factura/:id' , component: DetalleFacturaComponent},
    { path: 'usuario', component: UsuarioComponent },
    { path: 'usuario-add', component: AddUpdateUsuarioComponent },
    { path: 'usuario-update/:id', component: AddUpdateUsuarioComponent },
    { path: 'rol', component: RolComponent },
    { path: 'rol-add', component: AddUpdateRolComponent },
    { path: 'rol-update/:id', component: AddUpdateRolComponent },
    { path: 'proveedor-add', component: AddUpdateProveedorComponent },
    { path: 'proveedor-update/:id', component: AddUpdateProveedorComponent },
    { path: 'dirprov-add', component: AddUpdateDirprovComponent },
    { path: 'dirprov-update/:id', component: AddUpdateDirprovComponent },
    { path: 'emailprov-add', component: AddUpdateEmailprovComponent },
    { path: 'emailprov-update/:id', component: AddUpdateEmailprovComponent },
    { path: 'telprov-add', component: AddUpdateTelprovComponent },
    { path: 'telprov-update/:id', component: AddUpdateTelprovComponent },
    { path: 'cliente', component: ClienteComponent},
    { path: 'cliente-add', component: AddUpdateClienteComponent},
    { path: 'cliente-update/:id', component: AddUpdateClienteComponent},
    { path: 'telCliente', component: TelClienteComponent},
    { path: 'telCliente-add', component: AddUpdateTelClienteComponent},
    { path: 'telCliente-update/:id', component: AddUpdateTelClienteComponent},
    { path: 'dirCliente', component: DirClienteComponent},
    { path: 'dirCliente-add', component: AddUpdateDirClienteComponent},
    { path: 'dirCliente-update/:id', component: AddUpdateDirClienteComponent},
    { path: 'emailCliente', component: EmailClienteComponent},
    { path: 'emailCliente-add', component: AddUpdateEmailClienteComponent},
    { path: 'emailCliente-update/:id', component: AddUpdateEmailClienteComponent},
    { path: 'login', component: LoginComponent },
    { path: 'producto', component: ProductoComponent },
    { path: 'producto-add', component: AddUpdateProductoComponent },
    { path: 'producto-update/:id', component: AddUpdateProductoComponent },
    { path: 'buscador/:termino', component: BuscadorComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES, { useHash: true });
