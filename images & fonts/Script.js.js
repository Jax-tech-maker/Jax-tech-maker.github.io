// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');

// Array of slides (3 images)
const slides = [
  { src: 'images/IMG01_looking.jpeg',               
    alt: 'doaks',
    caption: "vision"
  },
  { src: 'images/IMG02_chilling.jpeg',            
    alt: 'bron',
    caption: "chilltime"
  },
  { src: 'images/IMG03_puppyeyes.jpeg',            
    alt: 'creed',
    caption:"snoopy"
  },
  { src: 'images/IMG04_waiting.jpeg',            
    alt: 'creed',
    caption:"waiting"
  },
  { src: 'images/IMG05_flopear.jpeg',            
    alt: 'creed',
    caption:"shocked"
  },
  { src: 'images/IMG06_flopped.jpeg',            
    alt: 'creed',
    caption:"silly guy"
  },
  { src: 'images/IMG07_wonder.jpeg',            
    alt: 'creed',
    caption:"sleepytime"
  },
  { src: 'images/IMG08_murder.jpeg',            
    alt: 'creed',
    caption:"tired of him"
  },
  { src: 'images/IMG09_bedtime.jpeg',            
    alt: 'creed',
    caption:"super warm"
  },
  { src: 'images/IMG10_scared.jpeg',            
    alt: 'creed',
    caption:"unsure"
  }
];

let currentIndex = 0;

// Preload images
slides.forEach(({ src }) => {
  const i = new Image();
  i.src = src;
});
// Helper to show slide
function showSlide(index) {
  const slide = slides[index];
  mainImage.src = slide.src;
  mainImage.alt = slide.alt;
  caption.textContent = slide.caption;
}

// Advance on click
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);
