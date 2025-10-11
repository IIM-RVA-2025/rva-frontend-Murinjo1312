export interface Rezervacija {
  id: number;
  datum_rezervacije: string;
  ukupna_cena: number;
  potvrdjena: boolean;
  putnik_id: number;
  aranzman_id: number;
}
