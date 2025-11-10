// === TRANSLATIONS ===
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.features': 'Features',
        'nav.howItWorks': 'How It Works',
        'nav.pricing': 'Pricing',
        'nav.demo': 'Demo',
        'nav.faq': 'FAQ',
        'nav.cta': 'Start Free Trial',

        // Hero Section
        'hero.title': 'Transform Conversations into Conversions',
        'hero.subtitle': 'Empower your sales team with AI-driven emotional intelligence. Boost conversion rates from 10% to 35% with smart message suggestions.',
        'hero.btnGetStarted': 'Get Started Free',
        'hero.btnDemo': 'Watch Demo',
        'hero.conversionRate': 'Conversion Rate',
        'hero.roiIncrease': 'ROI Increase',
        'hero.salesProfessionals': 'Sales Professionals',
        'hero.scrollText': 'Scroll to explore',

        // Features Section
        'features.title': 'Powerful AI Features',
        'features.subtitle': 'Everything you need to supercharge your sales team',
        'features.emotion.title': 'Emotion AI Analysis',
        'features.emotion.desc': 'Advanced algorithms detect client emotions in real-time, understanding frustration, interest, and excitement.',
        'features.suggestions.title': 'Smart Suggestions',
        'features.suggestions.desc': 'Get AI-powered message recommendations tailored to each conversation context and emotional state.',
        'features.analytics.title': 'Analytics Dashboard',
        'features.analytics.desc': 'Track performance, conversion rates, and team metrics with beautiful, actionable insights.',
        'features.realtime.title': 'Real-time Processing',
        'features.realtime.desc': 'Instant analysis and suggestions as the conversation flows, never miss an opportunity.',
        'features.secure.title': 'Secure & Private',
        'features.secure.desc': 'Enterprise-grade encryption ensures your conversations and data remain confidential.',
        'features.multiplatform.title': 'Multi-platform',
        'features.multiplatform.desc': 'Works seamlessly across WhatsApp, Email, CRM systems, and more.',

        // How It Works
        'how.title': 'How Elytra IA Works',
        'how.subtitle': 'Simple, powerful, effective',
        'how.step1.title': 'Connect Your Channels',
        'how.step1.desc': 'Integrate Elytra IA with your existing communication platforms in minutes.',
        'how.step2.title': 'AI Analyzes Conversations',
        'how.step2.desc': 'Our advanced AI reads and understands the context, tone, and emotions in every message.',
        'how.step3.title': 'Get Smart Suggestions',
        'how.step3.desc': 'Receive multiple message options ranked by conversion probability.',
        'how.step4.title': 'Convert More Clients',
        'how.step4.desc': 'Watch your conversion rates soar as you send perfectly crafted responses.',

        // Demo Section
        'demo.title': 'See Elytra IA in Action',
        'demo.subtitle': 'Interactive demo of our AI assistant',
        'demo.chatTitle': 'Client Conversation',
        'demo.status': 'Active',
        'demo.clientMsg': "Hi, I'm interested in your product but the price seems high...",
        'demo.emotionsTitle': 'Detected Emotions:',
        'demo.interested': 'Interested',
        'demo.hesitant': 'Hesitant',
        'demo.engaged': 'Engaged',
        'demo.suggestionsTitle': 'AI Suggestions',
        'demo.successRate': 'Success Rate',
        'demo.recommended': 'Recommended',
        'demo.suggestion1': '"I completely understand your concern about pricing. Let me show you the ROI our clients typically see in the first 3 months - most recover their investment and see 2x returns. Would you like to see a personalized breakdown?"',
        'demo.suggestion2': '"Great question! We offer flexible payment plans that make it easier to get started. Would you like to explore our installment options?"',
        'demo.suggestion3': '"I appreciate your interest! What if I could show you how our product pays for itself? Let\'s schedule a quick 15-min demo where I\'ll demonstrate the value specifically for your business."',
        'demo.useThis': 'Use This',

        // Pricing Section
        'pricing.title': 'Choose Your Plan',
        'pricing.subtitle': 'Flexible pricing for teams of all sizes',
        'pricing.start.name': 'Start',
        'pricing.start.users': '1 person per key',
        'pricing.start.feature1': '1 Suggestion at a time',
        'pricing.start.feature2': 'Automatic write and send',
        'pricing.start.feature3': 'Dashboard analytics',
        'pricing.start.feature4': 'Email support',
        'pricing.start.feature5': 'Basic emotion detection',
        'pricing.start.btn': 'Get Started',
        'pricing.team.name': 'Team',
        'pricing.team.badge': 'Most Popular',
        'pricing.team.users': '5 people per key',
        'pricing.team.feature1': '2 Suggestions at a time',
        'pricing.team.feature2': 'Automatic write and send',
        'pricing.team.feature3': 'Complete dashboard analytics',
        'pricing.team.feature4': 'Priority support',
        'pricing.team.feature5': 'Advanced emotion AI',
        'pricing.team.feature6': 'Team performance tracking',
        'pricing.team.btn': 'Get Started',
        'pricing.enterprise.name': 'Enterprise',
        'pricing.enterprise.users': '10 people per key',
        'pricing.enterprise.feature1': '3 Suggestions at a time',
        'pricing.enterprise.feature2': 'Automatic write and send',
        'pricing.enterprise.feature3': 'Complete dashboard analytics',
        'pricing.enterprise.feature4': '24/7 Premium support',
        'pricing.enterprise.feature5': 'Advanced emotion AI',
        'pricing.enterprise.feature6': 'Custom integrations',
        'pricing.enterprise.feature7': 'Dedicated account manager',
        'pricing.enterprise.btn': 'Get Started',

        // Testimonials
        'testimonials.title': 'What Our Clients Say',
        'testimonials.subtitle': 'Join thousands of satisfied sales professionals',
        'testimonials.1.text': '"Elytra IA transformed our sales process. We went from 12% to 34% conversion in just 2 months. The emotion detection is incredibly accurate!"',
        'testimonials.1.name': 'Maria Costa',
        'testimonials.1.role': 'Sales Director, TechCorp',
        'testimonials.2.text': '"The AI suggestions are spot-on every time. It\'s like having a sales coach whispering the perfect response in your ear. Game changer!"',
        'testimonials.2.name': 'João Silva',
        'testimonials.2.role': 'Senior Sales Rep, StartupXYZ',
        'testimonials.3.text': '"ROI was immediate. The dashboard helps me coach my team better and the automation features save hours every day."',
        'testimonials.3.name': 'Ana Paula',
        'testimonials.3.role': 'VP of Sales, MegaCorp',

        // FAQ Section
        'faq.title': 'Frequently Asked Questions',
        'faq.subtitle': 'Everything you need to know',
        'faq.1.question': 'How does the emotion detection work?',
        'faq.1.answer': 'Our AI uses advanced natural language processing and sentiment analysis to detect emotional cues in text. It analyzes word choice, punctuation, context, and communication patterns to understand feelings like interest, frustration, excitement, or hesitation.',
        'faq.2.question': 'Which platforms does Elytra IA integrate with?',
        'faq.2.answer': 'Elytra IA integrates with WhatsApp, email clients, Salesforce, HubSpot, Slack, and most major CRM systems. We\'re constantly adding new integrations based on customer feedback.',
        'faq.3.question': 'Is my data secure and private?',
        'faq.3.answer': 'Absolutely! We use enterprise-grade encryption (AES-256) for all data in transit and at rest. We\'re GDPR and LGPD compliant, and we never share your data with third parties. Your conversations remain completely confidential.',
        'faq.4.question': 'Can I try Elytra IA before committing?',
        'faq.4.answer': 'Yes! We offer a 14-day free trial with no credit card required. You\'ll get full access to all features so you can experience the power of Elytra IA firsthand.',
        'faq.5.question': 'What if I need more than 10 users?',
        'faq.5.answer': 'For larger teams, we offer custom Enterprise+ plans with unlimited users, dedicated infrastructure, and personalized support. Contact our sales team for a custom quote.',
        'faq.6.question': 'How quickly can I get started?',
        'faq.6.answer': 'Setup takes less than 5 minutes! Simply create an account, connect your communication channels, and you\'re ready to go. Our onboarding wizard guides you through every step.',

        // CTA Section
        'cta.title': 'Ready to Transform Your Sales?',
        'cta.subtitle': 'Join thousands of sales professionals already using Elytra IA to boost their conversions',
        'cta.btnTrial': 'Start Free Trial',
        'cta.btnDemo': 'Schedule Demo',
        'cta.note': 'No credit card required • 14-day free trial • Cancel anytime',

        // Footer
        'footer.tagline': 'Transforming conversations into conversions with AI-powered intelligence.',
        'footer.product': 'Product',
        'footer.features': 'Features',
        'footer.pricing': 'Pricing',
        'footer.demo': 'Demo',
        'footer.integrations': 'Integrations',
        'footer.company': 'Company',
        'footer.about': 'About Us',
        'footer.careers': 'Careers',
        'footer.blog': 'Blog',
        'footer.contact': 'Contact',
        'footer.resources': 'Resources',
        'footer.documentation': 'Documentation',
        'footer.api': 'API',
        'footer.support': 'Support',
        'footer.faq': 'FAQ',
        'footer.legal': 'Legal',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',
        'footer.cookie': 'Cookie Policy',
        'footer.lgpd': 'LGPD',
        'footer.copyright': '© 2025 Elytra IA. All rights reserved.'
    },
    pt: {
        // Navegação
        'nav.home': 'Início',
        'nav.features': 'Recursos',
        'nav.howItWorks': 'Como Funciona',
        'nav.pricing': 'Preços',
        'nav.demo': 'Demo',
        'nav.faq': 'FAQ',
        'nav.cta': 'Começar Teste Grátis',

        // Seção Hero
        'hero.title': 'Transforme Conversas em Conversões',
        'hero.subtitle': 'Capacite sua equipe de vendas com inteligência emocional impulsionada por IA. Aumente as taxas de conversão de 10% para 35% com sugestões inteligentes de mensagens.',
        'hero.btnGetStarted': 'Começar Grátis',
        'hero.btnDemo': 'Ver Demonstração',
        'hero.conversionRate': 'Taxa de Conversão',
        'hero.roiIncrease': 'Aumento do ROI',
        'hero.salesProfessionals': 'Profissionais de Vendas',
        'hero.scrollText': 'Role para explorar',

        // Seção de Recursos
        'features.title': 'Recursos Poderosos de IA',
        'features.subtitle': 'Tudo o que você precisa para turbinar sua equipe de vendas',
        'features.emotion.title': 'Análise de Emoções com IA',
        'features.emotion.desc': 'Algoritmos avançados detectam emoções do cliente em tempo real, compreendendo frustração, interesse e entusiasmo.',
        'features.suggestions.title': 'Sugestões Inteligentes',
        'features.suggestions.desc': 'Receba recomendações de mensagens baseadas em IA, adaptadas ao contexto da conversa e estado emocional.',
        'features.analytics.title': 'Painel de Análises',
        'features.analytics.desc': 'Acompanhe desempenho, taxas de conversão e métricas da equipe com insights visuais e acionáveis.',
        'features.realtime.title': 'Processamento em Tempo Real',
        'features.realtime.desc': 'Análise e sugestões instantâneas conforme a conversa flui, nunca perca uma oportunidade.',
        'features.secure.title': 'Seguro e Privado',
        'features.secure.desc': 'Criptografia de nível empresarial garante que suas conversas e dados permaneçam confidenciais.',
        'features.multiplatform.title': 'Multi-plataforma',
        'features.multiplatform.desc': 'Funciona perfeitamente no WhatsApp, Email, sistemas de CRM e muito mais.',

        // Como Funciona
        'how.title': 'Como Funciona o Elytra IA',
        'how.subtitle': 'Simples, poderoso, eficaz',
        'how.step1.title': 'Conecte seus Canais',
        'how.step1.desc': 'Integre o Elytra IA com suas plataformas de comunicação existentes em minutos.',
        'how.step2.title': 'IA Analisa Conversas',
        'how.step2.desc': 'Nossa IA avançada lê e compreende o contexto, tom e emoções em cada mensagem.',
        'how.step3.title': 'Receba Sugestões Inteligentes',
        'how.step3.desc': 'Receba múltiplas opções de mensagens classificadas por probabilidade de conversão.',
        'how.step4.title': 'Converta Mais Clientes',
        'how.step4.desc': 'Veja suas taxas de conversão dispararem ao enviar respostas perfeitamente elaboradas.',

        // Seção Demo
        'demo.title': 'Veja o Elytra IA em Ação',
        'demo.subtitle': 'Demonstração interativa do nosso assistente de IA',
        'demo.chatTitle': 'Conversa com Cliente',
        'demo.status': 'Ativo',
        'demo.clientMsg': 'Olá, estou interessado no seu produto, mas o preço parece alto...',
        'demo.emotionsTitle': 'Emoções Detectadas:',
        'demo.interested': 'Interessado',
        'demo.hesitant': 'Hesitante',
        'demo.engaged': 'Engajado',
        'demo.suggestionsTitle': 'Sugestões da IA',
        'demo.successRate': 'Taxa de Sucesso',
        'demo.recommended': 'Recomendado',
        'demo.suggestion1': '"Entendo completamente sua preocupação com o preço. Deixe-me mostrar o ROI que nossos clientes normalmente veem nos primeiros 3 meses - a maioria recupera o investimento e vê retornos de 2x. Gostaria de ver um detalhamento personalizado?"',
        'demo.suggestion2': '"Ótima pergunta! Oferecemos planos de pagamento flexíveis que facilitam o início. Gostaria de explorar nossas opções de parcelamento?"',
        'demo.suggestion3': '"Agradeço seu interesse! E se eu pudesse mostrar como nosso produto se paga sozinho? Vamos agendar uma demo rápida de 15 min onde demonstrarei o valor especificamente para seu negócio."',
        'demo.useThis': 'Usar Esta',

        // Seção de Preços
        'pricing.title': 'Escolha seu Plano',
        'pricing.subtitle': 'Preços flexíveis para equipes de todos os tamanhos',
        'pricing.start.name': 'Inicial',
        'pricing.start.users': '1 pessoa por chave',
        'pricing.start.feature1': '1 Sugestão por vez',
        'pricing.start.feature2': 'Escrita e envio automático',
        'pricing.start.feature3': 'Painel de análises',
        'pricing.start.feature4': 'Suporte por email',
        'pricing.start.feature5': 'Detecção básica de emoções',
        'pricing.start.btn': 'Começar',
        'pricing.team.name': 'Equipe',
        'pricing.team.badge': 'Mais Popular',
        'pricing.team.users': '5 pessoas por chave',
        'pricing.team.feature1': '2 Sugestões por vez',
        'pricing.team.feature2': 'Escrita e envio automático',
        'pricing.team.feature3': 'Painel completo de análises',
        'pricing.team.feature4': 'Suporte prioritário',
        'pricing.team.feature5': 'IA de emoções avançada',
        'pricing.team.feature6': 'Rastreamento de desempenho da equipe',
        'pricing.team.btn': 'Começar',
        'pricing.enterprise.name': 'Empresarial',
        'pricing.enterprise.users': '10 pessoas por chave',
        'pricing.enterprise.feature1': '3 Sugestões por vez',
        'pricing.enterprise.feature2': 'Escrita e envio automático',
        'pricing.enterprise.feature3': 'Painel completo de análises',
        'pricing.enterprise.feature4': 'Suporte Premium 24/7',
        'pricing.enterprise.feature5': 'IA de emoções avançada',
        'pricing.enterprise.feature6': 'Integrações personalizadas',
        'pricing.enterprise.feature7': 'Gerente de conta dedicado',
        'pricing.enterprise.btn': 'Começar',

        // Depoimentos
        'testimonials.title': 'O Que Nossos Clientes Dizem',
        'testimonials.subtitle': 'Junte-se a milhares de profissionais de vendas satisfeitos',
        'testimonials.1.text': '"O Elytra IA transformou nosso processo de vendas. Fomos de 12% para 34% de conversão em apenas 2 meses. A detecção de emoções é incrivelmente precisa!"',
        'testimonials.1.name': 'Maria Costa',
        'testimonials.1.role': 'Diretora de Vendas, TechCorp',
        'testimonials.2.text': '"As sugestões da IA são perfeitas toda vez. É como ter um coach de vendas sussurrando a resposta perfeita no seu ouvido. Mudou o jogo!"',
        'testimonials.2.name': 'João Silva',
        'testimonials.2.role': 'Representante de Vendas Sênior, StartupXYZ',
        'testimonials.3.text': '"O ROI foi imediato. O painel me ajuda a treinar minha equipe melhor e os recursos de automação economizam horas todos os dias."',
        'testimonials.3.name': 'Ana Paula',
        'testimonials.3.role': 'VP de Vendas, MegaCorp',

        // Seção FAQ
        'faq.title': 'Perguntas Frequentes',
        'faq.subtitle': 'Tudo o que você precisa saber',
        'faq.1.question': 'Como funciona a detecção de emoções?',
        'faq.1.answer': 'Nossa IA usa processamento avançado de linguagem natural e análise de sentimentos para detectar pistas emocionais no texto. Analisa escolha de palavras, pontuação, contexto e padrões de comunicação para entender sentimentos como interesse, frustração, entusiasmo ou hesitação.',
        'faq.2.question': 'Com quais plataformas o Elytra IA se integra?',
        'faq.2.answer': 'O Elytra IA se integra com WhatsApp, clientes de email, Salesforce, HubSpot, Slack e a maioria dos principais sistemas de CRM. Estamos constantemente adicionando novas integrações com base no feedback dos clientes.',
        'faq.3.question': 'Meus dados são seguros e privados?',
        'faq.3.answer': 'Absolutamente! Usamos criptografia de nível empresarial (AES-256) para todos os dados em trânsito e em repouso. Somos compatíveis com GDPR e LGPD, e nunca compartilhamos seus dados com terceiros. Suas conversas permanecem completamente confidenciais.',
        'faq.4.question': 'Posso experimentar o Elytra IA antes de me comprometer?',
        'faq.4.answer': 'Sim! Oferecemos um teste gratuito de 14 dias sem necessidade de cartão de crédito. Você terá acesso completo a todos os recursos para experimentar o poder do Elytra IA em primeira mão.',
        'faq.5.question': 'E se eu precisar de mais de 10 usuários?',
        'faq.5.answer': 'Para equipes maiores, oferecemos planos Enterprise+ personalizados com usuários ilimitados, infraestrutura dedicada e suporte personalizado. Entre em contato com nossa equipe de vendas para uma cotação personalizada.',
        'faq.6.question': 'Quão rápido posso começar?',
        'faq.6.answer': 'A configuração leva menos de 5 minutos! Basta criar uma conta, conectar seus canais de comunicação e você está pronto para começar. Nosso assistente de integração guia você em cada etapa.',

        // Seção CTA
        'cta.title': 'Pronto para Transformar suas Vendas?',
        'cta.subtitle': 'Junte-se a milhares de profissionais de vendas que já usam Elytra IA para impulsionar suas conversões',
        'cta.btnTrial': 'Começar Teste Grátis',
        'cta.btnDemo': 'Agendar Demo',
        'cta.note': 'Sem cartão de crédito • Teste grátis de 14 dias • Cancele a qualquer momento',

        // Rodapé
        'footer.tagline': 'Transformando conversas em conversões com inteligência impulsionada por IA.',
        'footer.product': 'Produto',
        'footer.features': 'Recursos',
        'footer.pricing': 'Preços',
        'footer.demo': 'Demo',
        'footer.integrations': 'Integrações',
        'footer.company': 'Empresa',
        'footer.about': 'Sobre Nós',
        'footer.careers': 'Carreiras',
        'footer.blog': 'Blog',
        'footer.contact': 'Contato',
        'footer.resources': 'Recursos',
        'footer.documentation': 'Documentação',
        'footer.api': 'API',
        'footer.support': 'Suporte',
        'footer.faq': 'FAQ',
        'footer.legal': 'Legal',
        'footer.privacy': 'Política de Privacidade',
        'footer.terms': 'Termos de Serviço',
        'footer.cookie': 'Política de Cookies',
        'footer.lgpd': 'LGPD',
        'footer.copyright': '© 2025 Elytra IA. Todos os direitos reservados.'
    }
};

