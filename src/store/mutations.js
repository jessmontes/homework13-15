export function setSearchedMeals(state, meals) {
    state.searchedMeals = meals || []
}

export function setMealsByLetter(state, meals) {
    state.setMealsByLetter = meals || []
}

export function setMealsByIngredient(state, meals) {
    state.mealByIngredient = meals || []
}
