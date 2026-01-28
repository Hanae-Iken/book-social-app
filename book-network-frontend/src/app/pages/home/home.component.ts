import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  features = [
    {
      icon: '📚',
      title: 'Partagez vos livres',
      description: 'Créez votre bibliothèque virtuelle et partagez vos lectures préférées'
    },
    {
      icon: '🤝',
      title: 'Communauté active',
      description: 'Connectez-vous avec des passionnés de lecture du monde entier'
    },
    {
      icon: '⭐',
      title: 'Notez & Commentez',
      description: 'Donnez votre avis et découvrez les meilleures recommandations'
    }
  ];

  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
