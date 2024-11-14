import menu from "./database.js";

const menuContainer = document.getElementById("menu-container");

const filterButton = document.querySelectorAll(".filter-btn");

document.addEventListener("DOMContentLoaded", () => {
  displayMenu(menu);
});
//Sayfa yüklendiğinde menuyü göstermek için
function displayMenu(menuItems) {
  // console.log(menuItems);
  let dispMenu = menuItems.map(
    (menuItem) => `
   <div
   class="d-flex align-items-center gap-3 flex-column flex-md-row my-2"
   id="card"
  >
   <img
     src=${menuItem.img}
     alt=""
     id="image"
     class="rounded shadow"
   />
   <div>
     <div class="d-flex justify-content-between">
       <h5>${menuItem.title}</h5>
       <p>${menuItem.price} &#8378;</p>
     </div>
     <p class="lead">
       ${menuItem.desc}
     </p>
   </div>
  </div>
   `
  );
  dispMenu = dispMenu.join("");
  menuContainer.innerHTML = dispMenu;
}

filterButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    const category = e.target.dataset.id;
    searchCategory(category);
  });
});


function searchCategory(categoryInfo) {  
    const filteredMenu = menu.filter(
        (menuItem) => menuItem.category === categoryInfo
    );

    if (categoryInfo === "all") {
        displayMenu(menu);

  }
  else {

    displayMenu(filteredMenu);
}
}