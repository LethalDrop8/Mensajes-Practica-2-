import { Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CarritoComponent } from './carro/carrito.component';  // <-- agrega esto

export const routes: Routes = [
  { path: '', component: CatalogoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '**', redirectTo: '' },
];
