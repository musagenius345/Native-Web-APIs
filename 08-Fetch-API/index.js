const API_URL = 'https://dummyjson.com/products'
const productList = document.querySelector('.productList')

function createProductElements() {
  // const article = document.createElement('article')
  const productImage = document.createElement('img')
  const productName = document.createElement('h3')
  const productPrice = document.createElement('p')
  const productDetails = document.createElement('p')

  // Classes
  productImage.classList.add('productImage')
  productName.classList.add('productName')
  productPrice.classList.add('productPrice')
  productDetails.classList.add('productDetail')

  return [productImage, productName, productPrice, productDetails]
}


async function fetchData(url) {
  const res = await fetch(url)
  const data = await res.json()
  return data
}


async function handleData() {
  const productData = await fetchData(API_URL)
  const products = await productData.products
  productList.setAttribute('aria-busy', 'false')
  products.forEach(el => {
    const productContainer = document.createElement('article')
    const [productImage, productName, productPrice, productDetails] = createProductElements()
    productImage.setAttribute('src', el.images[0])
    productName.textContent = el.title
    productName.textContent = el.title
    productPrice.textContent = `$${el.price}`
    productDetails.textContent = el.description

    productContainer.append(productImage, productName, productPrice, productDetails)

    productList.append(productContainer)
  })
}

handleData()