// === INITIALIZATION ===
document.addEventListener('DOMContentLoaded', function() {
    initLoader();
    initNavigation();
    initParticles();
    initScrollAnimations();
    initCounters();
    initFAQ();
    initThemeToggle();
    initLanguageToggle();
    initTypingEffect();
    initDemoInteraction();
});

// === LOADER ===
function initLoader() {
    const loader = document.getElementById('loader');

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 1000);
    });
}

// === NAVIGATION ===
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// === PARTICLES BACKGROUND ===
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random positioning
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Random animation delay
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';

        // Random size
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        particlesContainer.appendChild(particle);
    }

    // Mouse movement effect
    document.addEventListener('mousemove', (e) => {
        const particles = document.querySelectorAll('.particle');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        particles.forEach((particle, index) => {
            const speed = (index % 5 + 1) * 0.5;
            const xMove = (x - 0.5) * speed * 20;
            const yMove = (y - 0.5) * speed * 20;

            particle.style.transform = `translate(${xMove}px, ${yMove}px)`;
        });
    });
}

// === SCROLL ANIMATIONS ===
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Observe all elements that should animate on scroll
    const animateElements = document.querySelectorAll(
        '.feature-card, .timeline-item, .pricing-card, .testimonial-card, .faq-item'
    );

    animateElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// === ANIMATED COUNTERS ===
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    let animated = false;

    const animateCounters = () => {
        if (animated) return;

        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const increment = target / speed;
            let count = 0;

            const updateCount = () => {
                if (count < target) {
                    count += increment;
                    counter.textContent = Math.ceil(count);
                    setTimeout(updateCount, 10);
                } else {
                    counter.textContent = target;
                }
            };

            updateCount();
        });

        animated = true;
    };

    // Trigger animation when stats section is visible
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }
}

