const fetchCatagories = () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then(response => response.json())
    .then(data => {
      showCatagories(data.data);
    });
};
const showCatagories = data => {
  //   console.log(data);
  const catagories = document.getElementById("catagories-container");
  data.news_category.forEach(signalCatagories => {
    catagories.innerHTML += `
        <a href="# " onclick="fetchCatagoryNews('${signalCatagories.category_id}','${signalCatagories?.category_name}')" class="nav-ling">${signalCatagories?.category_name}</a>
        
        `;
  });
};

const fetchCatagoryNews = (category_id, category_name) => {
  //   console.log(category_id, category_name);
  const url = ` https://openapi.programming-hero.com/api/news/category/${category_id}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // console.log(data, category_name);
      showAllNews(data, category_name);
    });
};

const showAllNews = (data, category_name) => {
  console.log(data.data);
  document.getElementById("news-couns").innerHTML = data.data.length;
  document.getElementById("category-name").innerHTML = category_name;
};
