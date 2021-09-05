import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Shish Kebab',
            'This is simply a test',
            'https://cdn.pixabay.com/photo/2014/08/14/14/21/shish-kebab-417994_1280.jpg',
            [
                new Ingredient('Chicken', 1),
                new Ingredient('Yogurt', 3)
            ]),
        new Recipe(
            'Grilled Marinated Meat',
            'This is simply a test 2',
            'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_1280.jpg',
            [
                new Ingredient('Beef steak', 1),
                new Ingredient('Lemon', 2),
                new Ingredient('Pepper', 3)
            ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}