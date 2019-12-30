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
  {name: 'New Folder 1', date: 22-12-2018, size: '20,140 KB'},
  {name: 'New Folder 2', date: 20-1-2019, size: '47,080 KB'},
  {name: 'New Folder 3', date: 30-3-2019, size: '2,132 KB'},
  {name: 'New Folder 4', date: 22-4-2019, size: '24,070 KB'},
  {name: 'New Folder 5', date: 24-4-2019, size: '1,247 KB'},
  {name: 'New Folder 6', date: 15-5-2019, size: '6,789 KB'},
];
