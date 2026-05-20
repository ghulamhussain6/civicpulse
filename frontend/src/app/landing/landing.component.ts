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
          <a href="#team">Meet Our Team</a> 
          <a routerLink="/donate" class="cp-btn-nav">DONATE</a>
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
          <h2 class="impact-stat">2500</h2>
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

    <section id="team" class="cp-team-section">
      <div class="team-header">
        <span class="content-tag">The Driving Force</span>
        <h2>Meet Our Volunteer Team</h2>
        <p>A structured, 100% dedicated collective volunteering across Rawalpindi & Islamabad since 2015.</p>
      </div>
      
      <div class="team-grid">
        <div class="team-card" *ngFor="let member of teamData">
          <div class="avatar-container">
            <img *ngIf="member.image" [src]="member.image" [alt]="member.name" class="profile-img">
            <div *ngIf="!member.image" class="avatar-placeholder-text">
              <span>{{ member.initials }}</span>
            </div>
          </div>
          <h3>{{ member.name }}</h3>
          <span class="member-role">{{ member.role }}</span>
          <p class="member-desc">{{ member.desc }}</p>
        </div>
      </div>
    </section>

    <footer class="cp-footer">
      © 2026 CivicPulse Volunteer Team. Serving Rawalpindi & Islamabad.
    </footer>
  `,
  styleUrls: ['./landing.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {
  // FIXED: Added the leading forward slash '/' to make these paths absolute root-level configurations
  teamData = [
    { name: "Ali Naqvi", initials: "AN", role: "Drive Coordinator", desc: "Manages overall supply chain procurement, inventory sorting, and community partner alignments.", image: "" },
    { name: "Arsal Masood", initials: "AM", role: "Field Operations Lead", desc: "Oversees ground-level neighborhood assessment networks and verification procedures.", image: "" },
    { name: "Adnan Shabbir", initials: "AS", role: "Logistics Specialist", desc: "Directs secure transport, delivery routing, and core distribution site management.", image: "/assets/adnanshabbir.jpeg" },
    { name: "Asjad Masood", initials: "AJ", role: "Database Management", desc: "Coordinates dynamic transparency records, referral logging, and internal record sync.", image: "" },
    { name: "Dr. Bilal Ahmed", initials: "BA", role: "Medical Relief Officer", desc: "Assists family support screening and health emergency relief assessments.", image: "/assets/bilalahmed.jpeg" },
    { name: "Usman Pervaiz", initials: "UP", role: "Verification Specialist", desc: "Conducts personal case validation checks to ensure zero-overhead data security.", image: "" },
    { name: "Hussain Ghafoor", initials: "HG", role: "Core Team Volunteer", desc: "Assists in tracking operational on-site tasks, resource mapping, and supply distributions.", image: "/assets/hussainghafoor.jpeg" },
    { name: "Muhammad Awais", initials: "MA", role: "Community Outreach Lead", desc: "Coordinates field messaging, local liaison networks, and family distribution inquiries.", image: "" },
    { name: "Ovais Daud", initials: "OD", role: "Data Manager & Field Analyst", desc: "Manages intake assessment registries, data formatting filters, and logic verification mapping.", image: "" },
    { name: "Khalid Khan", initials: "KK", role: "Resource Mobilization Specialist", desc: "Oversees field supply handling, storage operations, and dispatch schedule management.", image: "/assets/khalidkhan.jpeg" },
    { name: "Saboor Ahmed", initials: "SA", role: "Core Team Volunteer", desc: "Supports field coordination, local demographic mapping, and ground delivery distribution.", image: "" },
    { name: "Hasnain Khawaja", initials: "HK", role: "Project Innovation & Planning", desc: "Assists with long-term program planning metrics and direct system optimization pipelines.", image: "" },
    { name: "Hamza Saleem", initials: "HS", role: "Core Team Volunteer", desc: "Contributes to on-site volunteer operations, logistics tracking, and verified family distributions.", image: "" }
  ];

  constructor() {}
  ngOnInit() {}
}