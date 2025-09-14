// Monastery data with Google Maps embed URLs and 3D virtual tours
const monasteries = [
  {
    name: "Rumtek Monastery",
    img: "rumtek.jpg",
    description: "Rumtek Monastery, also known as the Dharmachakra Centre, is one of the largest and most significant monasteries in Sikkim. It serves as the seat of the Karma Kagyu lineage outside Tibet and features stunning architecture, intricate murals, and sacred artifacts.",
    details: {
      location: "East Sikkim, near Gangtok",
      view: "Mountain",
      language: "Tibetan, Nepali, English",
      bestTime: "October to June",
      thingsToDo: "Explore the main shrine, witness prayer ceremonies, visit the Golden Stupa, enjoy panoramic views of Gangtok",
      virtualTour: "https://www.google.com/maps/embed?pb=!4v1757870037677!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0VndFRIUmc.!2m2!1d27.28862027053181!2d88.56148053028257!3f240.2654185008951!4f-17.043278157189107!5f0.7820865974627469",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.8!2d88.5584!3d27.2946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a56a5805eaab%3A0x397956a7f86753cf!2sRumtek%20Monastery!5e0!3m2!1sen!2sin!4v1694857200000!5m2!1sen!2sin"
    }
  },
  {
    name: "Pemayangtse Monastery",
    img: "pemayangtse.png",
    description: "Pemayangtse Monastery is one of the oldest monasteries in Sikkim, dating back to the 17th century. It belongs to the Nyingma sect of Tibetan Buddhism and is renowned for its ancient scriptures, sculptures, and the seven-tiered painted wooden structure depicting Guru Rinpoche's heavenly abode.",
    details: {
      location: "Pelling, West Sikkim",
      view: "Valley",
      language: "Tibetan, English",
      bestTime: "September to June",
      thingsToDo: "Admire the ancient architecture, view the sacred sculptures, enjoy sunset views over Kanchenjunga, visit nearby Rabdentse ruins",
      virtualTour: "https://www.google.com/maps/embed?pb=!4v1757869357381!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0U3SXFEeFFF!2m2!1d27.30426034149243!2d88.30153660084635!3f168.19301444672794!4f5.135018825762245!5f0.7820865974627469",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14181.256807769534!2d88.253716!3d27.30335355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6842d294c8d71%3A0x5ff926244a424543!2sPemayangtse%20Monastery%2C%20Sikkim%20737111!5e0!3m2!1sen!2sin!4v1757861586181!5m2!1sen!2sin"
    }
  },
  {
    name: "Tashiding Monastery",
    img: "tashi.jpeg",
    description: "Tashiding Monastery is considered one of the holiest monasteries in Sikkim, perched on top of a hill between the Rathong and Rangeet rivers. It is believed that merely seeing this monastery cleanses one of all sins, making it an important pilgrimage site.",
    details: {
      location: "West Sikkim, Tashiding",
      view: "River Valley",
      language: "Tibetan, Nepali",
      bestTime: "March to June and September to November",
      thingsToDo: "Participate in prayer ceremonies, witness the Bhumchu festival, enjoy panoramic views of the valley, meditate in the serene environment",
      virtualTour: "https://www.google.com/maps/embed?pb=!4v1757870649412!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0V6c08zSWc.!2m2!1d27.30891943909927!2d88.29787983128344!3f206.71138083116972!4f-2.7968718297312023!5f0.7820865974627469",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3545.136037199192!2d88.2978746!3d27.308930800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e685fca06dc171%3A0x92150f5f129db887!2sTashiding%20Monastery!5e0!3m2!1sen!2sin!4v1757861665342!5m2!1sen!2sin"
    }
  },
  {
    name: "Enchey Monastery",
    img: "enchey.jpeg",
    description: "Enchey Monastery is a 200-year-old monastery located near Gangtok, belonging to the Nyingma order of Vajrayana Buddhism. The name 'Enchey' means 'solitary temple', and it is believed that the monastery was built at a spot blessed by Lama Druptob Karpo, a tantric master known for his flying powers.",
    details: {
      location: "Gangtok, East Sikkim",
      view: "City",
      language: "Tibetan, Nepali, English",
      bestTime: "Throughout the year",
      thingsToDo: "Attend the Chaam dance during Losar, enjoy the peaceful ambiance, admire the traditional architecture, view ancient paintings and scriptures",
      virtualTour: "https://www.google.com/maps/embed?pb=!4v1757870787087!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0pzTXEzOWdF!2m2!1d27.33593677395685!2d88.61916587167339!3f131.40394694535752!4f-25.67932394758651!5f0.7820865974627469",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.2728578900474!2d88.6191659!3d27.335936799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6ba848fe4b38f%3A0xf1c23957008e31e8!2sEnchey%20Monastery!5e0!3m2!1sen!2sin!4v1757861757970!5m2!1sen!2sin"
    }
  },
  {
    name: "Phodong Monastery",
    img: "phodong.jpg",
    description: "Phodong Monastery is one of the six most important monasteries in Sikkim, belonging to the Kagyud sect. Founded in the early 18th century, it is known for its beautiful murals and ancient manuscripts. The monastery was completely rebuilt after the 1960 earthquake.",
    details: {
      location: "North Sikkim, 38 km from Gangtok",
      view: "Mountain",
      language: "Tibetan, Nepali",
      bestTime: "October to March",
      thingsToDo: "Study the intricate murals, observe monastic life, visit the Labrang Monastery nearby, enjoy the scenic surroundings",
      virtualTour: "https://www.google.com/maps/embed?pb=!4v1757870955710!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRGg0OURqV3c.!2m2!1d27.41303405816734!2d88.58375766744783!3f161.06181!4f0!5f0.7820865974627469",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.809516313962!2d88.5838205!3d27.4128715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6bba53187e157%3A0xefa19c90b60b6591!2sPhodong%20Monastery!5e0!3m2!1sen!2sin!4v1757861854728!5m2!1sen!2sin"
    }
  },
  {
    name: "Ralang Monastery",
    img: "ralong.jpg",
    description: "Ralang Monastery is a stunning monastery of the Kagyu sect located in South Sikkim. It is one of the most architecturally impressive monasteries in Sikkim and serves as the venue for the famous Pang Lhabsol festival. The monastery houses an impressive collection of thangkas and religious artifacts.",
    details: {
      location: "Ravangla, South Sikkim",
      view: "Mountain",
      language: "Tibetan, Nepali, English",
      bestTime: "March to June and September to December",
      thingsToDo: "Witness the Pang Lhabsol festival, explore the intricate architecture, view the sacred thangkas, enjoy the peaceful atmosphere",
      virtualTour: "https://www.google.com/maps/embed?pb=!4v1757871100907!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRDh5NUc4RGc.!2m2!1d27.3284964274141!2d88.33524768412993!3f152.78369!4f0!5f0.7820865974627469",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.5107502778988!2d88.3352477!3d27.3284964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e69ab876f2e433%3A0xe595a93fb0b1c33e!2sRalang%20New%20Monastery!5e0!3m2!1sen!2sin!4v1757861928656!5m2!1sen!2sin"
    }
  },
 {
    name: "Dubdi Monastery",
    img: "dubdi.jpg",
    description: "Dubdi Monastery, also known as Yuksom Monastery, is a historically significant Buddhist monastery located in the Yuksom area of Sikkim. It is considered to be the first monastery established in Sikkim and holds immense religious importance. Built in 1701, it is a two-storied stone structure that houses ancient manuscripts, religious texts, and statues of Buddhist deities. The monastery is situated atop a hill and can be reached after a short but steep trek, offering a serene and peaceful environment. The architecture is a fine example of traditional Sikkimese craftsmanship. It serves as a reminder of the origins of the state's Buddhist heritage, as it was consecrated by three lamas who played a crucial role in establishing the kingdom of Sikkim.",
    details: {
      location: "Yuksom, West Sikkim",
      view: "Lush forest and hills",
      language: "Bhutia, Nepali, English",
      bestTime: "March to June, September to December",
      thingsToDo: "Hike to the monastery, explore the historic structure, enjoy the tranquility of the surroundings, learn about the history of Sikkim",
      virtualTour: "https://www.google.com/maps/embed?pb=!4v1757871217199!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRFVpdHkxNndF!2m2!1d27.36655288826205!2d88.22999220879571!3f326.35718!4f0!5f0.7820865974627469",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.046162228303!2d88.24354221504562!3d27.3235639829377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a92842d0a0b1%3A0xb35a92a5d21a50a1!2sDubdi%20Monastery!5e0!3m2!1sen!2sin!4v1699967687834!5m2!1sen!2sin"
    }
  },
  {
    name: "Lachen Monastery",
    img: "laachen.jpg",
    description: "Lachen Monastery, also known as Lachen Gompa, is a beautiful and serene monastery situated in the picturesque village of Lachen in North Sikkim. It belongs to the Nyingma sect of Tibetan Buddhism and is a vital center for the local Buddhist community. The monastery is set amidst breathtaking natural beauty, with views of the snow-capped mountains and alpine valleys. Its tranquil atmosphere makes it a perfect place for meditation and reflection. The interiors are adorned with colorful prayer flags, murals, and religious statues. Visitors can observe the daily rituals and prayer ceremonies performed by the resident monks. The location of the monastery, away from the bustling tourist crowds, offers a unique opportunity to experience the spiritual side of Sikkim in a peaceful setting.",
    details: {
      location: "Lachen, North Sikkim",
      view: "Himalayan range, Lachen valley",
      language: "Bhutia, Nepali, English",
      bestTime: "March to June, September to December",
      thingsToDo: "Witness morning prayers, interact with the monks, enjoy the panoramic mountain views, explore the quiet village of Lachen",
      virtualTour: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23760.73836274621!2d88.55715641045335!3d27.715591474709875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6c4a7eaaaaaab%3A0x7e1f36bdcaee6181!2sLachen%20Monastery!5e0!3m2!1sen!2sin!4v1757871392367!5m2!1sen!2sin",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d175443.08579088654!2d88.51328003444053!3d27.701198642738227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e0839a8e9389e3%3A0x633d2627e2a4f4e2!2sLachen%20Monastery!5e0!3m2!1sen!2sin!4v1699967733830!5m2!1sen!2sin"
    }
  },
  {
    name: "Kartok Monastery",
    img: "kartok.webp",
    description: "Kartok Monastery is a historic and beautiful monastery located in the charming town of Yuksom, West Sikkim. It is one of the three most important monasteries in the area, along with Dubdi and Tashiding monasteries, and is a significant pilgrimage site. The monastery is known for its beautiful architecture and a stunningly large prayer wheel that visitors can spin for good luck and blessings. The monastery is a peaceful and spiritual place, offering a deep insight into the rich Buddhist traditions of the region. Surrounded by lush greenery and a serene environment, it is an ideal spot for quiet contemplation. The monastery's location in Yuksom, which was the first capital of Sikkim, adds to its historical importance. It is a well-maintained site that attracts both pilgrims and tourists who are interested in the spiritual heritage of Sikkim.",
    details: {
      location: "Yuksom, West Sikkim",
      view: "Forest and traditional village",
      language: "Bhutia, Nepali, English",
      bestTime: "March to June, September to November",
      thingsToDo: "Spin the large prayer wheel, observe the intricate murals, enjoy the peaceful surroundings, visit the nearby coronation throne of Norbugang",
      virtualTour: "https://www.google.com/maps/embed?pb=!4v1757871525634!6m8!1m7!1soai7Ta_mV-kIkOmeBVeusw!2m2!1d27.24064035522526!2d88.58755568983742!3f71.61437!4f0!5f0.7820865974627469",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.046162228303!2d88.24354221504562!3d27.3235639829377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a92842d0a0b1%3A0xb35a92a5d21a50a1!2sDubdi%20Monastery!5e0!3m2!1sen!2sin!4v1699967687834!5m2!1sen!2sin"
    }
  },
  {
    name: "Sanga Choeling Monastery",
    img: "sanga.jpg",
    description: "Sanga Choeling Monastery, located on a ridge above the famous Pemayangtse Monastery in Pelling, is one of the oldest and most important monasteries in Sikkim. Established in the 17th century by Lama Lhatsun Chempo, it is a significant pilgrimage site and a testament to the early Nyingma sect of Buddhism in the region. The monastery can be reached by a short, uphill walk through a beautiful forest, making the journey as spiritual as the destination. The building, though small, is a repository of ancient manuscripts, paintings, and clay statues. Its remote location provides a tranquil and meditative atmosphere, offering stunning views of the surrounding hills and valleys. Sanga Choeling, meaning 'the island of secret teachings,' truly lives up to its name, providing a secluded haven for spiritual seekers.",
    details: {
      location: "Pelling, West Sikkim",
      view: "Himalayan range, Pelling town",
      language: "Bhutia, Nepali, English",
      bestTime: "March to June, September to December",
      thingsToDo: "Take a short trek to the monastery, enjoy the panoramic views, explore the ancient artifacts, witness the serene environment",
      virtualTour: "https://www.google.com/maps/embed?pb=!4v1757871633717!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJREVnS3p0dlFF!2m2!1d27.29775170700695!2d88.22168671699492!3f245.1103!4f0!5f0.7820865974627469",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.334759691929!2d88.26947611504285!3d27.15617298301725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6aa8e202970b1%3A0x6b24d781b0923f03!2sSanga%20Choeling%20Monastery!5e0!3m2!1sen!2sin!4v1699967784343!5m2!1sen!2sin"
    }
  },
  {
    name: "Zong Dong Palri Monastery",
    img: "zang.jpg",
    description: "Zong Dong Palri Monastery, often referred to as Zang Dhok Palri Phodang, is a prominent monastery located in Kalimpong. It was consecrated by the Dalai Lama in 1976 and is a significant pilgrimage and tourist destination. The monastery's name translates to 'Copper-Colored Mountain Palace,' which is a reference to the sacred realm of Guru Rinpoche (Padmasambhava). The monastery houses a magnificent collection of rare Buddhist scriptures, including the Kangyur, which contains 108 volumes of the teachings of Lord Buddha. The intricate murals and paintings depicting the life of Lord Buddha and Guru Rinpoche are a sight to behold. Visitors can also enjoy a breathtaking panoramic view of Kalimpong town and the surrounding hills from the monastery complex. The serene and spiritual atmosphere, coupled with the impressive architecture, makes it a must-visit for anyone traveling to the region.",
    details: {
      location: "Kalimpong, West Bengal",
      view: "Kalimpong town, Teesta river valley",
      language: "Tibetan, Nepali, English",
      bestTime: "October to June",
      thingsToDo: "Explore the main prayer hall, see the rare Buddhist scriptures, enjoy the panoramic views of Kalimpong, witness the traditional rituals",
      virtualTour: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7107.1998081478505!2d88.45887274190375!3d27.042805862131733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sZong%20Dong%20Palri%20Monastery!5e0!3m2!1sen!2sin!4v1757871720585!5m2!1sen!2sin",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.225925357879!2d88.46821361503468!3d27.0673429829377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a92842d0a0b1%3A0xb35a92a5d21a50a1!2sDubdi%20Monastery!5e0!3m2!1sen!2sin!4v1699967687834!5m2!1sen!2sin"
    }
  }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Initialize carousel
  initCarousel();
  
  // Load monasteries
  loadMonasteries();
  
  // Set up event listeners
  setupEventListeners();
});