// === FAQ ACCORDION ===
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// === THEME TOGGLE ===
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('.theme-icon');

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            themeIcon.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
}

// === LANGUAGE TOGGLE ===
function initLanguageToggle() {
    const languageToggle = document.getElementById('languageToggle');
    const languageText = languageToggle.querySelector('.language-text');

    // Check for saved language preference
    let currentLanguage = localStorage.getItem('language') || 'en';
    updateLanguage(currentLanguage);

    languageToggle.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'pt' : 'en';
        updateLanguage(currentLanguage);
        localStorage.setItem('language', currentLanguage);

        // Re-trigger typing effect for hero title
        const typingText = document.querySelector('.typing-text');
        if (typingText) {
            typingText.style.opacity = '0';
            setTimeout(initTypingEffect, 100);
        }
    });
}

function updateLanguage(lang) {
    const languageText = document.querySelector('.language-text');
    languageText.textContent = lang.toUpperCase();

    // Update document language
    document.documentElement.lang = lang;

    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            // Don't update typing-text here, it's handled separately
            if (!element.classList.contains('typing-text')) {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// === TYPING EFFECT ===
function initTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;

    // Get current language
    const currentLang = localStorage.getItem('language') || 'en';
    const text = translations[currentLang]['hero.title'];

    typingText.textContent = '';
    typingText.style.opacity = '1';

    let index = 0;

    function type() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }

    // Start typing after a short delay
    setTimeout(type, 500);
}

