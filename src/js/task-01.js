// Отримва доступ до списку(ul)
const categoriesList = document.querySelector("#categories")
// Отримав доступ до (items)
const categoriesItems = categoriesList.querySelectorAll(".item")

console.log("Number of categories :", categoriesItems.length);

categoriesItems.forEach((category) => {
    // Отримав доступ до (h2)
    const categoryName = category.querySelector("h2").textContent;
    console.log("Category:", categoryName);
    // Отримав доступ до всіх (li)
    const categoryItemLength = category.querySelectorAll("li").length
    console.log("Elements:", categoryItemLength);
})
