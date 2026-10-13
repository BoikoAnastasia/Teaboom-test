document.querySelectorAll('.main__info').forEach((main) => {
  const packagingCards = main.querySelectorAll('.packaging__card');
  
  const productArticle = main.querySelector('.product__article span');
  const productPackaging = main.querySelector('.product__packaging span');
  const productPrice = main.querySelector('.product__price span');
  const productSale = main.querySelector('.product__sale');

  const toggleActiveClass = (activeCard) => {
    packagingCards.forEach((card) => {
      card.classList.remove('active')
    })
    activeCard.classList.add('active')
  }

  const changeDataCurrentProfuct = (targetCard) => {
  const articleArray = targetCard.querySelector('.packaging__card-article').textContent.trim().split(/\s+/);
  const articleSecondElement = articleArray[1];

    productArticle.textContent = articleSecondElement;
    productPackaging.textContent =  targetCard.querySelector('.packaging__card-gram').textContent;
    productPrice.textContent =  targetCard.querySelector('.packaging__card-price').textContent;
    productSale.textContent =  targetCard.querySelector('.packaging__card-sale').textContent;
  }

  packagingCards.forEach((card) => {
    const cart = card.querySelector('.packaging__card-cart');
    const count = card.querySelector('.packaging__card-cart-count');

    card.addEventListener('click', (e) => {
      const targetCard = e.currentTarget;

      if (targetCard.classList.contains('active')) return;

      changeDataCurrentProfuct(targetCard)
      toggleActiveClass(targetCard)

    })
    
    cart.addEventListener('click', (e) => {
      e.stopPropagation();
      let currentCount = Number(count.textContent);
      count.textContent = currentCount + 1;
    })
  })
})