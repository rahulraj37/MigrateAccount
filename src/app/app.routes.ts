import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MigrateAccountComponent } from './components/migrate-account/migrate-account.component';

export const routes: Routes = [
  { path: "home", component: HomeComponent },
   { path: "ma", component: MigrateAccountComponent },
  { path: "**", redirectTo: "home" },
];
