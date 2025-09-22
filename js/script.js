// =================================================================
// Portfolio Combined - Main JavaScript File
// =================================================================

// -----------------------------------------------------------------
// 1. TRANSLATIONS & LANGUAGE HANDLING
// -----------------------------------------------------------------

const translations = {
    en: {
        "nav": { "home": "Home", "about": "About", "skills": "Skills", "projects": "Projects", "contact": "Contact", "web": "Web Development", "mobile": "Mobile Development", "database": "Database Solutions", "consulting": "Software Consulting" },
        "personal": { "name": "Farea AL-Dhela'a" },
        "hero": { "subtitle": "Full-Stack Developer", "description": "Computer Science graduate passionate about building modern, scalable applications with intuitive user experiences.", "download": "Download CV", "contact": "Contact Me" },
        "about": { "title": "About Me", "subtitle": "Get to know me better", "who": "Who I Am", "description": "I'm a Computer Science graduate with a passion for creating innovative and effective applications. I've studied a wide range of programming languages and gained hands-on experience through university projects and internships.", "email": "Email", "phone": "Phone", "location": "Location" },
        "skills": { "title": "My Skills", "subtitle": "Technologies I work with", "backend": "Backend", "frontend": "Frontend", "programming": "Programming Languages", "viewAll": "View All Projects" },
        "projects": { "title": "My Projects", "subtitle": "Some of my recent work" },
        "timeline": { "education": "Education", "experience": "Experience", "degree": "Bachelor of Computer Science", "degreeDesc": "Graduated with focus on software development and system architecture. Completed coursework in algorithms, databases, and software engineering.", "freelance": "Freelance Developer", "selfEmployed": "Self-Employed", "freelanceDesc": "Developing custom software solutions for clients, including web applications, mobile apps, and database systems." },
        "contact": { "title": "Get In Touch", "subtitle": "Let's work together", "infoTitle": "Contact Information", "infoText": "Feel free to reach out to me for any questions or opportunities. I'm available for freelance projects and full-time positions.", "email": "Email", "phone": "Phone/WhatsApp", "location": "Location", "languages": "Languages", "namePlaceholder": "Your Name", "emailPlaceholder": "Your Email", "subjectPlaceholder": "Subject", "messagePlaceholder": "Your Message", "send": "Send Message" },
        "footer": { "tagline": "Creating digital experiences that matter.", "links": "Quick Links", "services": "Services", "rights": "All rights reserved." }
    },
    ar: {
        "nav": { "home": "الرئيسية", "about": "نبذة عني", "skills": "المهارات", "projects": "المشاريع", "contact": "التواصل", "web": "تطوير الويب", "mobile": "تطوير التطبيقات", "database": "حلول قواعد البيانات", "consulting": "الاستشارات البرمجية" },
        "personal": { "name": "فارع الضلاع" },
        "hero": { "subtitle": "مطور متكامل", "description": "خريج علوم حاسوب شغوف ببناء تطبيقات حديثة وقابلة للتوسع مع تجارب مستخدم بديهية.", "download": "تحميل السيرة الذاتية", "contact": "تواصل معي" },
        "about": { "title": "نبذة عني", "subtitle": "تعرف علي أكثر", "who": "من أنا", "description": "أنا خريج علوم حاسوب لدي شغف لإنشاء تطبيقات مبتكرة وفعالة. درست مجموعة واسعة من لغات البرمجة واكتسبت خبرة عملية من خلال مشاريع الجامعة والتدريب.", "email": "البريد الإلكتروني", "phone": "الهاتف", "location": "الموقع" },
        "skills": { "title": "مهاراتي", "subtitle": "التقنيات التي أعمل بها", "backend": "الخلفية", "frontend": "الواجهة الأمامية", "programming": "لغات البرمجة", "viewAll": "عرض جميع المشاريع" },
        "projects": { "title": "مشاريعي", "subtitle": "بعض من أعمالي الحديثة" },
        "timeline": { "education": "التعليم", "experience": "الخبرة", "degree": "بكالوريوس علوم الحاسوب", "degreeDesc": "تخرجت مع التركيز على تطوير البرمجيات وهندسة الأنظمة. أكملت دورات في الخوارزميات وقواعد البيانات وهندسة البرمجيات.", "freelance": "مطور مستقل", "selfEmployed": "عمل حر", "freelanceDesc": "تطوير حلول برمجية مخصصة للعملاء، بما في ذلك تطبيقات الويب والتطبيقات المحمولة وأنظمة قواعد البيانات." },
        "contact": { "title": "تواصل معي", "subtitle": "لنعمل معاً", "infoTitle": "معلومات التواصل", "infoText": "لا تتردد في التواصل معي لأي أسئلة أو فرص. أنا متاح للمشاريع المستقلة والوظائف بدوام كامل.", "email": "البريد الإلكتروني", "phone": "الهاتف/واتساب", "location": "الموقع", "languages": "اللغات", "namePlaceholder": "اسمك", "emailPlaceholder": "بريدك الإلكتروني", "subjectPlaceholder": "الموضوع", "messagePlaceholder": "رسالتك", "send": "إرسال الرسالة" },
        "footer": { "tagline": "إنشاء تجارب رقمية مهمة.", "links": "روابط سريعة", "services": "الخدمات", "rights": "جميع الحقوق محفوظة." }
    }
};

