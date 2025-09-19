import { Component, OnInit } from "@angular/core";
import { Product } from "../models/product";
import { ProductoService } from "../services/producto.service";
import { NgForOf } from "@angular/common";

@Component({
    selector : 'app-catalogo',   
    templateUrl: './catalogo.html',
    styleUrls: ['./catalogo.css'],   
    imports: [NgForOf]       
})

export class CatalogoComponent implements OnInit{
    productos : Product[] = [];  
    constructor(private productoService: ProductoService){}
    async ngOnInit() {
      this.productos = await this.productoService.getProductos();
      console.log('Productos obtenidos del XML:', this.productos);
      console.log(this.productos.map(p => p.imagen));
}
  
}
