import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DestinacijaService } from 'src/app/services/destinacija.service';
import { Destinacija } from 'src/app/model/destinacija';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-destinacija-list',
  templateUrl: './destinacija-list.component.html',
  styleUrls: ['./destinacija-list.component.css']
})
export class DestinacijaListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'naziv', 'drzava', 'prosecna_ocena', 'akcije'];
  dataSource = new MatTableDataSource<Destinacija>();

  novaDestinacija: Destinacija = {
    id: 0,
    naziv: '',
    drzava: '',
    opis: '',
    prosecna_ocena: 0
  };

  izmenaMode = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private destinacijaService: DestinacijaService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.ucitajDestinacije();
  }

  ucitajDestinacije() {
this.destinacijaService.getDestinacije().subscribe({
  next: (data) => {
    console.log('Primljeni podaci iz backenda:', data);
    this.dataSource.data = data;
  },
  error: (err) => console.error('Greška pri učitavanju:', err)
});
  }

dodajDestinaciju(): void {
  const nova = { ...this.novaDestinacija };
  delete (nova as any).id; 
  this.destinacijaService.addDestinacija(nova).subscribe({
    next: () => {
      this.snackBar.open('Destinacija dodata!', 'Zatvori', { duration: 2000 });
      this.ucitajDestinacije();
      this.resetForm();
    },
    error: () => this.snackBar.open('Greška pri dodavanju!', 'Zatvori', { duration: 2000 })
  });
}


  zapocniIzmenu(destinacija: Destinacija) {
    this.izmenaMode = true;
    this.novaDestinacija = { ...destinacija };
  }

  sacuvajIzmene() {
    this.destinacijaService.updateDestinacija(this.novaDestinacija.id, this.novaDestinacija).subscribe({
      next: () => {
        this.snackBar.open('Izmena sačuvana!', 'Zatvori', { duration: 2000 });
        this.ucitajDestinacije();
        this.izmenaMode = false;
        this.novaDestinacija = { id: 0, naziv: '', drzava: '', opis: '', prosecna_ocena: 0 };
      },
      error: () => this.snackBar.open('Greška pri izmeni!', 'Zatvori', { duration: 2000 })
    });
  }

  obrisiDestinaciju(id: number) {
    if (confirm('Da li sigurno želiš da obrišeš ovu destinaciju?')) {
      this.destinacijaService.deleteDestinacija(id).subscribe({
        next: () => {
          this.snackBar.open('Destinacija obrisana!', 'Zatvori', { duration: 2000 });
          this.ucitajDestinacije();
        },
        error: () => this.snackBar.open('Greška pri brisanju!', 'Zatvori', { duration: 2000 })
      });
    }
  }
  resetForm(): void {
  this.novaDestinacija = {
    id: 0,
    naziv: '',
    drzava: '',
    opis: '',
    prosecna_ocena: 0
  };
  this.izmenaMode = false;
}

}
