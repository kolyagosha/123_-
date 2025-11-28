/* ========================================
   SSRM - Main JavaScript
   Система Самоконтролю Результатів Моніторингу
   ======================================== */

/* ========================================
   1. TRANSLATIONS SYSTEM
   ======================================== */
const translations = {
    uk: {
        // Common
        'loading': 'Завантаження...',
        'error': 'Помилка',
        'success': 'Успішно',
        'cancel': 'Скасувати',
        'confirm': 'Підтвердити',
        'close': 'Закрити',
        'save': 'Зберегти',
        'edit': 'Редагувати',
        'delete': 'Видалити',
        
        // Navigation
        'home': 'Головна',
        'login': 'Вхід',
        'logout': 'Вихід',
        'profile': 'Профіль',
        'dashboard': 'Панель управління',
        
        // Hero Section
        'hero-title': 'SSRM',
        'hero-subtitle': 'Система Самоконтролю Результатів Моніторингу',
        'hero-description': 'Платформа для об\'єктивної онлайн-здачі заліку з фізкультури та отримання Індивідуального Фітнес-Сертифіката без відвідування загальних занять',
        
        // Buttons
        'student-title': 'Я — Студент',
        'student-desc': 'Здати залік швидко',
        'instructor-title': 'Я — Викладач',
        'instructor-desc': 'Контроль і Верифікація',
        
        // Features
        'feature1-title': 'AI-Верифікація',
        'feature1-text': 'Автоматичний підрахунок повторів',
        'feature2-title': 'Швидко',
        'feature2-text': 'Залік за 5 хвилин',
        'feature3-title': 'Об\'єктивно',
        'feature3-text': 'Справедлива оцінка',
        'feature4-title': 'Сертифікат',
        'feature4-text': 'Офіційний документ',
        
        // Footer
        'footer-text': 'Стежте за нашими наступними проектами!',
        
        // Student Login
        'student-login-title': 'Вхід та Активація Профілю',
        'step1-title': 'Крок 1: Ідентифікація (Код ВНЗ)',
        'step1-description': 'Для первинного входу знайдіть себе у списку та введіть код активації, отриманий у деканаті.',
        'select-yourself': 'Виберіть себе...',
        'your-name': 'Ваше Прізвище та Ім\'я:',
        'activation-code': 'Код Активації ВНЗ:',
        'verify-button': 'Перевірити та Активувати',
        'code-correct': '✅ Код вірний! Переходимо до створення акаунту...',
        'code-incorrect': '❌ Невірний код або студент. Перевірте дані.',
        
        'step2-title': 'Крок 2: Створення Профілю та Пароля',
        'your-email': 'Ваша Електронна пошта (логін):',
        'your-password': 'Пароль (мінімум 6 символів):',
        'age': 'Вік (років):',
        'height': 'Зріст (см):',
        'weight': 'Вага (кг):',
        'health-restrictions': 'У мене є обмеження за здоров\'ям (довідка).',
        'upload-certificate': 'Завантажити скан довідки (JPG/PDF):',
        'consent': 'Я згоден з умовами здачі тесту онлайн.',
        'create-account': 'Створити Акаунт та Продовжити',
        'account-created': '🎉 Акаунт створено! Перехід до тесту...',
        
        // Quest Page
        'quest-title': 'Прискорена Сертифікація (Залік за Семестр!)',
        'quest-description': 'Виконайте весь комплекс безперервно. Загальна тривалість відео — до 5 хвилин.',
        'quest-step1': 'Крок 1: Верифікація та Початок',
        'control-word': 'КОНТРОЛЬНЕ СЛОВО:',
        'control-word-instruction': 'Увімкніть запис та голосно вимовте це слово перед початком вправ.',
        'quest-step2': 'Крок 2: Комплекс Вправ (Максимум 3 Хвилини)',
        'pulse-before': 'P1 (Пульс до):',
        'pulse-after': 'P2 (Одразу після):',
        'pulse-recovery': 'P3 (Через 1 хв):',
        'quest-step3': 'Крок 3: Фіксація Відновлення',
        'quest-step4': 'Крок 4: Завантаження Доказів',
        'upload-video': 'Завантажте відео комплексу (макс. 50 МБ):',
        'confirm-completion': 'Я підтверджую, що виконав весь комплекс безперервно за час менше 3 хвилин.',
        'submit-quest': 'Відправити на перевірку',
        'fill-all-fields': 'Будь ласка, заповніть всі поля, завантажте відео та підтвердіть виконання.',
        'quest-submitted': '🎉 Тест відправлено! Перехід на сторінку статусу...',
        
        // Student Dashboard
        'status-title': 'SSRM: Твій Заліковий Статус',
        'status-on-review': 'Очікує Перевірки Викладачем',
        'status-passed': '✅ ЗАЛІК ОТРИМАНО!',
        'status-failed': '❌ НЕ ЗАЛІК',
        'status-overdue': '⚠️ ПРОСТРОЧЕНО ТЕРМІН ПЕРЕВІРКИ',
        'deadline-text': 'Крайній термін для перевірки:',
        'appeal-question': 'Хочете оскаржити результат?',
        'appeal-button': 'Оскаржити результат',
        'appeal-sent': 'Заявка на оспорювання відправлена Завідувачу Кафедри!',
        'no-test': 'Тест ще не здано. Будь ласка, здайте тест на попередній сторінці.',
        
        // Instructor Login
        'instructor-login-title': 'Вхід до Панелі Верифікації',
        'instructor-subtitle': 'SSRM: Система Самоконтролю Результатів Моніторингу',
        'email-login': 'Email (Логін):',
        'password': 'Пароль:',
        'login-button': 'Увійти та Почати Перевірку',
        'welcome-instructor': '✅ Ласкаво просимо,',
        'invalid-credentials': '❌ Невірний логін або пароль.',
        
        // Instructor Dashboard
        'verification-panel': 'Панель Верифікації SSRM',
        'welcome-professor': 'Ласкаво просимо, Професоре! Завдань в роботі:',
        'welcome-hod': 'Ласкаво просимо, Завідувач! Завдань в роботі:',
        'my-tasks': 'Мої Завдання',
        'overdue-audit': 'Прострочені (Аудит)',
        'sort-by': 'Сортувати за:',
        'sort-deadline': 'За терміном перевірки (спочатку найтерміновіші)',
        'sort-name': 'За прізвищем студента',
        'student': 'Студент:',
        'faculty': 'Факультет:',
        'control-word-label': 'Контрольне Слово:',
        'recovery-indicators': 'Показники Відновлення:',
        'deadline-days': 'Термін перевірки (днів):',
        'watch-video': 'ДИВИТИСЯ БЕЗПЕРЕРВНЕ ВІДЕО',
        'comments': 'Коментарі:',
        'grade-pass': 'Поставити ЗАЛІК',
        'grade-fail': 'Поставити НЕЗАЛІК',
        'grade-saved': 'Оцінка виставлена та відправлена студенту. Дані збережено в базі.',
        
        // Time indicators
        'today': 'СЬОГОДНІ!',
        'days': 'дн.',
        'overdue': 'ПРОСТРОЧЕНО'
    },
    
    en: {
        // Common
        'loading': 'Loading...',
        'error': 'Error',
        'success': 'Success',
        'cancel': 'Cancel',
        'confirm': 'Confirm',
        'close': 'Close',
        'save': 'Save',
        'edit': 'Edit',
        'delete': 'Delete',
        
        // Navigation
        'home': 'Home',
        'login': 'Login',
        'logout': 'Logout',
        'profile': 'Profile',
        'dashboard': 'Dashboard',
        
        // Hero Section
        'hero-title': 'SSRM',
        'hero-subtitle': 'Self-Control System for Results Monitoring',
        'hero-description': 'Platform for objective online physical education assessment and Individual Fitness Certificate without attending group classes',
        
        // Buttons
        'student-title': 'I\'m a Student',
        'student-desc': 'Pass the exam quickly',
        'instructor-title': 'I'm an Instructor',
        'instructor-desc': 'Control & Verification',
        
        // Features
        'feature1-title': 'AI-Verification',
        'feature1-text': 'Automatic rep counting',
        'feature2-title': 'Fast',
        'feature2-text': 'Pass in 5 minutes',
        'feature3-title': 'Objective',
        'feature3-text': 'Fair assessment',
        'feature4-title': 'Certificate',
        'feature4-text': 'Official document',
        
        // Footer
        'footer-text': 'Follow our upcoming projects!',
        
        // Student Login
        'student-login-title': 'Login and Profile Activation',
        'step1-title': 'Step 1: Identification (University Code)',
        'step1-description': 'For initial login, find yourself in the list and enter the activation code received from the dean's office.',
        'select-yourself': 'Select yourself...',
        'your-name': 'Your Last Name and First Name:',
        'activation-code': 'University Activation Code:',
        'verify-button': 'Verify and Activate',
        'code-correct': '✅ Code is correct! Proceeding to account creation...',
        'code-incorrect': '❌ Invalid code or student. Please check your data.',
        
        'step2-title': 'Step 2: Profile and Password Creation',
        'your-email': 'Your Email (login):',
        'your-password': 'Password (minimum 6 characters):',
        'age': 'Age (years):',
        'height': 'Height (cm):',
        'weight': 'Weight (kg):',
        'health-restrictions': 'I have health restrictions (certificate).',
        'upload-certificate': 'Upload certificate scan (JPG/PDF):',
        'consent': 'I agree to the terms of online testing.',
        'create-account': 'Create Account and Continue',
        'account-created': '🎉 Account created! Proceeding to test...',
        
        // Quest Page
        'quest-title': 'Accelerated Certification (Semester Credit!)',
        'quest-description': 'Complete the entire complex continuously. Total video duration — up to 5 minutes.',
        'quest-step1': 'Step 1: Verification and Start',
        'control-word': 'CONTROL WORD:',
        'control-word-instruction': 'Start recording and loudly say this word before starting exercises.',
        'quest-step2': 'Step 2: Exercise Complex (Maximum 3 Minutes)',
        'pulse-before': 'P1 (Pulse before):',
        'pulse-after': 'P2 (Immediately after):',
        'pulse-recovery': 'P3 (After 1 min):',
        'quest-step3': 'Step 3: Recovery Recording',
        'quest-step4': 'Step 4: Upload Evidence',
        'upload-video': 'Upload complex video (max. 50 MB):',
        'confirm-completion': 'I confirm that I completed the entire complex continuously in less than 3 minutes.',
        'submit-quest': 'Submit for Review',
        'fill-all-fields': 'Please fill in all fields, upload video and confirm completion.',
        'quest-submitted': '🎉 Test submitted! Redirecting to status page...',
        
        // Student Dashboard
        'status-title': 'SSRM: Your Credit Status',
        'status-on-review': 'Awaiting Instructor Review',
        'status-passed': '✅ CREDIT RECEIVED!',
        'status-failed': '❌ NO CREDIT',
        'status-overdue': '⚠️ REVIEW DEADLINE OVERDUE',
        'deadline-text': 'Deadline for review:',
        'appeal-question': 'Want to appeal the result?',
        'appeal-button': 'Appeal Result',
        'appeal-sent': 'Appeal request sent to Department Head!',
        'no-test': 'Test not yet submitted. Please submit the test on the previous page.',
        
        // Instructor Login
        'instructor-login-title': 'Verification Panel Login',
        'instructor-subtitle': 'SSRM: Self-Control System for Results Monitoring',
        'email-login': 'Email (Login):',
        'password': 'Password:',
        'login-button': 'Login and Start Review',
        'welcome-instructor': '✅ Welcome,',
        'invalid-credentials': '❌ Invalid login or password.',
        
        // Instructor Dashboard
        'verification-panel': 'SSRM Verification Panel',
        'welcome-professor': 'Welcome, Professor! Tasks in progress:',
        'welcome-hod': 'Welcome, Head of Department! Tasks in progress:',
        'my-tasks': 'My Tasks',
        'overdue-audit': 'Overdue (Audit)',
        'sort-by': 'Sort by:',
        'sort-deadline': 'By review deadline (most urgent first)',
        'sort-name': 'By student name',
        'student': 'Student:',
        'faculty': 'Faculty:',
        'control-word-label': 'Control Word:',
        'recovery-indicators': 'Recovery Indicators:',
        'deadline-days': 'Review deadline (days):',
        'watch-video': 'WATCH CONTINUOUS VIDEO',
        'comments': 'Comments:',
        'grade-pass': 'Give CREDIT',
        'grade-fail': 'Give NO CREDIT',
        'grade-saved': 'Grade submitted and sent to student. Data saved to database.',
        
        // Time indicators
        'today': 'TODAY!',
        'days': 'days',
        'overdue': 'OVERDUE'
    }
};

