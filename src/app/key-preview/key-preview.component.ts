import { Component, OnInit } from '@angular/core';
import { ItemPayload } from '../directives/item-action.directive';
import { ItemPrizeData } from 'src/classes/Item';

@Component({
  selector: 'app-key-preview',
  templateUrl: './key-preview.component.html',
  styleUrls: ['./key-preview.component.scss']
})
export class KeyPreviewComponent implements OnInit, ItemPayload {

  constructor() { }

  item: ItemPrizeData;
  id: string;

  ngOnInit(): void {
  }

}
