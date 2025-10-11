import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DestinacijaService } from 'src/app/destinacija.service';
import { Destinacija } from 'src/app/model/destinacija';

@Component({
  selector: 'app-destinacija-list',
  templateUrl: './destinacija-list.component.html',
  styleUrls: ['./destinacija-list.component.css']
})
export class DestinacijaListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'naziv', 'drzava', 'prosecna_ocena'];
  dataSource = new MatTableDataSource<Destinacija>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private destinacijaService: DestinacijaService) {}

  ngOnInit(): void {
    this.destinacijaService.getDestinacije().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
