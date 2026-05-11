// --- DATA: Our Emotional Dictionary ---
// You mentioned you want to add emotions from time to time. 
// You can add new ones to this object!
const emotionalData = {
    "saudade": {
        keyword: "Saudade",
        colors: ["#3A506B", "#5BC0BE", "#C9ADA7", "#F2E9E4", "#E0A458"],
        description: "Saudade is a quiet longing — a gentle ache for something once deeply loved but now distant."
    },
    "monachopsis": {
        keyword: "Monachopsis",
        colors: ["#6B705C", "#A5A58D", "#B7B7A4", "#CB997E", "#DAD7CD"],
        description: "Monachopsis is the quiet sense of being out of place — as if you exist slightly out of sync with your surroundings. These muted tones reflect a world that feels familiar, yet never fully yours.",
        isMonachopsis: true
    },
    "jouska": {
        keyword: "Jouska",
        colors: ["#2B2D42", "#3A0CA3", "#7209B7", "#CDB4DB", "#8D99AE"],
        description: "Jouska is the quiet loop of conversations that never happened — thoughts replayed, refined, and reimagined. These tones reflect a mind in motion, where words and moments echo endlessly within.",
        isJouska: true
    },
    "chrysalism": {
        keyword: "Chrysalism",
        colors: ["#D97706", "#F4E1D2", "#EADBC8", "#9CA3AF", "#6B7280"],
        description: "Chrysalism is the quiet comfort of being sheltered from the storm — a soft, protected moment where warmth surrounds you while the world moves outside. These tones reflect safety, stillness, and gentle escape.",
        isChrysalism: true
    },
    "exulansis": {
        keyword: "Exulansis",
        colors: ["#5C677D", "#A5A8B5", "#CDB4DB", "#D6D6D6", "#8D99AE"],
        description: "Exulansis is the quiet choice to stop explaining — a realization that your experiences cannot be fully understood. These muted tones reflect emotion held back, softened into silence.",
        isExulansis: true
    },
    "sonder": {
        keyword: "Sonder",
        colors: ["#1B263B", "#415A77", "#E0E1DD", "#F4A261", "#E76F51"],
        description: "Sonder is the sudden awareness that every person around you is living a life as rich and complex as your own. These tones reflect the depth of shared existence and the quiet beauty of countless unseen stories.",
        isSonder: true
    },
    "anecdoche": {
        keyword: "Anecdoche",
        colors: ["#E63946", "#457B9D", "#F4A261", "#2A9D8F", "#E9C46A"],
        description: "Anecdoche is the noise of many voices speaking at once — stories shared without being heard. These contrasting tones exist side by side, yet never fully connect.",
        isAnecdoche: true
    },
    "vemödalen": {
        keyword: "Vemödalen",
        colors: ["#A8A8A8", "#BEBEBE", "#CFCFCF", "#D6CFC7", "#B0B7C3"],
        description: "Vemödalen is the quiet realization that even the most beautiful moments have been experienced countless times before. These faded tones reflect repetition, where uniqueness gently dissolves into familiarity.",
        isVemodalen: true
    },
    "torschlusspanik": {
        keyword: "Torschlusspanik",
        colors: ["#D00000", "#9D0208", "#370617", "#6A040F", "#E85D04"],
        description: "Torschlusspanik is the rising panic that time is slipping away — a fear that opportunities are closing faster than you can reach them. These sharp tones reflect urgency, pressure, and the weight of passing time.",
        isTorschlusspanik: true
    },
    "liberosis": {
        keyword: "Liberosis",
        colors: ["#F8FAFC", "#E3F2FD", "#D0E8F2", "#F1F5F9", "#EDEDED"],
        description: "Liberosis is the quiet urge to let go — to loosen your grip on expectations, worries, and the need to care so deeply. These light tones reflect openness, release, and the freedom of emotional detachment.",
        isLiberosis: true
    }
};