let currentLanguage = 'en';

function initTranslations() {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    applyTranslations();
    updateDocumentDirection();
}

function applyTranslations() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getTranslation(key);
        if (translation) {
            element.textContent = translation;
        }
    });

    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        const translation = getTranslation(key);
        if (translation) {
            element.setAttribute('placeholder', translation);
        }
    });
}

function getTranslation(key) {
    return key.split('.').reduce((obj, k) => obj && obj[k], translations[currentLanguage]) || null;
}

function switchLanguage(language) {
    if (translations[language]) {
        currentLanguage = language;
        localStorage.setItem('language', language);
        applyTranslations();
        updateDocumentDirection();

        const langMenu = document.getElementById('lang-menu');
        if (langMenu) {
            langMenu.classList.remove('show');
        }
    }
}

function updateDocumentDirection() {
    const html = document.documentElement;
    if (currentLanguage === 'ar') {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
    } else {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
    }
}

// -----------------------------------------------------------------
// 2. UI & UX FUNCTIONALITY
// -----------------------------------------------------------------

function toggleMobileMenu() {
    const navLinks = document.getElementById('nav-links');
    const menuBtn = document.getElementById('menu-btn');
    if (navLinks && menuBtn) {
        navLinks.classList.toggle('show');
        menuBtn.classList.toggle('active');
    }
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
}

function handleBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        backToTop.classList.toggle('show', window.scrollY > 300);
    }
}

function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    document.body.classList.toggle('dark-mode', isDark);

    themeToggle.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    if (revealElements.length === 0) return;

    const revealOnScroll = () => {
        revealElements.forEach(element => {
            if (element.getBoundingClientRect().top < window.innerHeight - 150) {
                element.classList.add('revealed');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
}

function toggleLangMenu() {
    const langMenu = document.getElementById("lang-menu");
    if (langMenu) {
        langMenu.classList.toggle("show");
    }
}

// -----------------------------------------------------------------
// 3. PAGE-SPECIFIC FUNCTIONALITY (Contact Form, Skills)
// -----------------------------------------------------------------

function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        if (!name || !email || !subject || !message) {
            showFormMessage('Please fill in all fields.', 'error');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }

        showFormMessage(`Thank you, ${name}! Your message has been sent successfully.`, 'success');
        contactForm.reset();
    });
}

function showFormMessage(message, type) {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    const existingMessage = contactForm.querySelector('.form-message');
    if (existingMessage) existingMessage.remove();

    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.innerHTML = `<i class='bx ${type === 'success' ? 'bx-check-circle' : 'bx-error-circle'}'></i><p>${message}</p>`;

    contactForm.insertBefore(messageDiv, contactForm.firstChild);
    setTimeout(() => messageDiv.remove(), 5000);
}

function initSkillBarsAnimation() {
    const skillsSection = document.querySelector('.skills');
    const skillBars = document.querySelectorAll('.progress-bar');
    if (!skillsSection || skillBars.length === 0) return;

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            skillBars.forEach((bar, index) => {
                const width = bar.getAttribute('data-width'); // Use a data attribute to store the target width
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100 + (index * 100));
            });
            observer.unobserve(skillsSection); // Animate only once
        }
    }, { threshold: 0.3 }); // Trigger when 30% of the section is visible

    observer.observe(skillsSection);
}

// -----------------------------------------------------------------
// 4. INITIALIZATION & EVENT LISTENERS
// -----------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    // Initializations
    initTranslations();
    setActiveNavLink();
    initThemeToggle();
    initContactForm();
    initSmoothScrolling();
    initSkillBarsAnimation();
    initScrollReveal();

    // Initial state checks
    handleNavbarScroll();
    handleBackToTop();

    // Global Event Listeners
    window.addEventListener('scroll', () => {
        handleNavbarScroll();
        handleBackToTop();
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('nav-links')?.classList.remove('show');
            document.getElementById('menu-btn')?.classList.remove('active');
        });
    });

    // Close language menu when clicking outside
    document.addEventListener("click", (e) => {
        const btn = document.getElementById("lang-btn");
        const menu = document.getElementById("lang-menu");
        if (btn && menu && !btn.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove("show");
        }
    });
});

// Make functions globally accessible if they are called from HTML (e.g., onclick)
window.switchLanguage = switchLanguage;
window.toggleMobileMenu = toggleMobileMenu;
window.toggleLangMenu = toggleLangMenu;

// Inject necessary CSS for form messages dynamically
const formMessageStyles = `
.form-message { display: flex; align-items: center; gap: 1rem; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; animation: fadeInUp 0.3s ease; }
.form-message-success { background: rgba(75, 181, 67, 0.1); color: #4BB543; border: 1px solid rgba(75, 181, 67, 0.2); }
.form-message-error { background: rgba(220, 53, 69, 0.1); color: #dc3545; border: 1px solid rgba(220, 53, 69, 0.2); }
.form-message i { font-size: 1.2rem; }
.form-message p { margin: 0; font-weight: 500; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
`;
const styleSheet = document.createElement('style');
styleSheet.textContent = formMessageStyles;
document.head.appendChild(styleSheet);
