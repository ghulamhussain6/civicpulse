import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  template: `
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

    <nav class="cp-nav">
      <div class="nav-content">
        <a routerLink="/" class="cp-logo">CIVICPULSE</a>
        <div class="nav-links">
          <a href="#mission">Our Mission</a>
          <a href="#impact">Impact</a>
          <a href="#gallery">Gallery</a>
          <a routerLink="/donate" class="cp-btn-nav">SUPPORT A FAMILY</a>
        </div>
      </div>
    </nav>

    <header class="cp-hero">
      <div class="hero-overlay">
        <div class="hero-text-box">
          <h1 class="hero-title">10 Years of Community Service.</h1>
          <p class="hero-desc">
            Alhamdulillah, our Ramadan Drive 2026 has successfully concluded, providing essential food rations 
            to 250 verified families in need. You can still support our ongoing welfare initiatives throughout the year.
          </p>
          <a routerLink="/donate" class="cp-btn-large">RECORD A DONATION</a>
        </div>
      </div>
    </header>

    <section id="impact" class="cp-impact-section">
      <div class="impact-grid">
        <div class="impact-card">
          <h2 class="impact-stat">250</h2>
          <p class="impact-label">Families Served</p>
        </div>
        <div class="impact-card">
          <h2 class="impact-stat">10</h2>
          <p class="impact-label">Years of Service</p>
        </div>
        <div class="impact-card">
          <h2 class="impact-stat">6,500</h2>
          <p class="impact-label">PKR Base Unit Cost</p>
        </div>
      </div>
    </section>

    <section id="mission" class="cp-content-split">
      <div class="content-text">
        <span class="content-tag">Direct Impact</span>
        <h3>100% Volunteer Led. No Admin Costs.</h3>
        <p>Every single rupee donated goes directly to the food supplies.</p>
        <p>
          Our team of dedicated volunteers handles the identification, purchase, 
          and distribution personally to ensure your Amanat reaches the right hands.
        </p>
        <a href="#verification" class="cp-text-link">View our verification process →</a>
      </div>
    </section>

    <footer class="cp-footer">
      © 2026 CivicPulse Volunteer Team. Serving Rawalpindi & Islamabad.
    </footer>
  `,
  styleUrls: ['./landing.component.css'],
  encapsulation: ViewEncapsulation.None // Forces styles to apply cleanly across the layout window
})
export class LandingComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