// --- DOM ELEMENTS ---
const inputSection = document.getElementById('input-section');
const understandingSection = document.getElementById('understanding-section');
const resultSection = document.getElementById('result-section');
const emotionInput = document.getElementById('emotion-input');
const revealBtn = document.getElementById('reveal-btn');
const resetBtn = document.getElementById('reset-btn');
const backgroundLayer = document.getElementById('background-layer');
const paletteContainer = document.getElementById('palette-container');
const descriptionText = document.getElementById('result-description');

// --- EVENT LISTENERS ---
revealBtn.addEventListener('click', handleReveal);
emotionInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleReveal();
});
emotionInput.addEventListener('input', (e) => {
    const val = e.target.value.trim().toLowerCase();
    
    // Reset classes
    document.body.classList.remove('monachopsis-mode', 'jouska-mode', 'chrysalism-mode', 'exulansis-mode', 'sonder-mode', 'anecdoche-mode', 'vemodalen-mode', 'torschlusspanik-mode', 'liberosis-mode');

    if (val === 'monachopsis') {
        document.body.classList.add('monachopsis-mode');
        // subtle shift before reveal
        backgroundLayer.style.background = `linear-gradient(135deg, rgba(107, 112, 92, 0.4), rgba(218, 215, 205, 0.4))`;
        backgroundLayer.style.opacity = '1';
    } else if (val === 'jouska') {
        document.body.classList.add('jouska-mode');
        backgroundLayer.style.background = `linear-gradient(135deg, rgba(43, 45, 66, 0.8), rgba(58, 12, 163, 0.8))`;
        backgroundLayer.style.opacity = '1';
    } else if (val === 'chrysalism') {
        document.body.classList.add('chrysalism-mode');
        // slight warmth in background
        backgroundLayer.style.background = `radial-gradient(circle at center, rgba(217, 119, 6, 0.08) 0%, rgba(107, 114, 128, 0.15) 80%)`;
        backgroundLayer.style.opacity = '1';
    } else if (val === 'exulansis') {
        document.body.classList.add('exulansis-mode');
        // subtle shift, dimming, withdrawing
        backgroundLayer.style.background = `linear-gradient(135deg, rgba(92, 103, 125, 0.4), rgba(214, 214, 214, 0.2))`;
        backgroundLayer.style.opacity = '1';
    } else if (val === 'sonder') {
        document.body.classList.add('sonder-mode');
        // deep expanse forming, faint warm glow
        backgroundLayer.style.background = `radial-gradient(circle at center, rgba(244, 162, 97, 0.05) 0%, rgba(27, 38, 59, 1) 70%, rgba(65, 90, 119, 1) 100%)`;
        backgroundLayer.style.opacity = '1';
    } else if (val === 'anecdoche') {
        document.body.classList.add('anecdoche-mode');
        // neutral shifting background, UI feeling slightly misaligned
        backgroundLayer.style.background = `linear-gradient(135deg, #F1FAEE, #E5E5E5)`;
        backgroundLayer.style.opacity = '1';
    } else if (val === 'vemödalen' || val === 'vemodalen') {
        document.body.classList.add('vemodalen-mode');
        // soft, flat gradient
        backgroundLayer.style.background = `linear-gradient(135deg, #BEBEBE, #D6CFC7)`;
        backgroundLayer.style.opacity = '1';
    } else if (val === 'torschlusspanik') {
        document.body.classList.add('torschlusspanik-mode');
        // tightening background
        backgroundLayer.style.background = `linear-gradient(135deg, #370617, #9D0208)`;
        backgroundLayer.style.opacity = '1';
    } else if (val === 'liberosis') {
        document.body.classList.add('liberosis-mode');
        // airy, bright background
        backgroundLayer.style.background = `linear-gradient(135deg, #F8FAFC, #E3F2FD)`;
        backgroundLayer.style.opacity = '1';
    } else {
        if (inputSection.classList.contains('active')) {
            backgroundLayer.style.opacity = '0';
        }
    }
});
resetBtn.addEventListener('click', resetApp);

