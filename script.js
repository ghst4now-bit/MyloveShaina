// ============================================
// HAMBURGER MENU TOGGLE
// ============================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ============================================
// MUSIC PLAYER
// ============================================
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
let isMusicPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicBtn.textContent = '🔇';
        isMusicPlaying = false;
    } else {
        bgMusic.play().catch(err => {
            console.log('Autoplay prevented. Click to start music.');
        });
        musicBtn.textContent = '🔊';
        isMusicPlaying = true;
    }
});

// Handle music autoplay and modal on page load
window.addEventListener('load', () => {
    console.log('Page loaded, attempting to play music...');
    // Try to autoplay music (may be blocked by browser)
    bgMusic.play().then(() => {
        console.log('Music started playing automatically');
    }).catch(err => {
        console.log('Autoplay blocked. Music will start on first interaction.', err);
    });

    // Show surprise modal immediately on page load
    openSurpriseModal();
});

// Enable music on first user interaction if autoplay failed
document.addEventListener('click', () => {
    if (bgMusic.paused) {
        console.log('User clicked, attempting to play music...');
        bgMusic.play().then(() => {
            console.log('Music started playing on user interaction');
        }).catch(err => {
            console.log('Music play failed on user interaction:', err);
        });
    }
}, { once: true });

// ============================================
// COUNTDOWN TIMER
// ============================================
function updateCountdown() {
    // Set target date to tomorrow at midnight (or customize as needed)
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    // Or set a specific date for the surprise:
    // const targetDate = new Date('2025-12-25T18:00:00').getTime();

    const difference = targetDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    } else {
        // Countdown finished - show surprise modal
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';

        // Show surprise modal
        openSurpriseModal();
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ============================================
// ANIMATED BACKGROUND HEARTS
// ============================================
function createFloatingHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    const hearts = ['❤️', '💕', '💖', '💗', '💝'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '-50px';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px';
        heart.style.opacity = '0.6';
        heart.style.animation = 'float ' + (Math.random() * 3 + 3) + 's linear forwards';
        heart.style.pointerEvents = 'none';
        heartsContainer.appendChild(heart);
        
        setTimeout(() => heart.remove(), 6000);
    }, 300);
}

createFloatingHearts();

