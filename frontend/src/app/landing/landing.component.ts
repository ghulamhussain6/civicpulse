import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  template: `
    <div class="header-quote-bar">
      🌙 SERVING DESERVING FAMILIES SINCE 2015 — JAZAKALLAH O KHEIR 🌙
    </div>

    <div class="ticker-wrap">
      <div class="ticker">
        <div class="ticker__item status-closed"><strong>CLOSED:</strong> Ramadan Drive 2026</div>
        <div class="ticker__item status-ongoing"><strong>ONGOING:</strong> Monthly Ration Support</div>
        <div class="ticker__item status-ongoing"><strong>ONGOING:</strong> General Support (Educational Expenses, Health Support, Marriage Expenses Support)</div>
        
        <div class="ticker__item status-closed"><strong>CLOSED:</strong> Ramadan Drive 2026</div>
        <div class="ticker__item status-ongoing"><strong>ONGOING:</strong> Monthly Ration Support</div>
        <div class="ticker__item status-ongoing"><strong>ONGOING:</strong> General Support (Educational Expenses, Health Support, Marriage Expenses Support)</div>
      </div>
    </div>

    <div class="main-hero">
      <div class="branding">CIVICPULSE</div>
      
      <nav class="nav-links">
        <a href="#mission">Our Mission</a>
        <a href="#impact">Impact</a>
        <a href="#gallery">Gallery</a>
        <a routerLink="/donate" class="btn-nav-donate">SUPPORT A FAMILY</a>
      </nav>

      <div class="hero-content">
        <h1>10 Years of Community Service.</h1>
        <p>
          Alhamdulillah, our Ramadan Drive 2026 has successfully concluded, providing essential food rations 
          to 250 verified families in need. You can still support our ongoing welfare initiatives throughout the year.
        </p>
        <a routerLink="/donate" class="cta-button">RECORD A DONATION</a>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <h3>250</h3>
          <p>Families Served</p>
        </div>
        <div class="stat-card">
          <h3>10</h3>
          <p>Years of Service</p>
        </div>
        <div class="stat-card">
          <h3>6,500</h3>
          <p>PKR Base Unit Cost</p>
        </div>
      </div>

      <div class="info-section">
        <h2>Direct Impact — 100% Volunteer Led. No Admin Costs.</h2>
        <p>Every single rupee donated goes directly to the food supplies.</p>
        <p>
          Our team of dedicated volunteers handles the identification, purchase, 
          and distribution personally to ensure your Amanat reaches the right hands.
        </p>
        <a href="#verification" class="inline-link">View our verification process →</a>
      </div>

      <footer>
        © 2026 CivicPulse Volunteer Team. Serving Rawalpindi & Islamabad.
      </footer>
    </div>
  `,
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
