import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  model = {
    name: '', ingredients: []
  }
  allIngredients: any
  wraps = []
  proteins = []
  veggies = []
  cheeses = []
  sauces = []

  constructor(private httpClicent: HttpClient, private router: Router) { }

  ngOnInit() {
    this.httpClicent.get('http://localhost:8080/ingredientsx').subscribe(data => {
      this.allIngredients = data
      this.wraps = this.allIngredients.filter(ingredient => ingredient.type === 'WRAP')
      this.proteins = this.allIngredients.filter(ingredient => ingredient.type === 'PROTEIN')
      this.veggies = this.allIngredients.filter(ingredient => ingredient.type === 'VEGGIES')
      this.cheeses = this.allIngredients.filter(ingredient => ingredient.type === 'CHESSE')
      this.sauces = this.allIngredients.filter(ingredient => ingredient.type === 'SAUCES')
    })
  }

  onSubmit() {
    console.log("submit...");
    this.router.navigate(['/home'])
  }

}
