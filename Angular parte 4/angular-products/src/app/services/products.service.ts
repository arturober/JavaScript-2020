import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, delay } from 'rxjs/operators';
import { ProductsResponse, ChangeRatingResponse } from '../interfaces/responses';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly productsURL = '/products';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get<ProductsResponse>(this.productsURL).pipe(
      map(resp => resp.products)
    );
  }

  changeRating(productId, rating): Observable<number> {
    return this.http.put<ChangeRatingResponse>(`${this.productsURL}/${productId}/rating`, {rating})
      .pipe(
        // delay(2000), -> Retraso 2 segundos la respuesta (simula lentitud)
        map(resp => resp.rating)
      );
  }
}