// ============================================
// SMOOTH SCROLLING
// ============================================
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// LOAD GALLERY IMAGES
// ============================================
const imageFiles = [
    '1754222699184.jpeg',
    '1754222699191.jpg',
    '1754222699210.jpg',
    '1754222699230.jpeg',
    '1754222699237.jpeg',
    '1754222699368.png.jpg',
    '1754222699390.jpg',
    '1754222699403.png.jpg',
    '1754222699422.jpg',
    '1754222699429.jpg',
    '1754222699452.png.jpg',
    '1754222699487.jpeg',
    '1754222699554.jpg',
    '1754222699587.jpeg',
    '1754222699603.jpeg',
    '1754222699619.jpeg',
    '1754222699627.jpeg',
    '1754222699635.jpeg',
    '1754222699762.jpeg',
    '1754222699800.jpeg',
    '1754222699820.jpeg',
    '1754222700076.jpeg',
    '1754222700130.jpg',
    '494818896_698477006119747_3092612811712273113_n.jpg',
    '70888485_514703972687815_7512176252023734272_n.jpg',
    '71118939_392261481674923_506162754827059200_n.jpg',
    '72288407_949879608703600_8473303054270070784_n.jpg',
    '72329136_245122703041715_6251741515450679296_n.jpg',
    '79703471_548222762694668_2821513700647632896_n.jpg',
    '79850386_586822102149045_1958339859584122880_n.jpg',
    'Gemini_Generated_Image_ago7gfago7gfago7.png',
    'Gemini_Generated_Image_hi2whjhi2whjhi2w.png',
    'Gemini_Generated_Image_v5mdgev5mdgev5md.png',
    'her1.png',
    'IMG_20250602_202032.jpg',
    'IMG_20250609_142904.jpg',
    'IMG_20250609_150656.jpg',
    'IMG_20250609_151139.jpg',
    'IMG_20250609_151140.jpg',
    'IMG_20250609_155801.jpg',
    'IMG_20250609_155806.jpg',
    'IMG_20250609_155808.jpg',
    'IMG_20250609_155828.jpg',
    'IMG_20250609_163406.jpg',
    'IMG_20250609_163412.jpg',
    'IMG_20250609_165516.jpg',
    'IMG_20250609_165546.jpg',
    'IMG_20250609_165638.jpg',
    'IMG_20250609_165820.jpg',
    'IMG_20250609_165915.jpg',
    'IMG_20250609_165957.jpg',
    'IMG_20250609_172411.jpg',
    'IMG_20250629_110742.jpg',
    'IMG_20250629_110744.jpg',
    'IMG_20250629_111129.jpg',
    'IMG_20250629_111131.jpg',
    'IMG_20250629_111132.jpg',
    'IMG_20250629_113957.jpg',
    'IMG_20250629_114013.jpg',
    'IMG_20250629_114016.jpg',
    'IMG_20250629_115030.jpg',
    'IMG_20250629_115033.jpg',
    'IMG_20250629_124532.jpg',
    'IMG_20250629_124534.jpg',
    'IMG_20250918_191401.jpg',
    'IMG_20250928_124913.jpg',
    'IMG_20250928_124918.jpg',
    'IMG_20250928_124923.jpg',
    'IMG_20250928_124925.jpg',
    'IMG_20250928_124932.jpg',
    'IMG_20250928_125022.jpg',
    'IMG_20250928_125055.jpg',
    'IMG_20250928_125100.jpg',
    'IMG_20250928_190153.jpg',
    'IMG_20250928_190158.jpg',
    'IMG_20250928_190201.jpg',
    'IMG_20250928_190747.jpg',
    'IMG_20250928_190752.jpg',
    'IMG_20250928_190755.jpg',
    'IMG_20251005_191004.jpg',
    'IMG_20251005_191040.jpg',
    'IMG_20251019_195850.jpg',
    'IMG_20251019_195902.jpg',
    'IMG_20251019_195941.jpg',
    'IMG_20251019_200002.jpg',
    'IMG_20251019_200015.jpg',
    'IMG_20251019_200128.jpg',
    'IMG_20251019_200148.jpg',
    'IMG_20251019_200214.jpg',
    'IMG_20251019_200518.jpg',
    'IMG_20251028_192305.jpg',
    'IMG_20251028_192323.jpg',
    'IMG_20251028_194957.jpg',
    'IMG_20251028_194958.jpg',
    'IMG_20251028_194958_1.jpg',
    'IMG_20251028_195651.jpg',
    'IMG_20251028_201906.jpg',
    'IMG_20251028_201914.jpg',
    'IMG_20251028_201940.jpg',
    'IMG_20251028_201944.jpg',
    'IMG_20251028_201945.jpg',
    'IMG_20251028_201956.jpg',
    'IMG_20251028_202006.jpg',
    'IMG_20251028_202017.jpg',
    'IMG_20251028_202026.jpg',
    'IMG_20251028_202120.jpg',
    'IMG_20251028_202138.jpg',
    'IMG_20251031_182237.jpg',
    'IMG_20251031_182248.jpg',
    'IMG_20251031_182412.jpg',
    'IMG_20251031_182821.jpg',
    'IMG_20251031_184640.jpg',
    'IMG_20251031_184651.jpg',
    'IMG_20251031_184655.jpg',
    'IMG_20251031_184801.jpg',
    'IMG_20251031_184816.jpg',
    'IMG_20251031_184817.jpg',
    'IMG_20251031_184834.jpg',
    'IMG_20251031_184836.jpg',
    'IMG_20251031_185409.jpg',
    'IMG_20251031_185413.jpg',
    'IMG_20251031_185416.jpg',
    'IMG_20251031_190102.jpg',
    'IMG_20251031_190105.jpg',
    'IMG_20251204_165739.jpg',
    'IMG_20251204_165758.jpg',
    'IMG_20251204_165803.jpg',
    'IMG_20251204_165810.jpg',
    'IMG_20251204_165824.jpg',
    'IMG_20251204_165844.jpg',
    'IMG_20251204_165909.jpg',
    'a7738084-0f88-48b7-86e1-c685ed4308b4.jfif'
];

