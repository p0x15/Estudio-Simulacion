let currentMode = '';
let score = 0;
let currentItems = [];
let currentIndex = 0;
let matchedTerms = new Set();
let totalConcepts = 0;

// Combine all concepts from both topics
const getAllConcepts = () => {
    return [
        ...studyData.topic1.concepts,
        ...studyData.topic2.concepts
    ];
};

function showMenu() {
    document.getElementById('menu-view').classList.add('active');
    document.getElementById('menu-view').classList.remove('hidden');
    document.getElementById('game-view').classList.add('hidden');
    document.getElementById('game-view').classList.remove('active');
}

function startGame(mode) {
    currentMode = mode;
    score = 0;
    updateScore(0);

    document.getElementById('menu-view').classList.add('hidden');
    document.getElementById('menu-view').classList.remove('active');
    document.getElementById('game-view').classList.add('active');
    document.getElementById('game-view').classList.remove('hidden');

    const container = document.getElementById('game-container');
    container.innerHTML = '';

    // Reset Progress Bar
    const progressContainer = document.getElementById('progress-container');
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = '0%';

    if (mode === 'quiz' || mode === 'hard' || mode === 'match') {
        progressContainer.classList.remove('hidden');
    } else {
        progressContainer.classList.add('hidden');
    }

    // Reset global tracking for match mode
    if (mode === 'match') {
        matchedTerms.clear();
        totalConcepts = getAllConcepts().length;
    }

    if (mode === 'flashcards') startFlashcards();
    else if (mode === 'match') startMatching();
    else if (mode === 'quiz') startQuiz();
    else if (mode === 'hard') startHardMode();
}

function updateProgressBar(percent) {
    document.getElementById('progress-bar').style.width = `${percent}%`;
}

function updateScore(points) {
    score += points;
    document.getElementById('score-display').innerText = `Puntos: ${score}`;
}

// --- Flashcards Logic ---
function startFlashcards() {
    currentItems = getAllConcepts().sort(() => Math.random() - 0.5);
    currentIndex = 0;
    renderFlashcard();
}

function renderFlashcard() {
    const container = document.getElementById('game-container');
    const item = currentItems[currentIndex];

    container.innerHTML = `
        <div class="flashcard-container" onclick="this.querySelector('.flashcard').classList.toggle('flipped')">
            <div class="flashcard">
                <div class="card-face card-front">
                    <h2>${item.term}</h2>
                    <div class="card-hint">Haz clic para ver la definición</div>
                </div>
                <div class="card-face card-back">
                    <p>${item.definition}</p>
                    ${item.details ? `<p style="font-size: 0.9rem; margin-top: 1rem; color: var(--text-muted)">${item.details}</p>` : ''}
                </div>
            </div>
        </div>
        <div class="controls">
            <button class="btn btn-primary" onclick="prevCard()">Anterior</button>
            <span style="align-self: center;">${currentIndex + 1} / ${currentItems.length}</span>
            <button class="btn btn-primary" onclick="nextCard()">Siguiente</button>
        </div>
    `;
}

function nextCard() {
    if (currentIndex < currentItems.length - 1) {
        currentIndex++;
        renderFlashcard();
    }
}

function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        renderFlashcard();
    }
}

// --- Matching Logic ---
let selectedTerm = null;
let selectedDef = null;

function startMatching() {
    const all = getAllConcepts();
    const remaining = all.filter(item => !matchedTerms.has(item.term));

    // Select up to 5 from remaining (unseen)
    let selection = remaining.sort(() => Math.random() - 0.5).slice(0, 5);

    // If we have less than 5, we are at the end, fill with already matched for gameplay
    if (selection.length < 5) {
        const needed = 5 - selection.length;
        /* If we want to force strictly new ones, we might end up with < 5 items on board.
           But game logic expects pairs. 
           Let's fill with reviews to keep board full if possible, unless we are totally done? 
           But user wants to know how many until done. So calculating progress based on 'matchedTerms.size' is key.
        */
        const review = all.filter(item => matchedTerms.has(item.term))
            .sort(() => Math.random() - 0.5)
            .slice(0, needed);
        selection = [...selection, ...review];
    }

    currentItems = selection;

    // Check if we already finished EVERYTHING (no new items selected and matchedTerms is full)
    // Actually, matchedTerms fills up during play.

    // Calculate progress at start of round? No, update dynamically.
    updateProgressBar((matchedTerms.size / totalConcepts) * 100);

    const terms = [...currentItems].sort(() => Math.random() - 0.5);
    const defs = [...currentItems].sort(() => Math.random() - 0.5);

    const container = document.getElementById('game-container');
    container.innerHTML = `
        <div class="match-grid">
            <div class="match-column" id="terms-col">
                ${terms.map(item => `<div class="match-item" data-type="term" data-id="${item.term}">${item.term}</div>`).join('')}
            </div>
            <div class="match-column" id="defs-col">
                ${defs.map(item => `<div class="match-item" data-type="def" data-id="${item.term}">${item.definition}</div>`).join('')}
            </div>
        </div>
        <div style="text-align: center; margin-top: 2rem;">
            <button class="btn btn-primary" onclick="startMatching()">Nueva Ronda</button>
        </div>
    `;

    // Add event listeners
    document.querySelectorAll('.match-item').forEach(item => {
        item.addEventListener('click', handleMatchClick);
    });
}

