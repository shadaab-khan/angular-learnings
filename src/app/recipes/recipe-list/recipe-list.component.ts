import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a Test', 
    'https://get.pxhere.com/photo/liquid-sweet-home-bowl-food-cooking-ingredient-produce-brown-recipe-chocolate-gourmet-dessert-cuisine-delicious-spoon-chef-cook-festive-fudge-chocolate-cake-cocoa-icing-candy-melted-chocolate-pudding-chocolate-ice-cream-ganache-chocolate-brownie-1046088.jpg'),
    
    new Recipe('A Test Recipe', 'This is a Test', 
    'https://get.pxhere.com/photo/liquid-sweet-home-bowl-food-cooking-ingredient-produce-brown-recipe-chocolate-gourmet-dessert-cuisine-delicious-spoon-chef-cook-festive-fudge-chocolate-cake-cocoa-icing-candy-melted-chocolate-pudding-chocolate-ice-cream-ganache-chocolate-brownie-1046088.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
