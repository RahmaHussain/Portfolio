import { Component } from '@angular/core';
import { CertificatesComponent } from '../certificates/certificates.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CertificatesComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {}