function handleMatchClick(e) {
    const clicked = e.target;
    if (clicked.classList.contains('correct')) return;

    // Handle selection visual
    const type = clicked.dataset.type;
    const col = type === 'term' ? document.getElementById('terms-col') : document.getElementById('defs-col');

    // Deselect others in same column
    col.querySelectorAll('.match-item').forEach(el => el.classList.remove('selected'));
    clicked.classList.add('selected');

    if (type === 'term') selectedTerm = clicked;
    else selectedDef = clicked;

    // Check match
    if (selectedTerm && selectedDef) {
        if (selectedTerm.dataset.id === selectedDef.dataset.id) {
            // Match!
            selectedTerm.classList.remove('selected');
            selectedDef.classList.remove('selected');
            selectedTerm.classList.add('correct');
            selectedDef.classList.add('correct');
            selectedDef.classList.add('correct');
            updateScore(10);

            // Update Global Progress
            matchedTerms.add(selectedTerm.dataset.id); // Add unique term
            updateProgressBar((matchedTerms.size / totalConcepts) * 100);

            selectedTerm = null;
            selectedDef = null;

            // Check win
            const allCorrect = document.querySelectorAll('.match-item.correct').length;
            if (allCorrect === 10) { // 5 pairs * 2 items
                setTimeout(() => alert('¡Excelente! Ronda completada.'), 500);
            }
        } else {
            // Wrong
            selectedTerm.classList.add('wrong');
            selectedDef.classList.add('wrong');
            setTimeout(() => {
                selectedTerm.classList.remove('wrong', 'selected');
                selectedDef.classList.remove('wrong', 'selected');
                selectedTerm = null;
                selectedDef = null;
            }, 500);
        }
    }
}

// --- Quiz Logic ---
function startQuiz() {
    currentItems = getAllConcepts().sort(() => Math.random() - 0.5);
    currentIndex = 0;
    updateProgressBar(0);
    renderQuizQuestion();
}

function renderQuizQuestion() {
    if (currentIndex >= currentItems.length) {
        document.getElementById('game-container').innerHTML = `
            <div style="text-align: center;">
                <h2>¡Quiz Completado!</h2>
                <p>Puntuación final: ${score}</p>
                <button class="btn btn-primary" onclick="showMenu()" style="margin-top: 1rem;">Volver al Menú</button>
            </div>
        `;
        return;
    }

    const item = currentItems[currentIndex];
    const allConcepts = getAllConcepts();

    // Generate 3 wrong answers
    const wrongOptions = allConcepts
        .filter(c => c.term !== item.term)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(c => c.term);

    const options = [...wrongOptions, item.term].sort(() => Math.random() - 0.5);

    const container = document.getElementById('game-container');
    container.innerHTML = `
        <div class="quiz-question">
            <p style="color: var(--text-muted); font-size: 1rem; margin-bottom: 1rem;">Pregunta ${currentIndex + 1} de ${currentItems.length}</p>
            <h3>¿Qué concepto corresponde a esta definición?</h3>
            <p style="margin-top: 1rem; font-style: italic;">"${item.definition}"</p>
        </div>
        <div class="quiz-options">
            ${options.map(opt => `<button class="quiz-option" onclick="checkQuizAnswer(this, '${opt}', '${item.term}')">${opt}</button>`).join('')}
        </div>
    `;

    // Update progress
    updateProgressBar((currentIndex / currentItems.length) * 100);
}

function checkQuizAnswer(btn, selected, correct) {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => opt.disabled = true);

    if (selected === correct) {
        btn.classList.add('correct');
        updateScore(20);
    } else {
        btn.classList.add('wrong');
        // Highlight correct one
        options.forEach(opt => {
            if (opt.innerText === correct) opt.classList.add('correct');
        });
    }

    setTimeout(() => {
        currentIndex++;
        if (currentMode === 'quiz') renderQuizQuestion();
        else renderHardQuestion();
    }, 1500);
}

// --- Hard Mode Logic ---
function startHardMode() {
    currentItems = studyData.customQuestions.sort(() => Math.random() - 0.5);
    currentIndex = 0;
    updateProgressBar(0);
    renderHardQuestion();
}

function renderHardQuestion() {
    if (currentIndex >= currentItems.length) {
        document.getElementById('game-container').innerHTML = `
            <div style="text-align: center;">
                <h2>¡Reto Difícil Completado!</h2>
                <p>Puntuación final: ${score}</p>
                <button class="btn btn-primary" onclick="showMenu()" style="margin-top: 1rem;">Volver al Menú</button>
            </div>
        `;
        return;
    }

    const item = currentItems[currentIndex];
    // Include the correct answer in options if not already there (though data should have it)
    // For this mode, options are pre-defined in data.js
    const options = [...item.options, item.answer].sort(() => Math.random() - 0.5);

    const container = document.getElementById('game-container');
    container.innerHTML = `
        <div class="quiz-question">
            <p style="color: var(--secondary); font-weight:bold; font-size: 1rem; margin-bottom: 1rem;">🔥 Pregunta de Aplicación ${currentIndex + 1} de ${currentItems.length}</p>
            <h3>${item.question}</h3>
        </div>
        <div class="quiz-options">
            ${options.map(opt => `<button class="quiz-option" onclick="checkQuizAnswer(this, '${opt}', '${item.answer}')">${opt}</button>`).join('')}
        </div>
    `;
    updateProgressBar((currentIndex / currentItems.length) * 100);
}
