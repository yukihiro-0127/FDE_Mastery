// Code Reading Gym - Main Logic

class CodeGymManager {
    constructor() {
        this.currentCategory = 'json';
        this.currentExerciseIndex = 0;
        this.exercises = [];
        this.completedExercises = this.loadProgress();
        this.answers = {};
    }
    
    init() {
        this.loadExercises();
        this.setupEventListeners();
        this.displayExercise();
        this.updateStats();
    }
    
    loadExercises() {
        const difficulties = this.getSelectedDifficulties();
        this.exercises = window.gymExercises[this.currentCategory].filter(ex => 
            difficulties.includes(ex.difficulty)
        );
    }
    
    getSelectedDifficulties() {
        const checkboxes = document.querySelectorAll('.difficulty-option input:checked');
        return Array.from(checkboxes).map(cb => cb.value);
    }
    
    setupEventListeners() {
        // Category buttons
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentCategory = e.target.dataset.category;
                this.currentExerciseIndex = 0;
                this.loadExercises();
                this.displayExercise();
            });
        });
        
        // Difficulty checkboxes
        document.querySelectorAll('.difficulty-option input').forEach(cb => {
            cb.addEventListener('change', () => {
                this.currentExerciseIndex = 0;
                this.loadExercises();
                this.displayExercise();
            });
        });
    }
    
    displayExercise() {
        if (this.exercises.length === 0) {
            this.showNoExercises();
            return;
        }
        
        const exercise = this.exercises[this.currentExerciseIndex];
        
        // Update header
        document.getElementById('exercise-title').textContent = exercise.title;
        document.getElementById('difficulty-badge').textContent = this.getDifficultyLabel(exercise.difficulty);
        document.getElementById('difficulty-badge').className = `difficulty-badge ${exercise.difficulty}`;
        document.getElementById('category-badge').textContent = this.currentCategory.toUpperCase();
        
        // Display code
        document.getElementById('code-display').textContent = exercise.code;
        
        // Display question
        document.getElementById('question-text').textContent = exercise.question;
        
        // Clear previous answer and feedback
        document.getElementById('user-answer').value = '';
        document.getElementById('feedback').style.display = 'none';
        document.getElementById('hint').style.display = 'none';
        document.getElementById('explanation').style.display = 'none';
        
        // Check if already completed
        if (this.completedExercises.includes(exercise.id)) {
            this.showCompletedBadge();
        }
    }
    
    getDifficultyLabel(difficulty) {
        const labels = {
            beginner: '初級',
            intermediate: '中級',
            advanced: '上級'
        };
        return labels[difficulty] || difficulty;
    }
    
    showNoExercises() {
        document.querySelector('.exercise-content').innerHTML = `
            <div class="no-exercises">
                <i class="fas fa-info-circle"></i>
                <p>選択した条件に一致する演習がありません。</p>
                <p>難易度の選択を変更してください。</p>
            </div>
        `;
    }
    
    showCompletedBadge() {
        const header = document.querySelector('.exercise-header');
        if (!header.querySelector('.completed-badge')) {
            const badge = document.createElement('span');
            badge.className = 'completed-badge';
            badge.innerHTML = '<i class="fas fa-check-circle"></i> 完了済み';
            header.appendChild(badge);
        }
    }
    
    loadProgress() {
        const saved = localStorage.getItem('codeGymProgress');
        return saved ? JSON.parse(saved) : [];
    }
    
    saveProgress() {
        localStorage.setItem('codeGymProgress', JSON.stringify(this.completedExercises));
    }
    
    updateStats() {
        const total = Object.values(window.gymExercises).flat().length;
        const completed = this.completedExercises.length;
        const accuracy = completed > 0 ? Math.round((completed / total) * 100) : 0;
        
        document.getElementById('completed-count').textContent = `${completed}/${total}`;
        document.getElementById('accuracy-rate').textContent = `${accuracy}%`;
    }
}

// Global functions for button clicks
function checkAnswer() {
    const exercise = gymManager.exercises[gymManager.currentExerciseIndex];
    const userAnswer = document.getElementById('user-answer').value.trim();
    
    if (!userAnswer) {
        alert('回答を入力してください');
        return;
    }
    
    const feedback = document.getElementById('feedback');
    const explanation = document.getElementById('explanation');
    
    // Simple answer checking (case-insensitive, whitespace-normalized)
    const isCorrect = userAnswer.toLowerCase().includes(exercise.answer.toLowerCase().substring(0, 10));
    
    if (isCorrect) {
        feedback.className = 'feedback-section correct';
        feedback.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <h3>正解！</h3>
            <p>素晴らしい！正しく理解できています。</p>
        `;
        
        // Mark as completed
        if (!gymManager.completedExercises.includes(exercise.id)) {
            gymManager.completedExercises.push(exercise.id);
            gymManager.saveProgress();
            gymManager.updateStats();
            gymManager.showCompletedBadge();
        }
    } else {
        feedback.className = 'feedback-section incorrect';
        feedback.innerHTML = `
            <i class="fas fa-times-circle"></i>
            <h3>もう一度考えてみましょう</h3>
            <p>ヒントを見て、再度チャレンジしてください。</p>
        `;
    }
    
    feedback.style.display = 'block';
    
    // Show explanation
    document.getElementById('explanation-content').innerHTML = exercise.explanation;
    explanation.style.display = 'block';
}

function showHint() {
    const exercise = gymManager.exercises[gymManager.currentExerciseIndex];
    const hint = document.getElementById('hint');
    
    hint.innerHTML = `
        <h3><i class="fas fa-lightbulb"></i> ヒント</h3>
        <p>${exercise.hint}</p>
    `;
    hint.style.display = 'block';
}

function copyCode() {
    const code = document.getElementById('code-display').textContent;
    navigator.clipboard.writeText(code).then(() => {
        const btn = document.querySelector('.btn-copy');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> コピーしました';
        setTimeout(() => {
            btn.innerHTML = originalText;
        }, 2000);
    });
}

function previousExercise() {
    if (gymManager.currentExerciseIndex > 0) {
        gymManager.currentExerciseIndex--;
        gymManager.displayExercise();
    }
}

function nextExercise() {
    if (gymManager.currentExerciseIndex < gymManager.exercises.length - 1) {
        gymManager.currentExerciseIndex++;
        gymManager.displayExercise();
    }
}

// Initialize
let gymManager;
document.addEventListener('DOMContentLoaded', () => {
    gymManager = new CodeGymManager();
    gymManager.init();
});

// Made with Bob
