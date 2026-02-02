// Initialize Animations with offset for mobile scrolling
AOS.init({
    duration: 1000,
    offset: 100, 
    once: true
});

// === SCENE 1: APOLOGY ===
function openEnvelope() {
    document.querySelector('.envelope-wrapper').style.display = 'none';
    const letter = document.getElementById('opened-letter');
    letter.classList.remove('hidden');
    // Simple animation for letter opening
    letter.style.animation = "pulse 0.5s";
}

function handleDecision(choice) {
    if(choice === 'yes') {
        // NO ALERT BOX - Show text inside the page instead
        const msg = document.getElementById('guilt-msg');
        msg.classList.remove('hidden');
        
        // Wait 2 seconds then start story
        setTimeout(() => {
            document.getElementById('scene-opening').classList.add('hidden');
            startPoliceScene();
        }, 2500);
    } else {
        // Direct transition
        document.getElementById('scene-opening').classList.add('hidden');
        startPoliceScene();
    }
}

// === SCENE 2: POLICE ===
let isCodingDone = false; 

function startPoliceScene() {
    const police = document.getElementById('scene-police');
    police.classList.remove('hidden');
    window.addEventListener('scroll', checkScroll);
    // Auto scroll a bit to show user something changed
    window.scrollBy({top: 100, behavior: 'smooth'});
}

function checkScroll() {
    const codingSlide = document.getElementById('coding-slide');
    const rect = codingSlide.getBoundingClientRect();
    // Adjusted trigger point for mobile screens
    if(rect.top < window.innerHeight - 100 && !isCodingDone) {
        isCodingDone = true;
        typeCode();
    }
}

function typeCode() {
    const text = "System.connect(Heart);\nDeleting_Mistakes...\nAdding_Chocolates...\nGenerating_World's_Best_Gift...\nDONE! 100%";
    const output = document.getElementById('code-output');
    let i = 0;
    function type() {
        if(i < text.length) {
            output.innerText += text.charAt(i);
            i++;
            setTimeout(type, 50);
        } else {
            document.getElementById('gift-btn').classList.remove('hidden');
        }
    }
    type();
}

// === SCENE 3: BIRTHDAY ===
function startBirthday() {
    document.getElementById('scene-police').classList.add('hidden');
    const bday = document.getElementById('scene-bday');
    bday.classList.remove('hidden');
    window.scrollTo(0,0);
    launchConfetti();
}

function cutCake() {
    document.getElementById('cake-msg').style.display = 'block';
    launchConfetti();
}

function showFinalLetter() {
    document.getElementById('final-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('final-modal').style.display = 'none';
}

function launchConfetti() {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
}