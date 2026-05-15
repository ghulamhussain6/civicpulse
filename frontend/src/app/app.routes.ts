import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DonateComponent } from './donate/donate.component'; // Import the new component

export const routes: Routes = [
  { path: '', component: LandingComponent },      // Home Page
  { path: 'donate', component: DonateComponent }, // Donate Page
  { path: '**', redirectTo: '' }                  // Catch-all
];
