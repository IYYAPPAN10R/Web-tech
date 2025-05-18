// Fetch and display foods
async function loadFoods() {
    const response = await fetch('/api/foods');
    const foods = await response.json();
    const foodList = document.getElementById('food-list');
    foodList.innerHTML = '';
  
    foods.forEach(food => {
      foodList.innerHTML += `
        <div class="food-card">
          <img src="/uploads/${food.image}" alt="${food.name}">
          <h3>${food.name}</h3>
          <p>$${food.price}</p>
          <p>${food.description}</p>
        </div>
      `;
    });
  }
  
  // Load foods on page load
  window.addEventListener('DOMContentLoaded', loadFoods);