// //"use scrict";
const selectElemById = document.querySelector("#categories").childElementCount;
console.log(`В списке ${selectElemById} категории.`);

const titles = document.querySelectorAll("h2");
const titlesArray = Array.from(titles).map(title => title.textContent);

const countElemsInUl = document.querySelectorAll(".item ul");
const countElemToArray = Array.from(countElemsInUl).map(
  el => el.childElementCount
);

console.log(
  `В категории: ${titlesArray[0]}, количество элементов: ${countElemToArray[0]},
  В категории: ${titlesArray[1]}, количество элементов: ${countElemToArray[1]},
  В категории: ${titlesArray[2]}, количество элементов: ${countElemToArray[2]}`
);

// ________________________________or

const categoriesList = document.getElementById("categories");
console.log(`В списке ${categoriesList.childElementCount} категории`);

[...categoriesList.children].map(item => {
  console.log(
    `В категорииhhhh: ${item.children[0].textContent},количество элементов: ${item.children[1].childElementCount}`
  );
});
