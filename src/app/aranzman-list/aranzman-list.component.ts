import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AranzmanService } from 'src/app/aranzman.service';
import { Aranzman } from 'src/app/model/aranzman';

@Component({
  selector: 'app-aranzman-list',
  templateUrl: './aranzman-list.component.html',
  styleUrls: ['./aranzman-list.component.css']
})
export class AranzmanListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'naziv', 'opis', 'cena', 'aktivan'];
  dataSource = new MatTableDataSource<Aranzman>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private aranzmanService: AranzmanService) {}

  ngOnInit(): void {
    this.aranzmanService.getAranzmani().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
