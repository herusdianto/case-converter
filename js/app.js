/**
 * Case Converter - Convert Text Cases
 * 100% Client-side processing
 */

class CaseConverter {
    constructor() {
        this.init();
    }

    init() {
        this.bindInputText();
        this.bindConversionButtons();
        this.bindCopyButton();
        this.initThemeToggle();
        this.setCurrentYear();
    }

    // ==================== Theme Toggle ====================
    initThemeToggle() {
        const themeSwitch = document.getElementById('theme-switch');
        const themeIcon = document.getElementById('theme-icon');

        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.body.classList.toggle('dark-mode', savedTheme === 'dark');
        this.updateThemeIcon(themeIcon, savedTheme);

        themeSwitch.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark-mode');
            const newTheme = isDark ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            this.updateThemeIcon(themeIcon, newTheme);
        });
    }

    updateThemeIcon(iconElement, theme) {
        iconElement.innerHTML = theme === 'dark'
            ? `<svg class="sun-icon" viewBox="0 0 24 24" width="28" height="28"><path d="M12 7a5 5 0 100 10 5 5 0 000-10zM2 13h2a1 1 0 100-2H2a1 1 0 100 2zm18 0h2a1 1 0 100-2h-2a1 1 0 100 2zM11 2v2a1 1 0 102 0V2a1 1 0 10-2 0zm0 18v2a1 1 0 102 0v-2a1 1 0 10-2 0zM5.99 4.58a1 1 0 10-1.41 1.41l1.06 1.06a1 1 0 101.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 10-1.41 1.41l1.06 1.06a1 1 0 101.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 10-1.41-1.41l-1.06 1.06a1 1 0 101.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 10-1.41-1.41l-1.06 1.06a1 1 0 101.41 1.41l1.06-1.06z"></path></svg>`
            : `<svg class="moon-icon" viewBox="0 0 24 24" width="28" height="28"><path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path></svg>`;
    }

    // ==================== Input Text ====================
    bindInputText() {
        const inputText = document.getElementById('input-text');
        inputText.addEventListener('input', () => {
            // Clear output when input changes
            document.getElementById('output-text').value = '';
        });
    }

    // ==================== Conversion Select ====================
    bindConversionButtons() {
        const caseSelect = document.getElementById('case-select');
        
        caseSelect.addEventListener('change', () => {
            const caseType = caseSelect.value;
            if (caseType) {
                this.convertText(caseType);
            }
        });
    }

    convertText(caseType) {
        const inputText = document.getElementById('input-text').value;
        const outputText = document.getElementById('output-text');

        if (!inputText.trim()) {
            this.showStatus('Please enter some text to convert', 'error');
            return;
        }

        let convertedText;
        switch (caseType) {
            case 'camelCase':
                convertedText = this.toCamelCase(inputText);
                break;
            case 'PascalCase':
                convertedText = this.toPascalCase(inputText);
                break;
            case 'snake_case':
                convertedText = this.toSnakeCase(inputText);
                break;
            case 'kebab-case':
                convertedText = this.toKebabCase(inputText);
                break;
            case 'UPPERCASE':
                convertedText = this.toUpperCase(inputText);
                break;
            case 'lowercase':
                convertedText = this.toLowerCase(inputText);
                break;
            case 'Title Case':
                convertedText = this.toTitleCase(inputText);
                break;
            case 'Sentence case':
                convertedText = this.toSentenceCase(inputText);
                break;
            case 'CONSTANT_CASE':
                convertedText = this.toConstantCase(inputText);
                break;
            case 'dot.case':
                convertedText = this.toDotCase(inputText);
                break;
            case 'path/case':
                convertedText = this.toPathCase(inputText);
                break;
            case 'Header-Case':
                convertedText = this.toHeaderCase(inputText);
                break;
            case 'sWAP cASE':
                convertedText = this.toSwapCase(inputText);
                break;
            case 'aLtErNaTiNg CaSe':
                convertedText = this.toAlternatingCase(inputText);
                break;
            case 'InVeRsE cAsE':
                convertedText = this.toInverseCase(inputText);
                break;
            default:
                convertedText = inputText;
        }

        outputText.value = convertedText;
        this.showStatus(`Converted to ${caseType}`, 'success');
    }

    // ==================== Case Conversion Functions ====================
    
    // Helper: Split text into words
    splitIntoWords(text) {
        // Handle various separators: spaces, underscores, hyphens, dots, slashes
        return text
            .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase to words
            .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2') // PascalCase to words
            .replace(/[_\-./]+/g, ' ') // Replace separators with spaces
            .replace(/\s+/g, ' ') // Normalize spaces
            .trim()
            .split(' ')
            .filter(word => word.length > 0);
    }

    // camelCase: helloWorld
    toCamelCase(text) {
        const words = this.splitIntoWords(text);
        return words
            .map((word, index) => {
                if (index === 0) {
                    return word.toLowerCase();
                }
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            })
            .join('');
    }

    // PascalCase: HelloWorld
    toPascalCase(text) {
        const words = this.splitIntoWords(text);
        return words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join('');
    }

    // snake_case: hello_world
    toSnakeCase(text) {
        const words = this.splitIntoWords(text);
        return words.map(word => word.toLowerCase()).join('_');
    }

    // kebab-case: hello-world
    toKebabCase(text) {
        const words = this.splitIntoWords(text);
        return words.map(word => word.toLowerCase()).join('-');
    }

    // UPPERCASE: HELLO WORLD
    toUpperCase(text) {
        return text.toUpperCase();
    }

    // lowercase: hello world
    toLowerCase(text) {
        return text.toLowerCase();
    }

    // Title Case: Hello World
    toTitleCase(text) {
        const words = this.splitIntoWords(text);
        return words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }

    // Sentence case: Hello world
    toSentenceCase(text) {
        const lower = text.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    // CONSTANT_CASE: HELLO_WORLD
    toConstantCase(text) {
        const words = this.splitIntoWords(text);
        return words.map(word => word.toUpperCase()).join('_');
    }

    // dot.case: hello.world
    toDotCase(text) {
        const words = this.splitIntoWords(text);
        return words.map(word => word.toLowerCase()).join('.');
    }

    // path/case: hello/world
    toPathCase(text) {
        const words = this.splitIntoWords(text);
        return words.map(word => word.toLowerCase()).join('/');
    }

    // Header-Case: Hello-World
    toHeaderCase(text) {
        const words = this.splitIntoWords(text);
        return words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join('-');
    }

    // sWAP cASE: hELLO wORLD
    toSwapCase(text) {
        return text
            .split('')
            .map(char => {
                if (char === char.toUpperCase()) {
                    return char.toLowerCase();
                }
                return char.toUpperCase();
            })
            .join('');
    }

    // aLtErNaTiNg CaSe: hElLo WoRlD
    toAlternatingCase(text) {
        let result = '';
        let isLower = true;
        
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            if (char.match(/[a-zA-Z]/)) {
                result += isLower ? char.toLowerCase() : char.toUpperCase();
                isLower = !isLower;
            } else {
                result += char;
            }
        }
        
        return result;
    }

    // InVeRsE cAsE: hELLO wORLD
    toInverseCase(text) {
        return text
            .split('')
            .map(char => {
                if (char === char.toUpperCase()) {
                    return char.toLowerCase();
                }
                return char.toUpperCase();
            })
            .join('');
    }

    // ==================== Copy Button ====================
    bindCopyButton() {
        const copyBtn = document.getElementById('copy-btn');
        copyBtn.addEventListener('click', () => {
            this.copyToClipboard();
        });
    }

    async copyToClipboard() {
        const outputText = document.getElementById('output-text');
        const text = outputText.value;

        if (!text) {
            this.showStatus('Nothing to copy', 'error');
            return;
        }

        try {
            await navigator.clipboard.writeText(text);
            this.showStatus('Copied to clipboard!', 'success');
            
            // Visual feedback on button
            const copyBtn = document.getElementById('copy-btn');
            copyBtn.classList.add('copied');
            setTimeout(() => {
                copyBtn.classList.remove('copied');
            }, 2000);
        } catch (err) {
            // Fallback for older browsers
            outputText.select();
            document.execCommand('copy');
            this.showStatus('Copied to clipboard!', 'success');
        }
    }

    // ==================== Utility Functions ====================
    setCurrentYear() {
        document.getElementById('currentYear').textContent = new Date().getFullYear();
    }

    // ==================== Status Messages ====================
    showStatus(message, type = 'info') {
        const status = document.getElementById('status');
        status.textContent = message;
        status.className = `status ${type}`;
        status.classList.remove('hidden');

        setTimeout(() => {
            status.classList.add('hidden');
        }, 3000);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CaseConverter();
});
