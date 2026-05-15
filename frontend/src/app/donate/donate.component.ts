import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="donate-page">
      <nav class="simple-nav">
        <a routerLink="/" class="back-link">← Back to Home</a>
      </nav>

      <div class="donate-container">
        <div class="form-header">
          <span class="tag">Ramadan Drive 2026</span>
          <h2>Donation Record Form</h2>
          <p>Please record your transaction details below for transparency.</p>
        </div>
        
        <form #donorForm="ngForm" (ngSubmit)="onSubmit(donorForm)">
          <div class="form-grid">
            <!-- Full Name -->
            <div class="form-group">
              <label>Full Name of Donor</label>
              <input type="text" name="name" ngModel placeholder="Enter your name" required>
            </div>

            <!-- Contact Number -->
            <div class="form-group">
              <label>Contact Number (WhatsApp)</label>
              <input type="text" name="contact" ngModel placeholder="03xx-xxxxxxx" required>
            </div>

            <!-- Amount -->
            <div class="form-group">
              <label>Amount (PKR)</label>
              <input type="number" name="amount" ngModel placeholder="6500" required>
            </div>

            <!-- Reference Dropdown -->
            <div class="form-group">
              <label>Referred By (Team Member)</label>
              <select name="reference" ngModel required>
                <option value="" disabled selected>Select Team Member</option>
                <option *ngFor="let member of teamMembers" [value]="member">
                  {{ member }}
                </option>
              </select>
            </div>
          </div>

          <button type="submit" [disabled]="!donorForm.valid" class="submit-btn">
            SUBMIT DONATION RECORD
          </button>
        </form>

        <div class="security-note">
          <p>🔒 Your information is only used for internal record-keeping and transparency.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .donate-page { 
      padding: 60px 20px; 
      background: #f4f7f6; 
      min-height: 100vh; 
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
    }
    .donate-container { 
      max-width: 700px; 
      margin: 0 auto; 
      background: white; 
      padding: 40px; 
      border-radius: 16px; 
      box-shadow: 0 15px 35px rgba(0,0,0,0.1); 
    }
    .form-header { text-align: center; margin-bottom: 30px; }
    .tag { color: #c9a55c; font-weight: bold; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; }
    h2 { color: #1a472a; margin: 10px 0; font-size: 28px; }
    
    .form-grid { 
      display: grid; 
      grid-template-columns: 1fr 1fr; 
      gap: 20px; 
      text-align: left;
    }
    .form-group { display: flex; flex-direction: column; }
    .form-group label { font-size: 13px; font-weight: 600; color: #444; margin-bottom: 8px; }
    
    input, select { 
      padding: 12px 15px; 
      border: 1.5px solid #e1e1e1; 
      border-radius: 8px; 
      font-size: 15px; 
      transition: border-color 0.3s;
    }
    input:focus, select:focus { border-color: #1a472a; outline: none; }

    .submit-btn { 
      width: 100%; 
      background: #1a472a; 
      color: #c9a55c; 
      padding: 18px; 
      border: none; 
      border-radius: 8px; 
      font-weight: 800; 
      font-size: 16px; 
      margin-top: 30px; 
      cursor: pointer; 
      transition: 0.3s;
    }
    .submit-btn:hover:not(:disabled) { background: #13331e; transform: translateY(-2px); }
    .submit-btn:disabled { background: #ccc; color: #666; cursor: not-allowed; }

    .security-note { margin-top: 25px; font-size: 12px; color: #888; text-align: center; }

    @media (max-width: 600px) {
      .form-grid { grid-template-columns: 1fr; }
      .donate-container { padding: 25px; }
    }
  `]
})
export class DonateComponent {
  teamMembers = [
    "Ali Naqvi", "Arsal Masood", "Adnan Shabbir", "Usman Pervaiz", 
    "M. Awais", "Ovais Daud", "Dr. Bilal Ahmed", "Khalid Khan", 
    "Saboor Ahmed", "Hasnain Khawaja", "Hamza Saleem", 
    "Hussain Ghafoor", "Asjad Masood"
  ];

  constructor(private http: HttpClient) {}

  onSubmit(form: any) {
    const donorData = form.value;
    // Updated to use the static IP for reliable connection
    this.http.post('/api/donations', donorData).subscribe({
      next: (res) => {
        alert('Jazakallah! Your donation record for ' + donorData.name + ' has been saved.');
        form.reset();
      },
      error: (err) => {
        console.error('Submission error:', err);
        alert('Could not connect to the server. Please check your internet or try again later.');
      }
    });
  }
}

