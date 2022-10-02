import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://th.bing.com/th/id/OIP._wkFYoBWPQevSjqK5RtIfgHaId?w=186&h=212&c=7&r=0&o=5&pid=1.7'), 
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://th.bing.com/th/id/OIP._wkFYoBWPQevSjqK5RtIfgHaId?w=186&h=212&c=7&r=0&o=5&pid=1.7')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
