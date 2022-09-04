const loadcategory = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.data.news_category))
}


const displayCategories = news_category => {
    const newscontainer = document.getElementById('news-category');
    news_category.forEach(category => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('d-inline')
        newDiv.innerHTML = 
        `<a href = "#" class = 'px-4 ms-2'>${category.category_name}</a>`
      newscontainer.appendChild(newDiv);
    })
}



const loadcard = () => {
    fetch('https://openapi.programming-hero.com/api/news/category/01')
    .then(res => res.json())
    .then(data => displaycards(data.data))
    
}


const displaycards = (cards) => {
    const cardcontainer = document.getElementById('card-container');
  cards.forEach(card => {
    const newcard = document.createElement('div');

    console.log(card);
    newcard.innerHTML = 
   `<div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${card.image_url}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${card.title}</h5>
          <p class="card-text module">${card.details.slice(0,50)}</p>
          <p class="card-text"><small class="text-muted">${card.author.published_date}</small></p>
        </div>
      </div>
    </div>
  </div>`
    cardcontainer.appendChild(newcard)
  });

}
loadcategory()
loadcard();