/* ========================================
   2. LANGUAGE MANAGER
   ======================================== */
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('ssrm_language') || 'uk';
        this.init();
    }
    
    init() {
        // Set initial language
        this.setLanguage(this.currentLang);
        
        // Add event listeners to language buttons
        document.addEventListener('DOMContentLoaded', () => {
            const langButtons = document.querySelectorAll('.lang-btn');
            langButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const lang = e.target.getAttribute('data-lang');
                    this.setLanguage(lang);
                });
            });
        });
    }
    
    setLanguage(lang) {
        if (!translations[lang]) {
            console.error(`Language "${lang}" not found`);
            return;
        }
        
        this.currentLang = lang;
        localStorage.setItem('ssrm_language', lang);
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update all translatable elements
        this.updateTranslations();
        
        // Update active button state
        this.updateActiveButton();
    }
    
    updateTranslations() {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.translate(key);
            
            if (translation) {
                // Check if element is input placeholder
                if (element.hasAttribute('placeholder')) {
                    element.setAttribute('placeholder', translation);
                } else {
                    element.textContent = translation;
                }
            }
        });
    }
    
    updateActiveButton() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            if (btnLang === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    
    translate(key) {
        return translations[this.currentLang][key] || key;
    }
    
    getCurrentLanguage() {
        return this.currentLang;
    }
}

