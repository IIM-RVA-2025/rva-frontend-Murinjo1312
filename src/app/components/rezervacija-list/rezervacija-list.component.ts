import { Component, OnInit } from '@angular/core';
import { RezervacijaService } from '../../services/rezervacija.service';
import { AranzmanService } from '../../services/aranzman.service';
import { PutnikService } from '../../services/putnik.service';
import { Rezervacija, Aranzman, Putnik } from 'src/app/model/rezervacija';

@Component({
  selector: 'app-rezervacija-list',
  templateUrl: './rezervacija-list.component.html',
  styleUrls: ['./rezervacija-list.component.css']
})
export class RezervacijaListComponent implements OnInit {

  rezervacije: Rezervacija[] = [];

  novaRezervacija: Rezervacija = {
    broj_osoba: 1,
    datum_rezervacije: '',
    potvrdjena: false,
    ukupna_cena: 0,
    aranzman: { id: 0, naziv: '', cena: 0, datum_polaska: '', datum_povratka: '', aktivan: false },
    putnik: { id: 0, ime: '', prezime: '', brojPasosa: '' }
  };

  aranzmani: Aranzman[] = [];
  putnici: Putnik[] = [];

  constructor(
    private rezervacijaService: RezervacijaService,
    private aranzmanService: AranzmanService,
    private putnikService: PutnikService
  ) {}

  ngOnInit(): void {
    this.ucitajSve();
  }

  /** Učitava sve podatke — rezervacije, aranžmane i putnike */
  ucitajSve(): void {
    this.rezervacijaService.getRezervacije().subscribe({
      next: (data) => (this.rezervacije = data),
      error: (err) => console.error('Greška pri učitavanju rezervacija:', err)
    });

    this.aranzmanService.getAranzmani().subscribe({
      next: (data) => (this.aranzmani = data),
      error: (err) => console.error('Greška pri učitavanju aranžmana:', err)
    });

    this.putnikService.getPutnici().subscribe({
      next: (data) => (this.putnici = data),
      error: (err) => console.error('Greška pri učitavanju putnika:', err)
    });
  }

  /** Dodaje novu rezervaciju */
  dodajRezervaciju(): void {
    // Proveri da li su putnik i aranžman odabrani
    if (this.novaRezervacija.aranzman.id === 0 || this.novaRezervacija.putnik.id === 0) {
      alert('Molimo odaberite putnika i aranžman!');
      return;
    }

    this.rezervacijaService.addRezervacija(this.novaRezervacija).subscribe({
      next: (data) => {
        console.log('Rezervacija uspešno dodata:', data);
        this.ucitajSve();
        this.resetForm();
      },
      error: (err) => {
        console.error('Greška pri dodavanju rezervacije:', err);
        alert('Došlo je do greške pri dodavanju rezervacije.');
      }
    });
  }

  /** Briše rezervaciju po ID-u */
  obrisiRezervaciju(id: number): void {
    if (confirm('Da li ste sigurni da želite da obrišete ovu rezervaciju?')) {
      this.rezervacijaService.deleteRezervacija(id).subscribe({
        next: () => {
          console.log('Rezervacija obrisana.');
          this.ucitajSve();
        },
        error: (err) => console.error('Greška pri brisanju rezervacije:', err)
      });
    }
  }

  /** Resetuje formu */
  resetForm(): void {
    this.novaRezervacija = {
      broj_osoba: 1,
      datum_rezervacije: '',
      potvrdjena: false,
      ukupna_cena: 0,
      aranzman: { id: 0, naziv: '', cena: 0, datum_polaska: '', datum_povratka: '', aktivan: false },
      putnik: { id: 0, ime: '', prezime: '', brojPasosa: '' }
    };
  }
}
