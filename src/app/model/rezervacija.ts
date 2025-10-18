// Model za Aranžman
export interface Aranzman {
  id: number;
  naziv: string;
  cena: number;
  datum_polaska: string;
  datum_povratka: string;
  aktivan: boolean;
  destinacija?: {
    id: number;
    naziv: string;
    drzava: string;
  };
}

// Model za Putnika
export interface Putnik {
  id: number;
  ime: string;
  prezime: string;
  brojPasosa: string;
}

// Glavni model za Rezervaciju
export interface Rezervacija {
  id?: number;
  broj_osoba: number;
  datum_rezervacije: string;
  potvrdjena: boolean;
  ukupna_cena: number;
  aranzman: Aranzman;
  putnik: Putnik;
}