// Initialize Language Manager
const langManager = new LanguageManager();

/* ========================================
   3. TOAST NOTIFICATION SYSTEM
   ======================================== */
class ToastManager {
    constructor() {
        this.container = null;
        this.init();
    }
    
    init() {
        // Create toast container if it doesn't exist
        if (!document.getElementById('toast-container')) {
            this.container = document.createElement('div');
            this.container.id = 'toast-container';
            this.container.style.cssText = `
                position: fixed;
                top: 80px;
                right: 20px;
                z-index: 9999;
                display: flex;
                flex-direction: column;
                gap: 10px;
                max-width: 400px;
            `;
            document.body.appendChild(this.container);
        } else {
            this.container = document.getElementById('toast-container');
        }
    }
    
    show(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type} animate-fadeIn`;
        
        const colors = {
            success: '#28a745',
            error: '#dc3545',
            warning: '#ffc107',
            info: '#17a2b8'
        };
        
        toast.style.cssText = `
            background: white;
            padding: 1rem 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            border-left: 4px solid ${colors[type] || colors.info};
            display: flex;
            align-items: center;
            gap: 0.75rem;
            min-width: 300px;
        `;
        
        const icons = {
            success: '✅',
            error: '❌',
            warning: '⚠️',
            info: 'ℹ️'
        };
        
        toast.innerHTML = `
            <span style="font-size: 1.5rem;">${icons[type] || icons.info}</span>
            <span style="flex: 1; color: #343a40; font-weight: 500;">${message}</span>
        `;
        
        this.container.appendChild(toast);
        
        // Auto remove
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(400px)';
            toast.style.transition = 'all 0.3s ease';
            
            setTimeout(() => {
                this.container.removeChild(toast);
            }, 300);
        }, duration);
    }
    
    success(message, duration) {
        this.show(message, 'success', duration);
    }
    
    error(message, duration) {
        this.show(message, 'error', duration);
    }
    
    warning(message, duration) {
        this.show(message, 'warning', duration);
    }
    
    info(message, duration) {
        this.show(message, 'info', duration);
    }
}

// Initialize Toast Manager
const toast = new ToastManager();

/* ========================================
   4. FORM VALIDATION UTILITIES
   ======================================== */
const FormValidator = {
    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },
    
    validatePassword(password) {
        return password.length >= 6;
    },
    
    validateRequired(value) {
        return value && value.trim() !== '';
    },
    
    validateNumber(value, min = null, max = null) {
        const num = parseFloat(value);
        if (isNaN(num)) return false;
        if (min !== null && num < min) return false;
        if (max !== null && num > max) return false;
        return true;
    },
    
    showError(inputElement, message) {
        inputElement.classList.add('is-invalid');
        
        // Remove existing error
        const existingError = inputElement.parentElement.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Add new error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.cssText = 'color: #dc3545; font-size: 0.875rem; margin-top: 0.25rem;';
        errorDiv.textContent = message;
        inputElement.parentElement.appendChild(errorDiv);
    },
    
    clearError(inputElement) {
        inputElement.classList.remove('is-invalid');
        const errorDiv = inputElement.parentElement.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
    }
};

/* ========================================
   5. MOCK DATA (для демонстрації)
   ======================================== */
const mockStudentData = [
    { 
        id: 'S001', 
        name: 'Іванов Іван (ПМ-21)', 
        nameEn: 'Ivanov Ivan (PM-21)',
        code: 'ALPHA123', 
        assignedInstructorId: 'I001',
        faculty: 'ПМ',
        group: 'ПМ-21'
    },
    { 
        id: 'S002', 
        name: 'Петрова Анна (ЮР-20)', 
        nameEn: 'Petrova Anna (YUR-20)',
        code: 'BETA456', 
        assignedInstructorId: 'I002',
        faculty: 'ЮР',
        group: 'ЮР-20'
    },
    { 
        id: 'S003', 
        name: 'Сидоров Олег (ЕК-22)', 
        nameEn: 'Sidorov Oleg (EK-22)',
        code: 'GAMMA789', 
        assignedInstructorId: 'I001',
        faculty: 'ЕК',
        group: 'ЕК-22'
    }
];

const mockInstructorAccounts = [
    { 
        email: 'prof.ivanov@ssrm.edu', 
        password: 'pass123', 
        role: 'instructor', 
        id: 'I001', 
        name: 'Іванов С.В.',
        nameEn: 'Ivanov S.V.'
    },
    { 
        email: 'head.petrov@ssrm.edu', 
        password: 'admin456', 
        role: 'hod', 
        id: 'H001', 
        name: 'Петров А.Б.',
        nameEn: 'Petrov A.B.'
    }
];

/* ========================================
   6. UTILITY FUNCTIONS
   ======================================== */

// Generate control word
function generateControlWord() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    const codeLength = 6;
    
    for (let i = 0; i < codeLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters.charAt(randomIndex);
    }
    
    return code;
}

// Display control word
function displayControlWord() {
    const word = generateControlWord();
    const displayElement = document.getElementById('controlWordDisplay');
    
    if (displayElement) {
        displayElement.textContent = word;
    }
    
    return word;
}

// Calculate urgency for instructor dashboard (7-4-1 logic)
function calculateUrgency(submissionDate) {
    const deadlineDays = 14;
    const msInDay = 1000 * 60 * 60 * 24;
    const now = new Date();
    
    const deadlineTime = submissionDate.getTime() + (deadlineDays * msInDay);
    const daysLeft = Math.ceil((deadlineTime - now.getTime()) / msInDay);
    
    let color = 'secondary';
    let displayDays = `${daysLeft} ${langManager.translate('days')}`;
    
    if (daysLeft > 7) {
        color = 'success';
    } else if (daysLeft <= 7 && daysLeft > 4) {
        color = 'success';
    } else if (daysLeft <= 4 && daysLeft > 0) {
        color = 'warning';
    } else if (daysLeft === 0) {
        color = 'danger';
        displayDays = langManager.translate('today');
    } else if (daysLeft < 0) {
        color = 'dark';
        displayDays = `${langManager.translate('overdue')} (${Math.abs(daysLeft)} ${langManager.translate('days')})`;
    }
    
    return { daysLeft, color, displayDays };
}

// Format date
function formatDate(date, locale = 'uk-UA') {
    return new Date(date).toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Show loading spinner
function showLoading(element) {
    const spinner = document.createElement('div');
    spinner.className = 'spinner animate-spin';
    spinner.style.cssText = `
        border: 3px solid #f3f3f3;
        border-top: 3px solid #667eea;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin: 20px auto;
    `;
    element.appendChild(spinner);
}

// Hide loading spinner
function hideLoading(element) {
    const spinner = element.querySelector('.spinner');
    if (spinner) {
        spinner.remove();
    }
}

/* ========================================
   7. LOCAL STORAGE HELPERS
   ======================================== */
const Storage = {
    set(key, value) {
        try {
            localStorage.setItem(`ssrm_${key}`, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    },
    
    get(key) {
        try {
            const item = localStorage.getItem(`ssrm_${key}`);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('Storage error:', e);
            return null;
        }
    },
    
    remove(key) {
        try {
            localStorage.removeItem(`ssrm_${key}`);
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    },
    
    clear() {
        try {
            Object.keys(localStorage)
                .filter(key => key.startsWith('ssrm_'))
                .forEach(key => localStorage.removeItem(key));
            return true;
        } catch (e) {
            console.error('Storage error:', e);
            return false;
        }
    }
};

/* ========================================
   8. AUTHENTICATION HELPERS
   ======================================== */
const Auth = {
    login(userId, userType) {
        Storage.set('currentUserId', userId);
        Storage.set('userType', userType);
        Storage.set('loginTime', new Date().toISOString());
    },
    
    logout() {
        Storage.remove('currentUserId');
        Storage.remove('userType');
        Storage.remove('loginTime');
    },
    
    isAuthenticated() {
        return !!Storage.get('currentUserId');
    },
    
    getCurrentUser() {
        return {
            id: Storage.get('currentUserId'),
            type: Storage.get('userType')
        };
    }
};

/* ========================================
   9. EXPORT FOR GLOBAL ACCESS
   ======================================== */
window.SSRM = {
    langManager,
    toast,
    FormValidator,
    Storage,
    Auth,
    generateControlWord,
    displayControlWord,
    calculateUrgency,
    formatDate,
    showLoading,
    hideLoading,
    mockStudentData,
    mockInstructorAccounts
};
