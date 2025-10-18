import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PutnikService } from 'src/app/services/putnik.service';
import { Putnik } from 'src/app/model/putnik';

@Component({
  selector: 'app-putnik-list',
  templateUrl: './putnik-list.component.html',
  styleUrls: ['./putnik-list.component.css']
})
export class PutnikListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'ime', 'prezime', 'brojPasosa', 'akcije'];
  dataSource = new MatTableDataSource<Putnik>();

  noviPutnik: Putnik = {
    id: 0,
    ime: '',
    prezime: '',
    brojPasosa: ''
  };

  izmenaMode = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private putnikService: PutnikService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.ucitajPutnike();
  }

  ucitajPutnike(): void {
    this.putnikService.getPutnici().subscribe({
      next: data => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: err => {
        this.snackBar.open('Greška pri učitavanju putnika.', 'Zatvori', { duration: 3000 });
        console.error(err);
      }
    });
  }

  dodajPutnika(): void {
    this.putnikService.addPutnik(this.noviPutnik).subscribe({
      next: () => {
        this.snackBar.open('Putnik dodat!', 'Zatvori', { duration: 2000 });
        this.ucitajPutnike();
        this.resetForm();
      },
      error: () => this.snackBar.open('Greška pri dodavanju!', 'Zatvori', { duration: 2000 })
    });
  }

  zapocniIzmenu(putnik: Putnik): void {
    this.izmenaMode = true;
    this.noviPutnik = { ...putnik };
  }

  sacuvajIzmene(): void {
    this.putnikService.updatePutnik(this.noviPutnik.id, this.noviPutnik).subscribe({
      next: () => {
        this.snackBar.open('Izmena sačuvana!', 'Zatvori', { duration: 2000 });
        this.ucitajPutnike();
        this.resetForm();
      },
      error: () => this.snackBar.open('Greška pri izmeni!', 'Zatvori', { duration: 2000 })
    });
  }

  obrisiPutnika(id: number): void {
    if (confirm('Da li sigurno želiš da obrišeš ovog putnika?')) {
      this.putnikService.deletePutnik(id).subscribe({
        next: () => {
          this.snackBar.open('Putnik obrisan!', 'Zatvori', { duration: 2000 });
          this.ucitajPutnike();
        },
        error: () => this.snackBar.open('Greška pri brisanju!', 'Zatvori', { duration: 2000 })
      });
    }
  }

  // ⬇⬇⬇ OVA metoda mora postojati u klasi
  resetForm(): void {
    this.noviPutnik = { id: 0, ime: '', prezime: '', brojPasosa: '' };
    this.izmenaMode = false;
  }

} // ⬅ paziti da ovo bude kraj klase, ne pre resetForm-a!