// --- MAIN LOGIC ---
function handleReveal() {
    const rawInput = emotionInput.value.trim().toLowerCase();
    
    // Check if emotion exists in our data
    if (emotionalData[rawInput]) {
        const data = emotionalData[rawInput];
        startSequence(data);
    } else if (rawInput === "") {
        // user entered nothing
        emotionInput.focus();
    } else {
        // user entered an emotion we don't have yet
        emotionInput.value = "";
        emotionInput.placeholder = "Not yet known. Try whispering 'Saudade'";
    }
}

function startSequence(emotionData) {
    // 1. Hide Input State
    inputSection.classList.remove('active');
    inputSection.classList.add('fade-out');

    // 2. Show "understanding..." state
    const understandingTextEl = understandingSection.querySelector('p');
    if (emotionData.isJouska) {
        understandingTextEl.textContent = "processing thoughts...";
    } else if (emotionData.isChrysalism) {
        understandingTextEl.textContent = "settling in...";
        // Subtle closing in / shelter effect
        document.body.classList.add('chrysalism-closing-in');
    } else if (emotionData.isExulansis) {
        understandingTextEl.textContent = "...";
    } else if (emotionData.isSonder) {
        understandingTextEl.textContent = "expanding perspective...";
        document.body.classList.add('sonder-expanding');
    } else if (emotionData.isAnecdoche) {
        understandingTextEl.textContent = "listening...";
        document.body.classList.add('anecdoche-flicker');
    } else if (emotionData.isVemodalen) {
        understandingTextEl.textContent = "recognizing...";
    } else if (emotionData.isTorschlusspanik) {
        understandingTextEl.textContent = "running out of time...";
        document.body.classList.add('torschlusspanik-shake');
    } else if (emotionData.isLiberosis) {
        understandingTextEl.textContent = "letting go...";
        document.body.classList.add('liberosis-release');
    } else {
        understandingTextEl.textContent = "understanding...";
    }

    setTimeout(() => {
        understandingSection.classList.add('active');
        
        // Wait to mimic the interface "thinking"
        let waitTime = 800; // default
        if (emotionData.isMonachopsis) waitTime = 600;
        if (emotionData.isJouska) waitTime = 500;
        if (emotionData.isChrysalism) waitTime = 500;
        if (emotionData.isExulansis) waitTime = 600;
        if (emotionData.isSonder) waitTime = 500;
        if (emotionData.isAnecdoche) waitTime = 500;
        if (emotionData.isVemodalen) waitTime = 500;
        if (emotionData.isTorschlusspanik) waitTime = 400; // Shorter
        if (emotionData.isLiberosis) waitTime = 500;
        
        setTimeout(() => {
            showResults(emotionData);
        }, waitTime);
        
    }, 600); // Wait for input to fade out before showing 'thinking'
}

