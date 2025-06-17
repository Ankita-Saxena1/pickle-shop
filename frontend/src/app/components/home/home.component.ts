import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  slides = [
    {
      title: 'Latest Products',
      text: 'Check out our newest pickle creations!',
      button: 'Shop Now',
      link: '/shop',
      image: 'assets/images/bestseller.jpg'
    },
    {
      title: 'Our Blog',
      text: 'Read tips, stories, and more about pickles.',
      button: 'Visit Blog',
      link: '/blog',
      image: 'assets/images/blog.jpg'
    },
    {
      title: 'Recipes',
      text: 'Discover delicious recipes using our pickles.',
      button: 'See Recipes',
      link: '/recipes',
      image: 'assets/images/recipe.jpg'
    },
    {
      title: 'Discounts',
      text: 'Special offers on selected pickles. Don’t miss out!',
      button: 'Get Discount',
      link: '/shop',
      image: 'assets/images/discount.jpg'
    }
  ];
  currentSlide = 0;
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 4000); // 4 seconds per slide
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
