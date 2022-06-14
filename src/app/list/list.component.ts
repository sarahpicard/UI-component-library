import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'], 
})
export class ListComponent implements OnInit {
  item: Item = {
    id: 1, 
    name: 'Button'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
