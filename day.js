// Day content loader and manager

class DayContentManager {
    constructor() {
        this.currentDay = this.getDayFromURL();
        this.progressManager = new ProgressManager();
    }
    
    getDayFromURL() {
        const params = new URLSearchParams(window.location.search);
        return parseInt(params.get('day')) || 1;
    }
    
    init() {
        this.loadDayContent();
        this.setupNavigation();
        this.setupQuiz();
        this.updateProgress();
    }
    
    loadDayContent() {
        const dayData = window.dayContents[this.currentDay];
        
        if (!dayData) {
            this.showError('コンテンツが見つかりません');
            return;
        }
        
        // Update page title
        document.title = `Day ${this.currentDay}: ${dayData.title} - FDE Mastery`;
        
        // Update header
        document.getElementById('day-number').textContent = `Day ${this.currentDay}`;
        document.getElementById('day-title').textContent = dayData.title;
        document.getElementById('day-subtitle').textContent = dayData.subtitle;
        
        // Update goals
        const goalsContainer = document.getElementById('learning-goals');
        goalsContainer.innerHTML = dayData.goals.map(goal => 
            `<li><i class="fas fa-check-circle"></i> ${goal}</li>`
        ).join('');
        
        // Update main content
        document.getElementById('main-content').innerHTML = dayData.content;
        
        // Update quiz
        if (dayData.quiz && dayData.quiz.length > 0) {
            this.renderQuiz(dayData.quiz);
        }
        
        // Update exercise
        if (dayData.exercise) {
            this.renderExercise(dayData.exercise);
        }
        
        // Update next steps
        if (dayData.nextSteps) {
            this.renderNextSteps(dayData.nextSteps);
        }
    }
    
    renderQuiz(quizData) {
        const quizContainer = document.getElementById('quiz-container');
        
        quizContainer.innerHTML = quizData.map((q, index) => `
            <div class="quiz-question" data-quiz-index="${index}">
                <h4>問題 ${index + 1}</h4>
                <p class="question-text">${q.question}</p>
                <div class="quiz-options">
                    ${q.options.map((option, optIndex) => `
                        <label class="quiz-option">
                            <input type="radio" name="quiz-${index}" value="${optIndex}">
                            <span>${option}</span>
                        </label>
                    `).join('')}
                </div>
                <button class="btn-check-answer" onclick="dayManager.checkAnswer(${index})">
                    回答を確認
                </button>
                <div class="quiz-feedback" id="feedback-${index}" style="display: none;"></div>
            </div>
        `).join('');
    }
    
    checkAnswer(quizIndex) {
        const quizData = window.dayContents[this.currentDay].quiz[quizIndex];
        const selectedOption = document.querySelector(`input[name="quiz-${quizIndex}"]:checked`);
        
        if (!selectedOption) {
            alert('選択肢を選んでください');
            return;
        }
        
        const selectedValue = parseInt(selectedOption.value);
        const feedbackElement = document.getElementById(`feedback-${quizIndex}`);
        
        if (selectedValue === quizData.correct) {
            feedbackElement.className = 'quiz-feedback correct';
            feedbackElement.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <strong>正解！</strong>
                <p>${quizData.explanation}</p>
            `;
        } else {
            feedbackElement.className = 'quiz-feedback incorrect';
            feedbackElement.innerHTML = `
                <i class="fas fa-times-circle"></i>
                <strong>不正解</strong>
                <p>${quizData.explanation}</p>
            `;
        }
        
        feedbackElement.style.display = 'block';
    }
    
    renderExercise(exerciseData) {
        const exerciseContainer = document.getElementById('exercise-container');
        
        exerciseContainer.innerHTML = `
            <h3>${exerciseData.title}</h3>
            <div class="exercise-prompt">
                <p>${exerciseData.prompt}</p>
            </div>
            <div class="exercise-answer">
                <h4>あなたの回答:</h4>
                <textarea id="user-answer" rows="6" placeholder="ここに回答を入力してください..."></textarea>
                <button class="btn-show-answer" onclick="dayManager.toggleSampleAnswer()">
                    模範解答を見る
                </button>
            </div>
            <div class="sample-answer-container" id="sample-answer" style="display: none;">
                <h4>模範解答:</h4>
                ${exerciseData.sampleAnswer}
            </div>
        `;
    }
    
    toggleSampleAnswer() {
        const sampleAnswer = document.getElementById('sample-answer');
        const button = document.querySelector('.btn-show-answer');
        
        if (sampleAnswer.style.display === 'none') {
            sampleAnswer.style.display = 'block';
            button.textContent = '模範解答を隠す';
        } else {
            sampleAnswer.style.display = 'none';
            button.textContent = '模範解答を見る';
        }
    }
    
    renderNextSteps(nextSteps) {
        const nextStepsContainer = document.getElementById('next-steps');
        
        if (nextSteps && nextSteps.length > 0) {
            nextStepsContainer.innerHTML = `
                <h3>次のステップ</h3>
                <ul>
                    ${nextSteps.map(step => `<li>${step}</li>`).join('')}
                </ul>
            `;
        }
    }
    
    setupNavigation() {
        const prevBtn = document.getElementById('prev-day');
        const nextBtn = document.getElementById('next-day');
        const completeBtn = document.getElementById('complete-day');
        
        // Previous day button
        if (this.currentDay > 1) {
            prevBtn.style.display = 'inline-block';
            prevBtn.onclick = () => {
                window.location.href = `day.html?day=${this.currentDay - 1}`;
            };
        } else {
            prevBtn.style.display = 'none';
        }
        
        // Next day button
        if (this.currentDay < 30) {
            nextBtn.style.display = 'inline-block';
            nextBtn.onclick = () => {
                window.location.href = `day.html?day=${this.currentDay + 1}`;
            };
        } else {
            nextBtn.style.display = 'none';
        }
        
        // Complete day button
        const isCompleted = this.progressManager.isDayCompleted(this.currentDay);
        this.updateCompleteButton(isCompleted);
        
        completeBtn.onclick = () => {
            if (isCompleted) {
                this.progressManager.uncompleteDay(this.currentDay);
            } else {
                this.progressManager.completeDay(this.currentDay);
            }
            this.updateCompleteButton(!isCompleted);
        };
    }
    
    updateCompleteButton(isCompleted) {
        const completeBtn = document.getElementById('complete-day');
        
        if (isCompleted) {
            completeBtn.innerHTML = '<i class="fas fa-check-circle"></i> 完了済み';
            completeBtn.classList.add('completed');
        } else {
            completeBtn.innerHTML = '<i class="far fa-circle"></i> 完了にする';
            completeBtn.classList.remove('completed');
        }
    }
    
    updateProgress() {
        const progressBar = document.getElementById('day-progress');
        const progressText = document.getElementById('progress-text');
        
        const completedDays = this.progressManager.getCompletedDays().length;
        const percentage = (completedDays / 30) * 100;
        
        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${completedDays}/30日完了`;
    }
    
    showError(message) {
        document.getElementById('main-content').innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-triangle"></i>
                <h2>エラー</h2>
                <p>${message}</p>
                <a href="roadmap.html" class="btn-primary">ロードマップに戻る</a>
            </div>
        `;
    }
}

// Initialize when DOM is loaded
let dayManager;

document.addEventListener('DOMContentLoaded', () => {
    dayManager = new DayContentManager();
    dayManager.init();
});

// Made with Bob
