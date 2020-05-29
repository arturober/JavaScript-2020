import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { ComponentDeactivate } from '../guards/leave-page.guard';

@Component({
  selector: 'product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, ComponentDeactivate {
  producto: Producto;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.producto = this.route.snapshot.data.producto;
  }

  canDeactivate(): boolean {
    return confirm('¿Quieres abandonar la página?. Los cambios no se guardarán.');
  }
}
