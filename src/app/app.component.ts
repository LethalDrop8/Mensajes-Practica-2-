import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarritoService } from './services/carrito.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    
    <nav style="display:flex; gap:1rem; align-items:center; padding:1rem 1.25rem; border-bottom:1px solid #eee;">
      <a routerLink="" style="text-decoration:none;">Catálogo</a>
      <a routerLink="carrito" style="text-decoration:none;">Carrito</a>
    </nav>

    
    <div class="indicador-carrito">
      <a routerLink="carrito" class="contador-carrito" title="Ir al carrito">
        
      </a>
    </div>

   
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  private productosSig = inject(CarritoService).productos;
  
  count = computed(() => this.productosSig().length);
}
