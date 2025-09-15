import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  async getProductos(): Promise<Product[]> {
    const response = await fetch('assets/productos.xml'); 
    const xmlText = await response.text();

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

    const productos: Product[] = [];
    const elementos = xmlDoc.getElementsByTagName('producto');

    for (let i = 0; i < elementos.length; i++) {
      const el = elementos[i];
      productos.push({
        id: Number(el.getAttribute('id')),
        nombre: el.getElementsByTagName('nombre')[0]?.textContent || '',
        precio: Number(el.getElementsByTagName('precio')[0]?.textContent || 0),
        descripcion: el.getElementsByTagName('descripcion')[0]?.textContent || '',
        imagen: 'assets/' + (el.getElementsByTagName('imagen')[0]?.textContent || '')
      });
    }

    return productos;
  }
}
