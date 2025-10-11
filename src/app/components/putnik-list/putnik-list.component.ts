import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PutnikService } from '../../services/putnik.service';
import { Putnik } from 'src/app/model/putnik';

@Component({
  selector: 'app-putnik-list',
  templateUrl: './putnik-list.component.html',
  styleUrls: ['./putnik-list.component.css']
})
export class PutnikListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'ime', 'prezime', 'broj_pasosa'];
  dataSource = new MatTableDataSource<Putnik>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private putnikService: PutnikService) { }

  ngOnInit(): void {
    this.putnikService.getPutnici().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