function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    imageFiles.forEach((imagePath, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${imagePath}" alt="Memory ${index + 1}" onclick="openModal('${imagePath}')">
            <div class="gallery-overlay">🖼️</div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

function openModal(imagePath) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imagePath;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = (event) => {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// ============================================
// SURPRISE MODAL FUNCTIONS
// ============================================
function openSurpriseModal() {
    const modal = document.getElementById('surpriseModal');
    modal.style.display = 'block';
}

function closeSurpriseModal() {
    const modal = document.getElementById('surpriseModal');
    modal.style.display = 'none';
}

function showSurprise() {
    closeSurpriseModal();
    // Scroll to the gallery section as the surprise
    smoothScroll('#gallery');
    // You can customize this to show whatever surprise you want
    // For example, you could show another modal, play music, etc.
}

loadGallery();


// ============================================
// GUESTBOOK FUNCTIONALITY
// ============================================
function addMessage() {
    const nameInput = document.getElementById('visitorName');
    const messageInput = document.getElementById('visitorMessage');
    const messagesContainer = document.getElementById('messagesContainer');

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (name === '' || message === '') {
        alert('Please fill in both fields!');
        return;
    }

    // Create message card
    const messageCard = document.createElement('div');
    messageCard.className = 'message-card';
    messageCard.innerHTML = `
        <strong>${escapeHtml(name)}</strong>
        <p>${escapeHtml(message)}</p>
    `;

    // Add to container at the beginning
    messagesContainer.insertBefore(messageCard, messagesContainer.firstChild);

    // Save to localStorage
    let messages = JSON.parse(localStorage.getItem('guestbookMessages') || '[]');
    messages.unshift({ name, message, date: new Date().toLocaleString() });
    localStorage.setItem('guestbookMessages', JSON.stringify(messages.slice(0, 100))); // Keep last 100

    // Clear inputs
    nameInput.value = '';
    messageInput.value = '';

    // Show success message
    alert('Thank you for your birthday wishes! ❤️');
}

// Load messages from localStorage on page load
function loadMessages() {
    const messagesContainer = document.getElementById('messagesContainer');
    const messages = JSON.parse(localStorage.getItem('guestbookMessages') || '[]');

    messages.forEach(msg => {
        const messageCard = document.createElement('div');
        messageCard.className = 'message-card';
        messageCard.innerHTML = `
            <strong>${escapeHtml(msg.name)}</strong>
            <p>${escapeHtml(msg.message)}</p>
        `;
        messagesContainer.appendChild(messageCard);
    });
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

loadMessages();

// ============================================
// KEYBOARD NAVIGATION
// ============================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ============================================
// PARALLAX EFFECT ON SCROLL
// ============================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.main-image');
    
    parallaxElements.forEach(el => {
        el.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
});

// ============================================
// CONFETTI EFFECT ON PAGE LOAD
// ============================================
function createConfetti() {
    const colors = ['🎉', '🎊', '✨', '🎈', '💝', '❤️', '💕', '💖'];
    const container = document.body;

    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.textContent = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-50px';
        confetti.style.fontSize = Math.random() * 20 + 15 + 'px';
        confetti.style.animation = `float ${Math.random() * 3 + 3}s linear forwards`;
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '100';
        container.appendChild(confetti);

        setTimeout(() => confetti.remove(), 6000);
    }
}

// Trigger confetti on first interaction
document.addEventListener('click', createConfetti, { once: true });

// Show surprise modal immediately when page loads
openSurpriseModal();

console.log('🎉 Happy Birthday! 🎉');
