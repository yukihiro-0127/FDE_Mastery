// Bob専用ページのJavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeBobPage();
});

function initializeBobPage() {
    renderSections();
    
    // デフォルトで最初のセクションを表示
    if (window.bobSections && window.bobSections.length > 0) {
        showSection(window.bobSections[0].id);
    }
}

function renderSections() {
    const sectionsContainer = document.getElementById('bob-sections');
    if (!sectionsContainer || !window.bobSections) return;

    sectionsContainer.innerHTML = '';

    window.bobSections.forEach(section => {
        const card = createSectionCard(section);
        sectionsContainer.appendChild(card);
    });
}

function createSectionCard(section) {
    const card = document.createElement('div');
    card.className = 'section-card';
    card.dataset.sectionId = section.id;
    
    card.innerHTML = `
        <div class="section-card-header">
            <span class="section-icon">${section.icon}</span>
            <h3 class="section-title">${section.title}</h3>
        </div>
        <p class="section-description">${section.description}</p>
    `;

    card.addEventListener('click', () => {
        showSection(section.id);
    });

    return card;
}

function showSection(sectionId) {
    // アクティブなカードを更新
    document.querySelectorAll('.section-card').forEach(card => {
        card.classList.remove('active');
    });
    
    const activeCard = document.querySelector(`[data-section-id="${sectionId}"]`);
    if (activeCard) {
        activeCard.classList.add('active');
    }

    // コンテンツを表示
    const section = window.bobSections.find(s => s.id === sectionId);
    if (section) {
        displaySectionContent(section);
    }

    // スムーズスクロール（モバイル対応）
    if (window.innerWidth <= 1024) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

function displaySectionContent(section) {
    const detailContainer = document.getElementById('bob-detail');
    if (!detailContainer) return;

    detailContainer.innerHTML = section.content;

    // コンテンツ内のリンクを処理
    detailContainer.querySelectorAll('a').forEach(link => {
        if (link.hostname !== window.location.hostname) {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
    });
}

// URLハッシュからセクションを表示
window.addEventListener('hashchange', function() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        const section = window.bobSections.find(s => s.id === hash);
        if (section) {
            showSection(hash);
        }
    }
});

// 初期ロード時にハッシュをチェック
if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    const section = window.bobSections && window.bobSections.find(s => s.id === hash);
    if (section) {
        setTimeout(() => showSection(hash), 100);
    }
}

// Made with Bob
