// Wink AI Website Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
    
    // Header scroll effect
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Initialize interactive elements
    initInteractiveFeatures();
});

function initInteractiveFeatures() {
    // Virtual Agent demo interaction
    const virtualAgentDemo = document.getElementById('virtual-agent-demo');
    if (virtualAgentDemo) {
        // Simulate virtual agent conversation
        const chatInput = document.getElementById('chat-input');
        const chatMessages = document.getElementById('chat-messages');
        
        if (chatInput && chatMessages) {
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const userMessage = chatInput.value.trim();
                    if (userMessage) {
                        addMessage('user', userMessage);
                        chatInput.value = '';
                        
                        // Simulate AI response after delay
                        setTimeout(() => {
                            const responses = [
                                "作为虚拟消费者，我认为这个产品概念很有吸引力！",
                                "基于我的消费偏好，我会考虑购买这个产品。",
                                "这个广告创意很有趣，但建议调整一下色调。",
                                "从我的心理动机来看，价格是主要考虑因素。",
                                "作为一个25岁的都市白领，我对这类产品很感兴趣。"
                            ];
                            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                            addMessage('agent', randomResponse);
                        }, 1000);
                    }
                }
            });
        }
    }
    
    // Data visualization animations
    const dataPoints = document.querySelectorAll('.data-point');
    dataPoints.forEach((point, index) => {
        point.style.opacity = '0';
        point.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            point.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            point.style.opacity = '1';
            point.style.transform = 'translateY(0)';
        }, 300 + (index * 100));
    });
}

function addMessage(sender, text) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.innerHTML = `
        <div class="message-content">${text}</div>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Theme switching functionality
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update theme button icon
    const themeButton = document.getElementById('theme-toggle');
    if (themeButton) {
        themeButton.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
    }
}

// Initialize theme from localStorage
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const themeButton = document.getElementById('theme-toggle');
    if (themeButton) {
        themeButton.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';
    }
}

// Call initTheme when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
} else {
    initTheme();
}