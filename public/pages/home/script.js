const properties = [
      { id: 1, city: "Abuja", description: "Apartment in Garki", price: 6500000, image: "styles/property image/Frame 67 (1).png", rating: 4.0 },
      { id: 2, city: "Abuja", description: "Apartment in Garki", price: 2500000, image: "styles/property image/Frame 67 (2).png", rating: 4.0 },
      { id: 3, city: "Abuja", description: "Apartment in Garki", price: 3500000, image: "styles/property image/Frame 67.png", rating: 5.0 },
      { id: 4, city: "Abuja", description: "Apartment in Garki", price: 9500000, image: "styles/property image/Frame 68 (1).png", rating: 5.0 },
      { id: 5, city: "Ikeja", description: "Apartment in Ikeja", price: 10500000, image: "styles/property image/Frame 68 (2).png", rating: 5.0 },
      { id: 6, city: "Lekki", description: "Apartment in Lekki", price: 14500000, image: "styles/property image/Frame 68.png", rating: 4.0 },
      { id: 7, city: "Ikoyi", description: "Apartment in Ikoyi", price: 8500000, image: "styles/property image/Frame 69 (1).png", rating: 3.0 },
      { id: 8, city: "V.I", description: "Apartment in V.I", price: 15500000, image: "styles/property image/Frame 69 (2).png", rating: 4.0 },
      { id: 9, city: "V.I", description: "Apartment in V.I", price: 15500000, image: "styles/property image/Frame 69.png", rating: 5.0 },
      { id: 10, city: "Lekki", description: "Apartment in Lekki", price: 15500000, image: "styles/property image/Frame 70 (1).png", rating: 3.0 },
      { id: 11, city: "Lekki", description: "Apartment in Lekki", price: 12500000, image: "styles/property image/Frame 70 (2).png", rating: 4.0 },
      { id: 12, city: "Lekki", description: "Apartment in Lekki", price: 14500000, image: "styles/property image/Frame 70.png", rating: 4.0 }
    ];

    // Search button event
    document.querySelector('.search-bar button').addEventListener('click', () => {
      const locationInput = document.querySelector('.search-bar input[placeholder="Location"]').value.trim().toLowerCase();
      const descriptionInput = document.querySelector('.search-bar input[placeholder="Description"]').value.trim().toLowerCase();
      const budgetInput = document.querySelector('.search-bar input[placeholder="Budget"]').value.trim();

      // Parse budget, remove non-digits
      const budget = Number(budgetInput.replace(/[^0-9]/g, ''));

      // Filter properties matching all criteria
      const filteredProperties = properties.filter(prop => {
        const cityMatch = locationInput ? prop.city.toLowerCase().includes(locationInput) : true;
        const descMatch = descriptionInput ? prop.description.toLowerCase().includes(descriptionInput) : true;
        const budgetMatch = budget ? prop.price <= budget : true;
        return cityMatch && descMatch && budgetMatch;
      });

      renderSearchResults(filteredProperties);
    });

    function renderSearchResults(properties) {
      const searchSection = document.getElementById('search-results');
      const track = document.getElementById('search-track');
      track.innerHTML = '';

      if (properties.length === 0) {
        track.textContent = 'No properties found.';
      } else {
        properties.forEach(prop => {
          const card = document.createElement('a');
          card.className = 'card';
          card.href = "#";
          card.tabIndex = 0;
          card.innerHTML = `
            <img src="${prop.image}" alt="${prop.description}" loading="lazy" />
            <p>${prop.description}</p>
            <span>₦${(prop.price / 1e6).toFixed(1)}m ★ ${prop.rating.toFixed(1)}</span>
          `;
          track.appendChild(card);
        });
      }

      searchSection.style.display = 'block';
      if (properties.length > 0) {
        searchSection.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Optional: Carousel button logic (prev/next) for each carousel section

    function setupCarousels() {
      const carousels = document.querySelectorAll('.carousel');
      carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');
        if (!track || !prevBtn || !nextBtn) return;

        prevBtn.addEventListener('click', () => {
          track.scrollBy({ left: -250, behavior: 'smooth' });
        });
        nextBtn.addEventListener('click', () => {
          track.scrollBy({ left: 250, behavior: 'smooth' });
        });
      });
    }
    setupCarousels();