function showResults(data) {
    // Hide "understanding..."
    understandingSection.classList.remove('active');
    understandingSection.classList.add('fade-out');

    // Setup Background Gradient
    // Create a beautiful smooth radial gradient out of the provided colors
    const colors = data.colors;
    backgroundLayer.classList.remove('jouska-bg-shift', 'chrysalism-bg-shift', 'exulansis-bg-shift', 'sonder-bg-shift', 'anecdoche-bg-shift', 'vemodalen-bg-shift', 'torschlusspanik-bg-shift', 'liberosis-bg-shift'); // reset
    backgroundLayer.style.backgroundSize = "auto";
    
    if (data.isMonachopsis) {
        backgroundLayer.style.background = `linear-gradient(135deg, ${colors[0]}, ${colors[4]})`;
    } else if (data.isJouska) {
        backgroundLayer.style.background = `linear-gradient(135deg, ${colors[0]}, ${colors[1]}, ${colors[0]})`;
        backgroundLayer.style.backgroundSize = "200% 200%";
        backgroundLayer.classList.add('jouska-bg-shift');
    } else if (data.isChrysalism) {
        backgroundLayer.style.background = `linear-gradient(135deg, ${colors[4]}, ${colors[1]})`;
        backgroundLayer.style.backgroundSize = "200% 200%";
        backgroundLayer.classList.add('chrysalism-bg-shift');
    } else if (data.isExulansis) {
        // Soft fog-like fading
        backgroundLayer.style.background = `linear-gradient(135deg, ${colors[0]}, ${colors[3]})`;
        backgroundLayer.style.backgroundSize = "200% 200%";
        backgroundLayer.classList.add('exulansis-bg-shift');
    } else if (data.isSonder) {
        backgroundLayer.style.background = `radial-gradient(circle at center, rgba(244, 162, 97, 0.15) 0%, rgba(27, 38, 59, 1) 60%, rgba(65, 90, 119, 1) 100%)`;
        backgroundLayer.style.backgroundSize = "200% 200%";
        backgroundLayer.classList.add('sonder-bg-shift');
    } else if (data.isAnecdoche) {
        backgroundLayer.style.background = `linear-gradient(135deg, #F1FAEE, #E5E5E5)`;
        backgroundLayer.style.backgroundSize = "200% 200%";
        backgroundLayer.classList.add('anecdoche-bg-shift');
    } else if (data.isVemodalen) {
        backgroundLayer.style.background = `linear-gradient(135deg, #BEBEBE, #D6CFC7)`;
        backgroundLayer.classList.add('vemodalen-bg-shift');
    } else if (data.isTorschlusspanik) {
        backgroundLayer.style.background = `linear-gradient(135deg, #370617, #9D0208)`;
        backgroundLayer.style.backgroundSize = "200% 200%";
        backgroundLayer.classList.add('torschlusspanik-bg-shift');
    } else if (data.isLiberosis) {
        backgroundLayer.style.background = `linear-gradient(135deg, #F8FAFC, #E3F2FD)`;
        backgroundLayer.style.backgroundSize = "200% 200%";
        backgroundLayer.classList.add('liberosis-bg-shift');
    } else {
        backgroundLayer.style.background = `radial-gradient(circle at center, ${colors[0]}88 0%, ${colors[1]}66 25%, var(--bg-base) 80%)`;
    }
    // We bring the opacity up slowly
    backgroundLayer.style.opacity = '1';

    // Build the color Swatches
    paletteContainer.innerHTML = ''; // clear old ones
    
    const monachopsisDelays = [80, 120, 90, 140, 100];
    const jouskaDelays = [100, 200, 300, 800, 900];
    const chrysalismDelays = [150, 300, 450, 750, 900];
    const exulansisDelays = [0, 50, 100, 150, 200]; // Very soft, almost simultaneous
    const sonderDelays = [200, 400, 600, 900, 1100]; // Dark tones -> neutral -> warm
    const anecdocheDelays = [0, 200, 80, 300, 150]; // Out of sync
    const vemodalenDelays = [50, 50, 50, 50, 50]; // Practically simultaneous
    const torschlusspanikDelays = [0, 80, 60, 100, 50]; // Fastest, sharp, irregular tightness
    const liberosisDelays = [150, 300, 450, 600, 750]; // Very calm, slow stagger

    colors.forEach((hexValue, index) => {
        const swatch = document.createElement('div');
        swatch.className = 'color-swatch';
        
        // Add specific class for anecdoche misalignment
        if (data.isAnecdoche) {
            swatch.classList.add(`anecdoche-swatch-${index}`);
        }
        
        swatch.style.backgroundColor = hexValue;
        
        if (data.isMonachopsis) {
            swatch.style.animationDelay = `${monachopsisDelays[index]}ms`;
        } else if (data.isJouska) {
            swatch.style.animationDelay = `${jouskaDelays[index]}ms`;
        } else if (data.isChrysalism) {
            swatch.style.animationDelay = `${chrysalismDelays[index]}ms`;
        } else if (data.isExulansis) {
            swatch.style.animationDelay = `${exulansisDelays[index]}ms`;
        } else if (data.isSonder) {
            swatch.style.animationDelay = `${sonderDelays[index]}ms`;
        } else if (data.isAnecdoche) {
            swatch.style.animationDelay = `${anecdocheDelays[index]}ms`;
        } else if (data.isVemodalen) {
            swatch.style.animationDelay = `${vemodalenDelays[index]}ms`;
        } else if (data.isTorschlusspanik) {
            swatch.style.animationDelay = `${torschlusspanikDelays[index]}ms`;
        } else if (data.isLiberosis) {
            swatch.style.animationDelay = `${liberosisDelays[index]}ms`;
        } else {
            // Add staggered delay to each block (0.1s, 0.2s, 0.3s...)
            swatch.style.animationDelay = `${index * 0.15}s`;
        }
        
        paletteContainer.appendChild(swatch);
    });

    // Set Text Description
    descriptionText.textContent = data.description;
    
    // Remove old classes if they exist
    descriptionText.classList.remove('show');
    resetBtn.classList.remove('show');

    // Bring in the Result section
    setTimeout(() => {
        resultSection.classList.add('active');
        
        // Trigger animations on swatches
        const swatches = document.querySelectorAll('.color-swatch');
        swatches.forEach(swatch => swatch.classList.add('show'));

        // Fade in description AFTER swatches
        let textDelay = (colors.length * 150) + 800;
        if (data.isMonachopsis) textDelay = 700;
        if (data.isJouska) textDelay = 1100;
        if (data.isChrysalism) textDelay = 1300;
        if (data.isExulansis) textDelay = 800; // Almost right after the fast swatches
        if (data.isSonder) textDelay = 1300;
        if (data.isAnecdoche) textDelay = 900;
        if (data.isVemodalen) textDelay = 700;
        if (data.isTorschlusspanik) textDelay = 400; // very fast
        if (data.isLiberosis) textDelay = 1200; // Slow, effortless fade
        
        setTimeout(() => {
            descriptionText.classList.add('show');
        }, textDelay);

        // Fade in the reset button a bit after the text
        let btnDelay = (colors.length * 150) + 1800;
        if (data.isMonachopsis) btnDelay = 1300;
        if (data.isJouska) btnDelay = 1700;
        if (data.isChrysalism) btnDelay = 1900;
        if (data.isExulansis) btnDelay = 1600;
        if (data.isSonder) btnDelay = 1800;
        if (data.isAnecdoche) btnDelay = 1500;
        if (data.isVemodalen) btnDelay = 1300;
        if (data.isTorschlusspanik) btnDelay = 800; // very fast
        if (data.isLiberosis) btnDelay = 1800;
        
        setTimeout(() => {
            resetBtn.classList.add('show');
        }, btnDelay);

    }, 500);
}

function resetApp() {
    // Fade out Results & Background
    resultSection.classList.remove('active');
    backgroundLayer.style.opacity = '0';
    document.body.classList.remove('monachopsis-mode', 'jouska-mode', 'chrysalism-mode', 'exulansis-mode', 'sonder-mode', 'anecdoche-mode', 'vemodalen-mode', 'torschlusspanik-mode', 'liberosis-mode', 'chrysalism-closing-in', 'sonder-expanding', 'anecdoche-flicker', 'torschlusspanik-shake', 'liberosis-release');
    backgroundLayer.classList.remove('jouska-bg-shift', 'chrysalism-bg-shift', 'exulansis-bg-shift', 'sonder-bg-shift', 'anecdoche-bg-shift', 'vemodalen-bg-shift', 'torschlusspanik-bg-shift', 'liberosis-bg-shift');
    
    // Cleanup Result elements so they can animate again next time
    setTimeout(() => {
        descriptionText.classList.remove('show');
        resetBtn.classList.remove('show');
        understandingSection.classList.remove('fade-out');
        inputSection.classList.remove('fade-out');
        
        // Bring back Input
        emotionInput.value = "";
        emotionInput.placeholder = "What else are you holding?";
        inputSection.classList.add('active');
    }, 800);
}
