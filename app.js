// FDE 30-Day Field Readiness - Main Application

// Progress Management System
class ProgressManager {
    constructor() {
        this.storageKey = 'fde_progress';
        this.progress = this.loadProgress();
    }

    loadProgress() {
        const saved = localStorage.getItem(this.storageKey);
        if (saved) {
            return JSON.parse(saved);
        }
        return {
            completedDays: [],
            startDate: new Date().toISOString(),
            categories: {
                fde: 0,
                code: 0,
                ai: 0,
                practice: 0
            }
        };
    }

    saveProgress() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.progress));
    }

    completeDay(dayNumber) {
        if (!this.progress.completedDays.includes(dayNumber)) {
            this.progress.completedDays.push(dayNumber);
            this.updateCategories(dayNumber);
            this.saveProgress();
            this.updateUI();
        }
    }

    uncompleteDay(dayNumber) {
        const index = this.progress.completedDays.indexOf(dayNumber);
        if (index > -1) {
            this.progress.completedDays.splice(index, 1);
            this.updateCategories(dayNumber);
            this.saveProgress();
            this.updateUI();
        }
    }

    isDayCompleted(dayNumber) {
        return this.progress.completedDays.includes(dayNumber);
    }

    updateCategories(dayNumber) {
        // Day 1-7: FDE理解
        if (dayNumber >= 1 && dayNumber <= 7) {
            this.progress.categories.fde = this.calculateCategoryProgress(1, 7);
        }
        // Day 8-14: コード読解
        else if (dayNumber >= 8 && dayNumber <= 14) {
            this.progress.categories.code = this.calculateCategoryProgress(8, 14);
        }
        // Day 15-21: AI/RAG
        else if (dayNumber >= 15 && dayNumber <= 21) {
            this.progress.categories.ai = this.calculateCategoryProgress(15, 21);
        }
        // Day 22-30: 実戦演習
        else if (dayNumber >= 22 && dayNumber <= 30) {
            this.progress.categories.practice = this.calculateCategoryProgress(22, 30);
        }
    }

    calculateCategoryProgress(start, end) {
        let completed = 0;
        for (let i = start; i <= end; i++) {
            if (this.progress.completedDays.includes(i)) {
                completed++;
            }
        }
        return Math.round((completed / (end - start + 1)) * 100);
    }

    getOverallProgress() {
        return Math.round((this.progress.completedDays.length / 30) * 100);
    }

    getWeekProgress(week) {
        const weekRanges = {
            1: [1, 7],
            2: [8, 14],
            3: [15, 21],
            4: [22, 30]
        };
        const [start, end] = weekRanges[week];
        let completed = 0;
        for (let i = start; i <= end; i++) {
            if (this.progress.completedDays.includes(i)) {
                completed++;
            }
        }
        return {
            completed,
            total: end - start + 1,
            percentage: Math.round((completed / (end - start + 1)) * 100)
        };
    }

    getCurrentWeek() {
        const completed = this.progress.completedDays.length;
        if (completed < 7) return 1;
        if (completed < 14) return 2;
        if (completed < 21) return 3;
        return 4;
    }

    getNextDay() {
        for (let i = 1; i <= 30; i++) {
            if (!this.progress.completedDays.includes(i)) {
                return i;
            }
        }
        return 30; // All completed
    }

    updateUI() {
        this.updateOverallProgress();
        this.updateWeekProgress();
        this.updateStats();
        this.updateCategoryProgress();
        this.updateTodayCard();
    }

    updateOverallProgress() {
        const percentage = this.getOverallProgress();
        const percentageEl = document.getElementById('overall-percentage');
        const ringEl = document.getElementById('overall-progress-ring');
        
        if (percentageEl) {
            percentageEl.textContent = `${percentage}%`;
        }
        
        if (ringEl) {
            const circumference = 283;
            const offset = circumference - (percentage / 100) * circumference;
            ringEl.style.strokeDashoffset = offset;
        }
    }

    updateWeekProgress() {
        for (let week = 1; week <= 4; week++) {
            const progress = this.getWeekProgress(week);
            const fillEl = document.getElementById(`week${week}-progress`);
            const textEl = document.getElementById(`week${week}-text`);
            
            if (fillEl) {
                fillEl.style.width = `${progress.percentage}%`;
            }
            if (textEl) {
                textEl.textContent = `${progress.completed}/${progress.total} 完了`;
            }
        }
    }

    updateStats() {
        const completedEl = document.getElementById('completed-days');
        const remainingEl = document.getElementById('remaining-days');
        const weekEl = document.getElementById('current-week');
        
        if (completedEl) {
            completedEl.textContent = this.progress.completedDays.length;
        }
        if (remainingEl) {
            remainingEl.textContent = 30 - this.progress.completedDays.length;
        }
        if (weekEl) {
            weekEl.textContent = `Week ${this.getCurrentWeek()}`;
        }
    }

    updateCategoryProgress() {
        const categories = ['fde', 'code', 'ai', 'practice'];
        categories.forEach(cat => {
            const el = document.getElementById(`cat-${cat}`);
            if (el) {
                el.style.width = `${this.progress.categories[cat]}%`;
            }
        });
    }

    updateTodayCard() {
        const nextDay = this.getNextDay();
        const dayData = this.getDayData(nextDay);
        
        const cardEl = document.getElementById('today-card');
        if (cardEl && dayData) {
            cardEl.innerHTML = `
                <div class="today-day">Day ${nextDay}</div>
                <h3>${dayData.title}</h3>
                <p>${dayData.description}</p>
                <div class="today-goals">
                    <h4>今日のゴール</h4>
                    <ul>
                        ${dayData.goals.map(goal => `<li>${goal}</li>`).join('')}
                    </ul>
                </div>
                <a href="day.html?day=${nextDay}" class="btn btn-primary">Day ${nextDay}を始める</a>
            `;
        }
    }

    getDayData(day) {
        const dayData = {
            1: {
                title: 'FDEとは何か',
                description: 'FDEの定義、役割、そして客先常駐コンサルとの違いを理解する。',
                goals: [
                    'FDEを一言で説明できる',
                    '客先常駐コンサルとの違いを説明できる',
                    'FDEが強くなる条件を理解する'
                ]
            },
            2: {
                title: '客先常駐コンサルとの違い',
                description: 'FDEと客先常駐コンサルの本質的な違いを、価値提供の観点から理解する。',
                goals: [
                    '両者の違いを顧客に説明できる',
                    'FDEが便利屋化しない条件を理解する',
                    'IBM文脈でのFDEの位置づけを理解する'
                ]
            },
            3: {
                title: '顧客課題を分解する',
                description: '曖昧な顧客要望を、業務課題・技術論点・必要データに分解する方法を学ぶ。',
                goals: [
                    '表面要望と本当の課題を区別できる',
                    '技術論点を洗い出せる',
                    '必要データを特定できる'
                ]
            },
            4: {
                title: 'PoCと本番化の違い',
                description: 'PoCで証明すべきことと、本番化で詰まるポイントを理解する。',
                goals: [
                    'PoCの目的を説明できる',
                    '本番化リスクを洗い出せる',
                    'MVP思考を理解する'
                ]
            },
            5: {
                title: 'IBMソリューションとパートナー連携',
                description: 'IBM製品群とパートナーエコシステムの基礎を理解する。',
                goals: [
                    '主要IBM製品を説明できる',
                    'パートナー連携の価値を理解する',
                    'ハイブリッドクラウドの意味を理解する'
                ]
            },
            6: {
                title: 'FDEメモの書き方',
                description: '顧客との会話を構造化し、次アクションにつなげるメモ術を学ぶ。',
                goals: [
                    'FDEメモのフォーマットを理解する',
                    '顧客要望を構造化できる',
                    '次アクションを明確にできる'
                ]
            },
            7: {
                title: 'Week 1確認テスト',
                description: 'Week 1の内容を総復習し、理解度を確認する。',
                goals: [
                    'FDEの定義を説明できる',
                    '顧客課題を分解できる',
                    'FDEメモを書ける'
                ]
            },
            8: {
                title: 'JSONを読む',
                description: 'JSONの構造を理解し、API連携の基礎を学ぶ。',
                goals: [
                    'JSONの基本構造を理解する',
                    'キーと値の関係を説明できる',
                    'FDE視点でJSONを読める'
                ]
            }
            // ... 他のDayも同様に定義
        };
        
        return dayData[day] || {
            title: `Day ${day}`,
            description: '学習内容を準備中です。',
            goals: ['準備中']
        };
    }
}

// Initialize Progress Manager
const progressManager = new ProgressManager();

// Update UI on page load
document.addEventListener('DOMContentLoaded', () => {
    progressManager.updateUI();
});

// Export for use in other pages
window.progressManager = progressManager;

// Made with Bob
