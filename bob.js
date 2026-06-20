// Bob専用ページのJavaScript

// Hamburger Menu Functionality
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (!hamburger || !navLinks) return;
    
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
    
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initializeBobPage();
    initHamburgerMenu();
});

function initializeBobPage() {
    // 2つのファイルからセクションを結合
    if (window.bobSectionsMain && window.bobSectionsExtensions) {
        window.bobSections = [...window.bobSectionsMain, ...window.bobSectionsExtensions];
    }
    
    renderSections();
    
    // デフォルトで最初のセクションを表示
    if (window.bobSections && window.bobSections.length > 0) {
        showSection(window.bobSections[0].id);
    }
}

function renderSections() {
    console.log('🔍 renderSections called');
    console.log('📊 window.bobSections:', window.bobSections);
    console.log('📏 bobSections length:', window.bobSections?.length);
    
    const sectionsContainer = document.getElementById('bob-sections');
    if (!sectionsContainer) {
        console.error('❌ sectionsContainer not found');
        return;
    }
    if (!window.bobSections) {
        console.error('❌ window.bobSections is undefined');
        return;
    }

    sectionsContainer.innerHTML = '';

    window.bobSections.forEach((section, index) => {
        console.log(`📝 Rendering section ${index + 1}:`, section.id, section.title);
        const card = createSectionCard(section);
        sectionsContainer.appendChild(card);
    });
    
    console.log('✅ All sections rendered');
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
