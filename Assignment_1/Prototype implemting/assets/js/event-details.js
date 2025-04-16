// Parse query param
const urlParams = new URLSearchParams(window.location.search);
const eventKey = urlParams.get('event');

const eventData = {
  dwarka: {
    title: "Dwarkadhish Temple",
    image: "assets/images/Dwaraka.jpg",
    date: "15th–16th century (Founded: 200 BCE)",
    description: `Dwarkadhish Temple is one of the Char Dham pilgrimage sites in India. 
      Located in the city of Dwarka, it is dedicated to Lord Krishna and holds immense religious and historical significance.`,
  },
  khalji: {
    title: "Alauddin Khalji's Conquest of Gujarat",
    image: "assets/images/alaudin khilgi.jpg",
    date: "13th century",
    description: `Alauddin Khalji invaded Gujarat in 1299, defeating the Vaghela dynasty. 
      This marked the beginning of Muslim rule in Gujarat.`,
  },
  terls: {
    title: "Thumba Equatorial Rocket Launching Station (TERLS)",
    image: "assets/images/Isro.jpeg",
    date: "1963",
    description: `TERLS was the site of India’s first rocket launch. Though based in Kerala, 
      its influence and collaborations impacted the Gujarat region in early ISRO missions.`,
  },
  rann: {
    title: "Rann Utsav, Kutch",
    image: "assets/images/White Rann (10).jpg",
    date: "Annual Festival",
    description: `Rann Utsav is a cultural celebration in the white desert of Kutch, showcasing Gujarat's heritage, music, and crafts.`,
  },
  navratri: {
    title: "Vibrant Navratri Festival",
    image: "assets/images/Navratri_23.jpg",
    date: "Every year during Navratri (Sept–Oct)",
    description: `Navratri is a vibrant 9-night festival filled with Garba, Dandiya Raas, and devotion to the Goddess Durga.`,
  },
  somnath: {
    title: "Somnath Festival",
    image: "assets/images/somnath_1_festival.jpg",
    date: "February 24–26, 2025",
    description: `Held during Mahashivratri, this festival celebrates the spiritual legacy of the Somnath Jyotirlinga temple.`,
  }
};

// Populate the page
const container = document.getElementById("event-details");

if (eventData[eventKey]) {
  const { title, image, date, description } = eventData[eventKey];
  container.innerHTML = `
    <div class="event-detail-card">
      <img src="${image}" alt="${title}" class="event-image"/>
      <h1>${title}</h1>
      <p class="event-date"><strong>${date}</strong></p>
      <p class="event-description">${description}</p>
    </div>
  `;
} else {
  container.innerHTML = `<p style="color:red;">Sorry, the event details could not be loaded.</p>`;
}
