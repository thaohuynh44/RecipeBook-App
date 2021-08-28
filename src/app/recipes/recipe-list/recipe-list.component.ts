import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2014/08/14/14/21/shish-kebab-417994_1280.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_1280.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