// === DEMO INTERACTION ===
function initDemoInteraction() {
    const chatMessages = document.getElementById('chatMessages');
    const suggestionButtons = document.querySelectorAll('.suggestion-card .btn');

    if (!chatMessages) return;

    suggestionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const suggestionCard = e.target.closest('.suggestion-card');
            const suggestionText = suggestionCard.querySelector('.suggestion-text').textContent;

            // Add response message
            const responseMessage = document.createElement('div');
            responseMessage.classList.add('message', 'agent-message');
            responseMessage.innerHTML = `
                <p>${suggestionText}</p>
                <span class="time">${getCurrentTime()}</span>
            `;
            responseMessage.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))';
            responseMessage.style.marginLeft = 'auto';

            chatMessages.appendChild(responseMessage);

            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // Simulate client response after 2 seconds
            setTimeout(() => {
                const clientResponse = document.createElement('div');
                clientResponse.classList.add('message', 'client-message');
                clientResponse.innerHTML = `
                    <p>That sounds great! I'd love to see the ROI breakdown. When can we schedule this?</p>
                    <span class="time">${getCurrentTime()}</span>
                `;

                chatMessages.appendChild(clientResponse);
                chatMessages.scrollTop = chatMessages.scrollHeight;

                // Update emotions
                updateEmotions();
            }, 2000);

            // Show feedback
            button.textContent = '✓ Sent';
            button.disabled = true;
            setTimeout(() => {
                button.textContent = 'Use This';
                button.disabled = false;
            }, 3000);
        });
    });
}

