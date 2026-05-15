import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  template: `
    <!-- Top Announcement Bar -->
    <div class="cp-top-bar">
      <span>🌙 SERVING DESERVING FAMILIES SINCE 2015 — JAZAKALLAH O KHEIR 🌙</span>
    </div>

    <!-- Navigation -->
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

    <!-- Hero Section -->
    <section class="cp-hero">
      <div class="hero-overlay">
        <div class="hero-text-box">
          <h1 class="hero-title">10 Years of Community Service.</h1>
          <p class="hero-desc">
            This Ramadan, join the CivicPulse volunteer team as we aim to provide 
            essential food rations to 250 verified families in need.
          </p>
          <div class="hero-cta-group">
            <a routerLink="/donate" class="cp-btn-large">SPONSOR A RASHAN PACK</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Stats -->
    <section id="impact" class="cp-impact-section">
      <div class="impact-grid">
        <div class="impact-card">
          <h2 class="impact-stat">250</h2>
          <p class="impact-label">Families Goal</p>
        </div>
        <div class="impact-card">
          <h2 class="impact-stat">10</h2>
          <p class="impact-label">Years of Service</p>
        </div>
        <div class="impact-card">
          <h2 class="impact-stat">6,500</h2>
          <p class="impact-label">PKR Per Pack</p>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section id="mission" class="cp-content-split">
      <div class="content-text">
        <span class="content-tag">Direct Impact</span>
        <h3>100% Volunteer Led. No Admin Costs.</h3>
        <p>
          Every single rupee donated goes directly to the food supplies. 
          Our team of dedicated volunteers handles the identification, purchase, 
          and distribution personally to ensure your Amanat reaches the right hands.
        </p>
        <a routerLink="/donate" class="cp-text-link">View our verification process →</a>
      </div>
      <div class="content-media">
        <img src="assets/ramadan-compaign-12.jpeg" alt="CivicPulse Mission">
      </div>
    </section>

    <!-- Footer -->
    <footer class="cp-footer">
      <p>© 2026 CivicPulse Volunteer Team. Serving Rawalpindi & Islamabad.</p>
    </footer>
  `,
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
