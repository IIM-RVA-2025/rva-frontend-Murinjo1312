import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PutnikListComponent } from './components/putnik-list/putnik-list.component';
import { AranzmanListComponent } from './aranzman-list/aranzman-list.component';
import { DestinacijaListComponent } from './components/destinacija-list/destinacija-list.component';
import { RezervacijaListComponent } from './components/rezervacija-list/rezervacija-list.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'putnici', component: PutnikListComponent },
  { path: 'aranzmani', component: AranzmanListComponent },
  { path: 'destinacije', component: DestinacijaListComponent },
  { path: 'rezervacije', component: RezervacijaListComponent },
  { path: '', redirectTo: '/putnici', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
