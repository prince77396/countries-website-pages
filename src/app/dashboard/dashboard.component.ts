import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  isLightTheme: boolean = true;

  ngOnInit(): void {
    // Load the saved theme from localStorage, default to light theme
    const savedTheme = localStorage.getItem('theme');
    this.isLightTheme = savedTheme === 'light' || savedTheme === null;
    this.updateTheme();
  }

  toggleTheme(): void {
    this.isLightTheme = !this.isLightTheme;
    localStorage.setItem('theme', this.isLightTheme ? 'light' : 'dark');
    this.updateTheme();
  }

  updateTheme(): void {
    const body = document.body;
    if (this.isLightTheme) {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    }
  }
}
