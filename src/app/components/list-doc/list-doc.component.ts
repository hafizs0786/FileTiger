import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-doc',
  templateUrl: './list-doc.component.html',
  styleUrls: ['./list-doc.component.scss']
})
export class ListDocComponent implements OnInit {
  displayedColumns: string[] = ['name', 'date', 'size'];
  dataSource = ELEMENT_DATA

  constructor() { }

  ngOnInit() {
  }

}
export interface PeriodicElement {
  name: string;
  date: number;
  size: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', date: 28.522, size: 'H'},
  {name: 'Helium', date: 4.0026, size: 'He'},
  {name: 'Lithium', date: 6.941, size: 'Li'},
  {name: 'Beryllium', date: 9.0122, size: 'Be'},
  {name: 'Boron', date: 10.811, size: 'B'},
  {name: 'Carbon', date: 12.0107, size: 'C'},
];
