import { Component, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';

type Section = 'education' | 'experience';
type PortfolioItem = {
  title: string;
  overview: string;
  dates: string;
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TitleCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly activeSection = signal<Section | null>(null);

  readonly educationItems: PortfolioItem[] = [
    { title: 'Cardiff University', overview: 'BSc Computer Science (Year in Industry) First Class Honours.', dates: '2022 - 2026' },
    { title: 'Pembrokeshire College', overview: 'WJEC A-Level Computer Science (Grade A).', dates: '2020 - 2022' },
    { title: 'Ysgol Greenhill School', overview: 'WJEC A-Level Maths, Physics (Grade A*) and Welsh Baccalaureate (Grade A).', dates: '2015 - 2022' },
  ];

  readonly experienceItems: PortfolioItem[] = [
    { title: 'Experience item', overview: 'Add an overview of your experience here.', dates: 'Add dates' },
    { title: 'Experience item', overview: 'Add another role or project here.', dates: 'Add dates' },
  ];

  showSection(section: Section): void {
    this.activeSection.set(this.activeSection() === section ? null : section);
  }
}
