export function setSearchedMeals(state, meals) {
    state.searchedMeals = meals || []
}

export function setMealsByLetter(state, meals) {
    state.setMealsByLetter = meals || []
}

export function setMealsByIngredients(state, meals) {
    state.mealByIngredient = meals || []
}
