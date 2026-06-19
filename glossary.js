// Glossary Manager

class GlossaryManager {
    constructor() {
        this.allTerms = window.glossaryTerms;
        this.filteredTerms = this.allTerms;
        this.currentCategory = 'all';
    }
    
    init() {
        this.displayTerms();
        this.setupEventListeners();
        this.updateResultsCount();
    }
    
    setupEventListeners() {
        // Search input
        const searchInput = document.getElementById('search-input');
        searchInput.addEventListener('input', (e) => {
            this.filterBySearch(e.target.value);
        });
        
        // Category filters
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentCategory = e.target.dataset.category;
                this.filterByCategory();
            });
        });
        
        // Alphabet index
        document.querySelectorAll('.index-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.scrollToLetter(e.target.dataset.letter);
            });
        });
    }
    
    filterByCategory() {
        if (this.currentCategory === 'all') {
            this.filteredTerms = this.allTerms;
        } else {
            this.filteredTerms = this.allTerms.filter(term => 
                term.category === this.currentCategory
            );
        }
        this.displayTerms();
        this.updateResultsCount();
    }
    
    filterBySearch(query) {
        if (!query.trim()) {
            this.filterByCategory();
            return;
        }
        
        const lowerQuery = query.toLowerCase();
        this.filteredTerms = this.allTerms.filter(term => 
            term.term.toLowerCase().includes(lowerQuery) ||
            term.reading.toLowerCase().includes(lowerQuery) ||
            term.definition.toLowerCase().includes(lowerQuery)
        );
        
        this.displayTerms();
        this.updateResultsCount();
    }
    
    displayTerms() {
        const container = document.getElementById('terms-container');
        const noResults = document.getElementById('no-results');
        
        if (this.filteredTerms.length === 0) {
            container.style.display = 'none';
            noResults.style.display = 'block';
            return;
        }
        
        container.style.display = 'block';
        noResults.style.display = 'none';
        
        // Sort terms alphabetically
        const sortedTerms = [...this.filteredTerms].sort((a, b) => 
            a.term.localeCompare(b.term)
        );
        
        container.innerHTML = sortedTerms.map(term => this.createTermCard(term)).join('');
        
        // Add click handlers for expand/collapse
        document.querySelectorAll('.term-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.term-tags')) {
                    card.classList.toggle('expanded');
                }
            });
        });
    }
    
    createTermCard(term) {
        const categoryLabel = this.getCategoryLabel(term.category);
        const relatedTermsHTML = term.relatedTerms.length > 0 
            ? `<div class="related-terms">
                <strong>関連用語:</strong> ${term.relatedTerms.join(', ')}
               </div>`
            : '';
        
        const ibmProductHTML = term.ibmProduct 
            ? `<div class="ibm-product">
                <i class="fas fa-cube"></i> <strong>IBM製品:</strong> ${term.ibmProduct}
               </div>`
            : '';
        
        return `
            <div class="term-card" data-term="${term.term}">
                <div class="term-header">
                    <div class="term-title-section">
                        <h3 class="term-title">${term.term}</h3>
                        <span class="term-reading">${term.reading}</span>
                    </div>
                    <div class="term-tags">
                        <span class="category-tag ${term.category}">${categoryLabel}</span>
                        <i class="fas fa-chevron-down expand-icon"></i>
                    </div>
                </div>
                
                <div class="term-definition">
                    ${term.definition}
                </div>
                
                <div class="term-details">
                    <div class="term-explanation">
                        <h4>詳細説明</h4>
                        ${term.explanation}
                    </div>
                    
                    <div class="customer-explanation">
                        <h4><i class="fas fa-user-tie"></i> 顧客への説明例</h4>
                        <p>${term.customerExplanation}</p>
                    </div>
                    
                    ${relatedTermsHTML}
                    ${ibmProductHTML}
                </div>
            </div>
        `;
    }
    
    getCategoryLabel(category) {
        const labels = {
            ai: 'AI/機械学習',
            cloud: 'クラウド',
            data: 'データ',
            api: 'API/連携',
            security: 'セキュリティ',
            ibm: 'IBM製品'
        };
        return labels[category] || category;
    }
    
    updateResultsCount() {
        const count = this.filteredTerms.length;
        const total = this.allTerms.length;
        document.getElementById('results-count').textContent = `${count}件 / 全${total}件`;
    }
    
    scrollToLetter(letter) {
        const terms = document.querySelectorAll('.term-card');
        for (let term of terms) {
            const termName = term.dataset.term;
            if (termName.toUpperCase().startsWith(letter)) {
                term.scrollIntoView({ behavior: 'smooth', block: 'start' });
                term.classList.add('highlight');
                setTimeout(() => term.classList.remove('highlight'), 2000);
                break;
            }
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const glossaryManager = new GlossaryManager();
    glossaryManager.init();
});

// Made with Bob
