import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  title = 'Angular App';
  loading = false
  // products$ = new Observable<IProduct[]>();
  term = ''
  constructor(public _productsService: ProductsService, public modalService: ModalService)  {
  }

  ngOnInit() {
    this.loading = true
    this._productsService.getAll().subscribe(
      () => {
        this.loading = false
      }
    )

  }

}
