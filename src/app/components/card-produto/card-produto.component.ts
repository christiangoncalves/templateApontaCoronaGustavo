import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss']
})
export class CardProdutoComponent implements OnInit {

  @Input('product') product;

  constructor() { }

  ngOnInit(): void {
    
  }

}
