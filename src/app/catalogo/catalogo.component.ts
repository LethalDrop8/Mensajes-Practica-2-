import { Component, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { CarritoService } from '../services/carrito.service';
import { Product } from '../models/product';
import { CarritoComponent } from '../carro/carrito.component';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, RouterLink, CarritoComponent],
  templateUrl: './catalogo.component.html',
})
export class CatalogoComponent {
  private carritoService = inject(CarritoService);

  
  productos: Product[] = [
    {
      id: 1,
      nombre: 'Computadora Asus',
      descripcion: 'Computadora Asus ROG Strix',
      precio: 23000,
      imagen: '/assets/images/ComputadoraAsus.jpg',
    },
    {
      id: 2,
      nombre: 'Tableta',
      descripcion: 'iPad de 9.ª generación de 128 GB',
      precio: 13000,
      imagen: '/assets/images/tablen9na.jpg',
    },
    {
      id: 3,
      nombre: 'Teléfono Oppo',
      descripcion: 'Smartphone Oppo última generación',
      precio: 9500,
      imagen: '/assets/images/Oppo.jpg',
    },
    {
      id: 4,
      nombre: 'Teléfono iPhone',
      descripcion: 'iPhone edición actualizada',
      precio: 18000,
      imagen: '/assets/images/iphone.jpg',
    },
    {
      id: 5,
      nombre: 'Computadora de escritorio',
      descripcion: 'Equipo de escritorio potente para trabajo y gaming',
      precio: 27000,
      imagen: '/assets/images/CompuDesk.jpg',
    },
  ];

  agregar(producto: Product) {
    this.carritoService.agregar(producto);
  }

  
  trackId(_: number, item: Product): number {
    return item.id;
  }
}
