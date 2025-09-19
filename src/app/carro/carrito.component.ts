import { Component, computed, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './carrito.component.html',
})
export class CarritoComponent {
  
  private carritoService = inject(CarritoService);

  
  carrito = this.carritoService.productos;

  
  total = computed(() => this.carritoService.total());

  
  quitar(id: number) {
    this.carritoService.quitar(id);
  }

  
  vaciar() {
    this.carritoService.vaciar();
  }

 
  exportarXML() {
    this.carritoService.exportarXML();
  }
}
