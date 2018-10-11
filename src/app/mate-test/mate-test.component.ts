import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MateTestDataSource } from './mate-test-datasource';

@Component({
  selector: 'app-mate-test',
  templateUrl: './mate-test.component.html',
  styleUrls: ['./mate-test.component.css']
})
export class MateTestComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MateTestDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new MateTestDataSource(this.paginator, this.sort);
  }
}
