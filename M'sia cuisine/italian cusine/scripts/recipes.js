document.addEventListener("DOMContentLoaded", function() {
    const recipes = document.querySelectorAll('.recipe');
    
    recipes.forEach(recipe => {
        recipe.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
});
