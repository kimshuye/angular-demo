import { Injectable } from '@angular/core';
import { AngularFireDatabase ,AngularFireList } from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  products: AngularFireList<any[]>;

  constructor(private af: AngularFireDatabase) { }

  getProducts(){
    this.products = this.af.list('products');
  }

}

interface Product{
  $name?: string;
  description?: string;
  sku?: string;
  sellprice?: string;
  purchaseprice?: string;
  stock?: string;
  availablestock?: string;
  unittext?: string;
}
