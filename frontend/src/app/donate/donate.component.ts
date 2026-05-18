import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="donate-page">
      <div class="donate-container">
        <a routerLink="/" class="back-link">← Back to Home</a>
        
        <div class="form-header">
          <span class="tag">Ramadan Drive 2026</span>
          <h2>Donation Record Form</h2>
          <p>Please record your transaction details below for transparency.</p>
        </div>

        <form #donationForm="ngForm" (ngSubmit)="onSubmit(donationForm)">
          <div class="form-grid">
            <div class="form-group full-width">
              <label>Full Name of Donor</label>
              <input type="text" name="name" ngModel required placeholder="e.g. Ahmad Khan">
            </div>

            <div class="form-group">
              <label>Country</label>
              <select name="country" [(ngModel)]="selectedCountry" (change)="onCountryChange()" required>
                <option value="" disabled>Select Country</option>
                <option *ngFor="let c of countries" [value]="c.name">{{ c.name }}</option>
              </select>
            </div>

            <div class="form-group">
              <label>Contact (Network & Number)</label>
              <div class="contact-grid">
                <div class="prefix-box">{{ getCountryCode() }}</div>
                
                <div class="network-input-wrapper">
                  <select *ngIf="getNetworks().length > 0; else manualNetwork" 
                          name="networkCode" ngModel required>
                    <option value="" disabled>Network</option>
                    <option *ngFor="let net of getNetworks()" [value]="net">{{ net }}</option>
                  </select>
                  
                  <ng-template #manualNetwork>
                    <input type="text" name="networkCode" ngModel required 
                           placeholder="Code" class="manual-code-input">
                  </ng-template>
                </div>

                <input type="text" name="phoneBody" ngModel required 
                       [placeholder]="selectedCountry === 'Pakistan' ? '7 digits' : 'Number'" 
                       [maxlength]="selectedCountry === 'Pakistan' ? 7 : 12">
              </div>
            </div>

            <div class="form-group">
              <label>Amount (PKR)</label>
              <input type="number" name="amount" ngModel required placeholder="Amount in PKR">
            </div>

            <div class="form-group">
              <label>Referred By (Team Member)</label>
              <select name="referredBy" ngModel required>
                <option value="" disabled>Select Team Member</option>
                <option *ngFor="let member of teamMembers" [value]="member">{{ member }}</option>
              </select>
            </div>
          </div>

          <button type="submit" class="submit-btn" [disabled]="!donationForm.valid">
            SUBMIT DONATION RECORD
          </button>
        </form>

        <p class="security-note">🔒 Your information is only used for internal record-keeping and transparency.</p>
      </div>
    </div>
  `,
  styles: [`
    .donate-page { padding: 60px 20px; background: #f4f7f6; min-height: 100vh; font-family: 'Segoe UI', sans-serif; }
    .donate-container { max-width: 700px; margin: 0 auto; background: white; padding: 40px; border-radius: 16px; box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
    .back-link { text-decoration: none; color: #1a472a; font-size: 14px; font-weight: 600; margin-bottom: 20px; display: inline-block; }
    .form-header { text-align: center; margin-bottom: 30px; }
    .tag { color: #c9a55c; font-weight: bold; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; }
    h2 { color: #1a472a; margin: 10px 0; font-size: 28px; }
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; text-align: left; }
    .full-width { grid-column: span 2; }
    .form-group { display: flex; flex-direction: column; }
    .form-group label { font-size: 13px; font-weight: 600; color: #444; margin-bottom: 8px; }
    
    input, select { width: 100%; padding: 12px 15px; border: 1.5px solid #e1e1e1; border-radius: 8px; font-size: 15px; transition: 0.3s; box-sizing: border-box; }
    input:focus, select:focus { border-color: #1a472a; outline: none; }

    .contact-grid { display: flex; gap: 8px; align-items: stretch; }
    .prefix-box { background: #f0f0f0; border: 1.5px solid #e1e1e1; border-radius: 8px; padding: 0 12px; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #555; font-size: 14px; min-width: 55px; }
    .network-input-wrapper { min-width: 90px; }
    .manual-code-input { width: 90px !important; }

    .submit-btn { width: 100%; background: #1a472a; color: #c9a55c; padding: 18px; border: none; border-radius: 8px; font-weight: 800; font-size: 16px; margin-top: 30px; cursor: pointer; transition: 0.3s; }
    .submit-btn:hover:not(:disabled) { background: #13331e; transform: translateY(-2px); }
    .submit-btn:disabled { background: #ccc; color: #666; cursor: not-allowed; }
    .security-note { margin-top: 25px; font-size: 12px; color: #888; text-align: center; }

    @media (max-width: 600px) { .form-grid { grid-template-columns: 1fr; } .full-width { grid-column: span 1; } .contact-grid { flex-wrap: wrap; } }
  `]
})
export class DonateComponent {
  selectedCountry: string = 'Pakistan';

  countries = [
    { name: 'Pakistan', code: '+92', networks: ['300', '301', '302', '303', '304', '305', '306', '307', '308', '309', '310', '311', '312', '313', '314', '315', '316', '317', '318', '321', '331', '332', '333', '334', '335', '336', '341', '342', '343', '344', '345', '346', '347'] },
    { name: 'Saudi Arabia', code: '+966', networks: ['50', '53', '54', '55', '56', '57', '58', '59'] },
    { name: 'UAE', code: '+971', networks: ['50', '52', '54', '55', '56', '58'] },
    { name: 'Qatar', code: '+974', networks: ['33', '55', '66', '77'] },
    { name: 'UK', code: '+44', networks: ['7'] },
    { name: 'USA', code: '+1', networks: [] },
    { name: 'Canada', code: '+1', networks: [] },
    { name: 'Australia', code: '+61', networks: ['4'] },
    { name: 'Other', code: '+', networks: [] }
  ];

  teamMembers = [
    "Ali Naqvi", "Arsal Masood", "Adnan Shabbir", "Usman Pervaiz",
    "M. Awais", "Ovais Daud", "Dr. Bilal Ahmed", "Khalid Khan",
    "Saboor Ahmed", "Hasnain Khawaja", "Hamza Saleem",
    "Hussain Ghafoor", "Asjad Masood"
  ];

  constructor(private http: HttpClient) {}

  getCountryCode() {
    const country = this.countries.find(c => c.name === this.selectedCountry);
    return country ? country.code : '';
  }

  getNetworks() {
    const country = this.countries.find(c => c.name === this.selectedCountry);
    return country ? country.networks : [];
  }

  // Simplified: No longer passes 'form' object to avoid initialization errors
  onCountryChange() {
    console.log('Country switched to:', this.selectedCountry);
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    const rawData = form.value;
    const fullContactNo = `${this.getCountryCode()}${rawData.networkCode || ''}${rawData.phoneBody || ''}`;
    
    const payload = {
      name: rawData.name,
      country: this.selectedCountry,
      contactNo: fullContactNo,
      amount: rawData.amount,
      referredBy: rawData.referredBy
    };

    this.http.post('/api/donations', payload).subscribe({
      next: (res) => {
        alert('Jazakallah! Your donation record has been saved.');
        form.resetForm({
          country: 'Pakistan'
        });
        this.selectedCountry = 'Pakistan';
      },
      error: (err) => {
        console.error('Submission error:', err);
        alert('Could not connect to the server.');
      }
    });
  }
}