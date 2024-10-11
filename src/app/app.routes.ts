import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  // {
  //   path: 'certificates',
  //   loadChildren: () =>
  //     import('./certificates/certificates.module').then(
  //       (m) => m.CertificatesModule
  //     ),
  // },
];