function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${hours}:${minutes} ${ampm}`;
}

function updateEmotions() {
    const emotionBars = document.querySelectorAll('.emotion-bar');

    // New emotion values after positive response
    const newEmotions = [
        { width: '90%', label: 'Interested' },
        { width: '25%', label: 'Hesitant' },
        { width: '95%', label: 'Engaged' }
    ];

    emotionBars.forEach((bar, index) => {
        const fill = bar.querySelector('.bar-fill');
        const percentage = bar.querySelector('.percentage');

        setTimeout(() => {
            fill.style.width = newEmotions[index].width;
            percentage.textContent = newEmotions[index].width;
        }, 300 * index);
    });
}

// === FLOATING ACTION BUTTON ===
const fab = document.getElementById('fab');
if (fab) {
    fab.addEventListener('click', () => {
        // Scroll to CTA section or open chat
        const ctaSection = document.querySelector('.cta-section');
        if (ctaSection) {
            ctaSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// === BUTTON INTERACTIONS ===
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple CSS dynamically
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// === PARALLAX EFFECT ===
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-logo, .main-wings');

    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// === PERFORMANCE OPTIMIZATION ===
// Lazy load images (if any are added)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// === CONSOLE MESSAGE ===
console.log('%c🚀 Elytra IA', 'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
console.log('%cTransforming conversations into conversions', 'font-size: 14px; color: #667eea;');
console.log('%cInterested in joining our team? Contact us!', 'font-size: 12px; color: #764ba2;');

// === EASTER EGG ===
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-konamiSequence.length);

    if (konamiCode.join('') === konamiSequence.join('')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'rainbow 2s infinite';

    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(rainbowStyle);

    setTimeout(() => {
        document.body.style.animation = '';
        rainbowStyle.remove();
    }, 5000);

    console.log('%c🎉 You found the easter egg!', 'font-size: 20px; color: #ff6b6b;');
}

// === FORM VALIDATION (if forms are added) ===
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// === ANALYTICS (placeholder for future integration) ===
function trackEvent(category, action, label) {
    // This is where you'd integrate with analytics services
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// Track button clicks
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', () => {
        trackEvent('Button', 'Click', button.textContent);
    });
});

// === SCROLL TO TOP ===
let scrollTopButton = document.createElement('button');
scrollTopButton.innerHTML = '↑';
scrollTopButton.className = 'scroll-to-top';
scrollTopButton.style.cssText = `
    position: fixed;
    bottom: 100px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--primary-gradient);
    border: none;
    border-radius: 50%;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    z-index: 998;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
`;

document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopButton.style.opacity = '1';
        scrollTopButton.style.visibility = 'visible';
    } else {
        scrollTopButton.style.opacity = '0';
        scrollTopButton.style.visibility = 'hidden';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopButton.addEventListener('mouseenter', () => {
    scrollTopButton.style.transform = 'scale(1.1) translateY(-5px)';
});

scrollTopButton.addEventListener('mouseleave', () => {
    scrollTopButton.style.transform = 'scale(1) translateY(0)';
});
