
const products = [
    {
        name: 'Culebra, Puerto Rico',
        price: 1800,
        stars: 4.8,
        reviews: 129, 
        seller: 'aichitame Tours',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Entrance_to_Culebra%27s_Ensenada_Honda.jpg'
    },
    {
        name: 'Los Roques, Venezuela',
        price: 1599,
        stars: 4.6,
        reviews: 78,
        seller: 'aichitame Tours',
        image: 'https://ospreyexpeditions.com/wp-content/uploads/2024/10/Venezuela-Los-Roques-Angel-Falls-Orinoco-Roraima-Caribbean-honeymoon-9.jpg'
    },
    {
        name: 'Palma de Mallorca, Spain',
        price: 249,
        stars: 4.3,
        reviews: 226,
        seller: 'aichitame Tours',
        image: 'https://www.posadaterrasanta.com/wp-content/uploads/2024/02/Post-45-Playa-Posada-Terra-Santa.jpg'
    },

    {
        name: 'Santa Marta, Colombia',
        price: 899,
        stars: 4.6,
        reviews: 138,
        seller: 'aichitame Tours',
        image: 'https://aem-all.accor.com/content/dam/all/hubs/americas/latam/generic-images/all-magazine/buceo-en-santa-marta-2024-1.jpg'
    },
    {
        name: 'Majagual, Nicaragua',
        price:899,
        stars: 4.3,
        reviews: 78,
        seller: 'aichitame Tours',
        image: 'https://images.squarespace-cdn.com/content/v1/59c96e9abce176caf5324bf5/1550263428954-XOQ8PIQR2YWREHC48T3I/Playa+Majagual+walks.jpg'
    },
    {
        name: 'Bolonia, Spain',
        price: 159,
        stars: 4.3,
        reviews: 658,
        seller: 'aichitame Tours',
        image: 'https://www.cadizturismo.com/storage/app/media/IMAGENES/PLAYAS/Bolonia/Playa%20de%20Bolonia%20-%20Tarifa.jpg'
    },
    {
        name: 'Vieques, Puerto Rico',
        price: 1799,
        stars: 4.5,
        reviews: 178,
        seller: 'aichitame Tours',
        image: 'https://cdn.prod.website-files.com/63232a8b70d6f033655c1d90/64387a2ceb8eab5f13a2162e_PR%20plus%20Visiting%20Vieques.jpg'
    },
    {
        name: 'Cayos Cochinos, Honduras',
        price: 1800,
        stars: 4.3,
        reviews: 125,
        seller: 'aichitame Tours',
        image: 'https://image-tc.galaxy.tf/wijpeg-437zil413ylbfgw8ynwkldj7v/cayos-cochinos-aguas-turquesa_standard.jpg?crop=103%2C0%2C643%2C482',
    },
    {
        name: 'Playa Larga, Cuba',
        price: 1399,
        reviews: 230,
        seller: 'aichitame Tours',
        image:'https://images.myguide-cdn.com/cuba/companies/long-beach/large/long-beach-634717.jpg'
    },
    {
        name: 'Ureka, Guinea Ecuatorial',
        price: 850,
        stars: 4.4,
        reviews: 189,
        seller: 'aichitame Tours',
        image: 'https://ahoraeg.com/wp-content/uploads/2025/03/Captura-de-pantalla-2025-03-04-005525.png'
    },
    {
        name: 'Los Gigantes, Tenerife, Spain',
        price: 399,
        stars: 4.8,
        reviews: 358,
        seller: 'aichitame Tours',
        image: 'https://www.barcelo.com/guia-turismo/wp-content/uploads/tenerife-gigantes.jpg'
    },
    {
        name: 'Punta Cana, Dominican Republic',
        price: 1199,
        stars: 4.3,
        reviews: 256,
        seller: 'aichitame Tours',
        image: 'https://www.viajandoporelmundomundial.com/wp-content/uploads/2022/03/playas-dominicana1.jpg'
    },

]

  // Render de productos
function renderProducts(list) {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = ""; // limpiar antes de renderizar
  
    list.forEach(product => {
      const card = document.createElement("article");
      card.classList.add("product-card");
  
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
          <h3>${product.name}</h3>
          <p class="price">${product.price} €</p>
          <p>⭐ ${product.stars} | ${product.reviews} opiniones</p>
          <p>Vendido por: ${product.seller}</p>
        </div>
      `;
  
      productsContainer.appendChild(card);
    });
  }
  
  // Filtro por búsqueda
  document.getElementById("search").addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = products.filter(p => 
      p.name.toLowerCase().includes(searchTerm) ||
      p.seller.toLowerCase().includes(searchTerm)
    );
    renderProducts(filtered);
  });
  
  // Inicializar
  renderProducts(products);