// Initialize the image carousel
function initCarousel() {
  const items = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;
  
  // Show first image
  if (items.length > 0) {
    items[0].classList.add('active');
  }
  
  // Rotate images every 5 seconds
  setInterval(() => {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
  }, 5000);
}

// Load monasteries into the carousel
function loadMonasteries() {
  const container = document.getElementById('monasteries');
  
  monasteries.forEach((monastery, index) => {
    const card = document.createElement('div');
    card.className = 'monastery-card';
    card.dataset.id = index;
    
    card.innerHTML = `
      <img src="${monastery.img}" alt="${monastery.name}" class="monastery-img">
      <div class="monastery-name">${monastery.name}</div>
    `;
    
    container.appendChild(card);
  });
}

// Set up event listeners
function setupEventListeners() {
  // Monastery card clicks
  document.addEventListener('click', function(e) {
    const card = e.target.closest('.monastery-card');
    if (card) {
      const id = card.dataset.id;
      showMonasteryDetail(id);
    }
  });
  
  // Carousel navigation buttons
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const carouselContainer = document.getElementById('carouselContainer');
  
  if (prevBtn && nextBtn && carouselContainer) {
    // Calculate scroll amount based on card width + gap
    const scrollAmount = 320; // 300px card width + 20px gap
    
    prevBtn.addEventListener('click', () => {
      carouselContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    
    nextBtn.addEventListener('click', () => {
      carouselContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }
}

// Show monastery detail page
function showMonasteryDetail(id) {
  const monastery = monasteries[id];
  
  // Hide main content sections
  document.querySelector('.hero').style.display = 'none';
  document.querySelector('.intro-section').style.display = 'none';
  document.querySelector('.popular-monasteries').style.display = 'none';
  document.querySelector('.footer').style.display = 'none';
  
  // Show detail page and floating home button
  const detailPage = document.getElementById('detailPage');
  detailPage.style.display = 'block';
  document.querySelector('.floating-home-btn').style.display = 'flex';
  
  // Generate Google Maps iframe HTML
  const mapIframeHTML = monastery.details.mapEmbed 
    ? `<iframe
         src="${monastery.details.mapEmbed}"
         width="100%"
         height="200"
         style="border:0; border-radius: 8px;"
         allowfullscreen=""
         loading="lazy"
         referrerpolicy="no-referrer-when-downgrade">
       </iframe>`
    : `<div style="width: 100%; height: 200px; background: #f0f0f0; display: flex; align-items: center; justify-content: center; border-radius: 8px;">
         <p>Google Map of ${monastery.name}</p>
       </div>`;

  // Generate 3D Virtual Tour iframe HTML
  const virtualTourHTML = monastery.details.virtualTour 
    ? `<iframe
         src="${monastery.details.virtualTour}"
         width="100%"
         height="100%"
         style="border:0; border-radius: 8px;"
         allowfullscreen=""
         loading="lazy"
         referrerpolicy="no-referrer-when-downgrade">
       </iframe>`
    : `<div style="width: 100%; height: 100%; background: #f0f0f0; display: flex; align-items: center; justify-content: center; border-radius: 8px;">
         <p>360° Virtual Tour of ${monastery.name}</p>
       </div>`;
  
  // Populate detail page
  detailPage.innerHTML = `
    <div class="monastery-detail">
      <div class="detail-header">
        <div class="detail-text">
          <h2>${monastery.name}</h2>
          <p>${monastery.description}</p>
        </div>
        <div class="detail-image">
          <img src="${monastery.img}" alt="${monastery.name}">
        </div>
      </div>
      
      <div class="detail-info">
        <div class="info-card">
          <h3>Location</h3>
          <p>${monastery.details.location}</p>
          <div class="map-container">
            ${mapIframeHTML}
          </div>
        </div>
        
        <div class="info-card">
          <h3>Best Time to Visit</h3>
          <p>${monastery.details.bestTime}</p>
        </div>
        
        <div class="info-card">
          <h3>Things to Do and See</h3>
          <p>${monastery.details.thingsToDo}</p>
        </div>
      </div>
      
      <div class="virtual-tour">
        <h3>360° Virtual Tour</h3>
        <div class="tour-iframe">
          ${virtualTourHTML}
        </div>
      </div>
    </div>
  `;
  
  // Scroll to top of detail page
  window.scrollTo(0, 0);
}

// Back to home function (called from floating button)
function backToHome() {
  // Hide detail page and show main content
  document.getElementById('detailPage').style.display = 'none';
  document.querySelector('.floating-home-btn').style.display = 'none';
  
  // Show main content sections
  document.querySelector('.hero').style.display = 'block';
  document.querySelector('.intro-section').style.display = 'block';
  document.querySelector('.popular-monasteries').style.display = 'block';
  document.querySelector('.footer').style.display = 'block';
  
  // Scroll to top
  window.scrollTo(0, 0);
}