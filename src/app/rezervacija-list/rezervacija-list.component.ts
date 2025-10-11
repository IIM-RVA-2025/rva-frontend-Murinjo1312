import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RezervacijaService } from 'src/app/rezervacija.service';
import { Rezervacija } from 'src/app/model/rezervacija';

@Component({
  selector: 'app-rezervacija-list',
  templateUrl: './rezervacija-list.component.html',
  styleUrls: ['./rezervacija-list.component.css']
})
export class RezervacijaListComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'datum_rezervacije',
    'ukupna_cena',
    'potvrdjena',
    'putnik_id',
    'aranzman_id'
  ];
  dataSource = new MatTableDataSource<Rezervacija>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private rezervacijaService: RezervacijaService) {}

  ngOnInit(): void {
    this.rezervacijaService.getRezervacije().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
