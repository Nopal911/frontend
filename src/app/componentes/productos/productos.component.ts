import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { ProductService } from '../../servicios/product.service';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [TableModule, TagModule, RatingModule, CommonModule, ButtonModule, FormsModule, DialogModule, ToolbarModule, DropdownModule],
  providers: [ProductService],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  products!: Producto[];
  displayDialog: boolean = false; // Controla la visibilidad del cuadro de diálogo
  newProduct: Producto = {
    id: 0,
    codigo: '',
    nombre: '',
    descripcion: '',
    precio: 0,
    imagen: '',
    categoria: '',
    cantidad: 0,
    estadoInventario: '',
    rating: 0
  }; // Almacena los datos del nuevo producto
  statuses = [
    { label: 'INSTOCK', value: 'instock' },
    { label: 'LOWSTOCK', value: 'lowstock' },
    { label: 'OUTOFSTOCK', value: 'outofstock' },
  ];

  cols: { field: string; header: string }[] = []; // Column configuration

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.get().subscribe((products) => {
      this.products = products;
    });

    // Column definition
    this.cols = [
      { field: 'codigo', header: 'Código' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'categoria', header: 'Categoría' },
      { field: 'precio', header: 'Precio' },
      { field: 'estadoInventario', header: 'Estado de Inventario' },
    ];
  }

  // Abre el cuadro de diálogo
  showDialog() {
    this.displayDialog = true;
  }

  // Cierra el cuadro de diálogo
  hideDialog() {
    this.displayDialog = false;
  }

  // Guarda el nuevo producto
  saveProduct() {
    this.productService.create(this.newProduct).subscribe(
      (product) => {
        // Agregar el producto a la lista local una vez que se haya creado exitosamente en el backend
        this.products.push(product);
        this.hideDialog(); // Cierra el cuadro de diálogo
        this.resetNewProduct(); // Reinicia el formulario
      },
      (error) => {
        console.error('Error al guardar el producto', error);
      }
    );
  }

  // Reinicia el objeto newProduct para limpiar el formulario
  resetNewProduct() {
    this.newProduct = {
      id: 0,
      codigo: '',
      nombre: '',
      descripcion: '',
      precio: 0,
      imagen: '',
      categoria: '',
      cantidad: 0,
      estadoInventario: '',
      rating: 0
    };
  }

  // Determina la severidad (color) del estado del inventario
  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info';
    }
  }
}
