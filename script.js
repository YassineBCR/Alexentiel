// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const backToTop = document.getElementById('backToTop');
    const contactForm = document.getElementById('contactForm');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to top button visibility
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to top button functionality
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Form submission
    // Initialize EmailJS
    if (typeof emailjs !== 'undefined') {
        emailjs.init('d5C6_jqdFATq91IXv');
    }

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.name || !data.email || !data.message) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Veuillez entrer une adresse email valide.');
            return;
        }

        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        submitBtn.disabled = true;

        // Send email using EmailJS
        if (typeof emailjs !== 'undefined') {
            // Format de la date si elle existe
            let formattedDate = 'Non renseignée';
            if (data['wedding-date']) {
                const date = new Date(data['wedding-date']);
                formattedDate = date.toLocaleDateString('fr-FR', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                });
            }
            
            emailjs.send('service_afmwrqb', 'template_5gm7ahj', {
                from_name: data.name,
                from_email: data.email,
                phone: data.phone || 'Non renseigné',
                wedding_date: formattedDate,
                message: data.message,
                to_email: 'alexentielevents@gmail.com',
                // Format complet pour un email bien structuré
                email_body: `
NOUVEAU MESSAGE DE CONTACT - ALEX'ENTIEL EVENTS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

INFORMATIONS CLIENT :
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nom & Prénom : ${data.name}
Email : ${data.email}
Téléphone : ${data.phone || 'Non renseigné'}
Date de l'événement prévue : ${formattedDate}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MESSAGE :
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Ce message a été envoyé depuis le formulaire de contact du site web.
                `.trim()
            }, 'd5C6_jqdFATq91IXv')
            .then(function(response) {
                alert('Merci pour votre message ! Nous vous contacterons bientôt.');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, function(error) {
                console.error('Erreur lors de l\'envoi:', error);
                alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer ou nous contacter directement par téléphone.');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            });
        } else {
            // Fallback si EmailJS n'est pas chargé
            alert('Le service d\'envoi d\'email n\'est pas disponible. Veuillez nous contacter directement par téléphone ou email.');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeInUp');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.formule-card, .tarif-card, .option-card, .contact-card, .commitment-item').forEach(el => {
        observer.observe(el);
    });

    // Dynamic year in footer
    const currentYear = new Date().getFullYear();
    document.querySelector('.footer-bottom p').innerHTML = document.querySelector('.footer-bottom p').innerHTML.replace('2024', currentYear);

    // Form field interactions
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');
    
    formInputs.forEach(input => {
        // Add placeholder attribute for label animation
        if (input.type !== 'select-one') {
            input.setAttribute('placeholder', ' ');
        }

        // Handle select field label
        if (input.tagName === 'SELECT') {
            input.addEventListener('change', function() {
                if (this.value) {
                    this.classList.add('has-value');
                } else {
                    this.classList.remove('has-value');
                }
            });
        }
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-background img');
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Testimonial carousel effect (if multiple testimonials are added)
    const testimonials = document.querySelectorAll('.testimonial');
    if (testimonials.length > 1) {
        let currentTestimonial = 0;
        
        setInterval(() => {
            testimonials[currentTestimonial].style.opacity = '0';
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            setTimeout(() => {
                testimonials.forEach(t => t.style.display = 'none');
                testimonials[currentTestimonial].style.display = 'block';
                testimonials[currentTestimonial].style.opacity = '1';
            }, 300);
        }, 5000);
    }

    // Reviews slider
    const reviewTrack = document.querySelector('.reviews-track');
    if (reviewTrack) {
        const reviewSlider = reviewTrack.closest('.reviews-slider');
        const dotsContainer = reviewSlider.querySelector('.reviews-dots');
        const reviewCards = Array.from(reviewTrack.children);
        let currentReview = 0;
        let reviewInterval;

        // Create dots
        reviewCards.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'review-dot';
            if (index === 0) dot.classList.add('active');
            dot.setAttribute('aria-label', `Afficher l'avis ${index + 1}`);
            dot.addEventListener('click', () => {
                currentReview = index;
                updateReviewsSlider();
                restartReviewsInterval();
            });
            dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll('.review-dot');

        const updateReviewsSlider = () => {
            reviewTrack.style.transform = `translateX(-${currentReview * 100}%)`;
            dots.forEach(dot => dot.classList.remove('active'));
            if (dots[currentReview]) {
                dots[currentReview].classList.add('active');
            }
        };

        const nextReview = () => {
            currentReview = (currentReview + 1) % reviewCards.length;
            updateReviewsSlider();
        };

        const startReviewsInterval = () => {
            reviewInterval = setInterval(nextReview, 6000);
        };

        const restartReviewsInterval = () => {
            clearInterval(reviewInterval);
            startReviewsInterval();
        };

        reviewSlider.addEventListener('mouseenter', () => clearInterval(reviewInterval));
        reviewSlider.addEventListener('mouseleave', restartReviewsInterval);

        // Drag/Swipe functionality for reviews
        let isDraggingReview = false;
        let startXReview = 0;
        let startScrollReview = 0;
        let threshold = 50; // Minimum distance to trigger swipe

        const handleReviewStart = (e) => {
            isDraggingReview = true;
            startXReview = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
            startScrollReview = currentReview;
            clearInterval(reviewInterval);
            reviewTrack.style.transition = 'none';
        };

        const handleReviewMove = (e) => {
            if (!isDraggingReview) return;
            e.preventDefault();
            const currentX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
            const diff = startXReview - currentX;
            const percentage = diff / reviewSlider.offsetWidth;
            const offset = startScrollReview + percentage;
            
            // Constrain offset
            const constrainedOffset = Math.max(0, Math.min(reviewCards.length - 1, offset));
            reviewTrack.style.transform = `translateX(-${constrainedOffset * 100}%)`;
        };

        const handleReviewEnd = (e) => {
            if (!isDraggingReview) return;
            isDraggingReview = false;
            reviewTrack.style.transition = '';
            
            const endX = e.type.includes('touch') ? e.changedTouches[0].clientX : e.clientX;
            const diff = startXReview - endX;
            
            if (Math.abs(diff) > threshold) {
                if (diff > 0 && currentReview < reviewCards.length - 1) {
                    currentReview++;
                } else if (diff < 0 && currentReview > 0) {
                    currentReview--;
                }
            }
            
            updateReviewsSlider();
            restartReviewsInterval();
        };

        reviewSlider.addEventListener('mousedown', handleReviewStart);
        reviewSlider.addEventListener('touchstart', handleReviewStart, { passive: false });
        reviewSlider.addEventListener('mousemove', handleReviewMove);
        reviewSlider.addEventListener('touchmove', handleReviewMove, { passive: false });
        reviewSlider.addEventListener('mouseup', handleReviewEnd);
        reviewSlider.addEventListener('touchend', handleReviewEnd);
        reviewSlider.addEventListener('mouseleave', handleReviewEnd);
        reviewSlider.style.cursor = 'grab';
        reviewSlider.style.userSelect = 'none';

        updateReviewsSlider();
        startReviewsInterval();
    }

    // Gallery duplication for seamless scroll and drag/swipe
    const galleryTrack = document.querySelector('.gallery-track');
    if (galleryTrack) {
        const galleryWrapper = galleryTrack.closest('.gallery-wrapper');
        const galleryItems = Array.from(galleryTrack.children);
        galleryItems.forEach(item => {
            const clone = item.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            galleryTrack.appendChild(clone);
        });

        // Drag/Swipe functionality for gallery
        let isDragging = false;
        let startX = 0;
        let scrollLeft = 0;

        const handleStart = (e) => {
            isDragging = true;
            startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
            scrollLeft = galleryWrapper.scrollLeft;
            galleryWrapper.style.cursor = 'grabbing';
            galleryWrapper.style.scrollBehavior = 'auto';
            galleryTrack.style.animationPlayState = 'paused';
        };

        const handleMove = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
            const walk = (x - startX) * 2;
            galleryWrapper.scrollLeft = scrollLeft - walk;
        };

        const handleEnd = () => {
            isDragging = false;
            galleryWrapper.style.cursor = 'grab';
            galleryWrapper.style.scrollBehavior = 'smooth';
            // Resume animation after a delay if not hovering
            setTimeout(() => {
                if (!galleryWrapper.matches(':hover')) {
                    galleryTrack.style.animationPlayState = 'running';
                }
            }, 100);
        };

        galleryWrapper.addEventListener('mousedown', handleStart);
        galleryWrapper.addEventListener('touchstart', handleStart, { passive: false });
        galleryWrapper.addEventListener('mousemove', handleMove);
        galleryWrapper.addEventListener('touchmove', handleMove, { passive: false });
        galleryWrapper.addEventListener('mouseup', handleEnd);
        galleryWrapper.addEventListener('touchend', handleEnd);
        galleryWrapper.addEventListener('mouseleave', handleEnd);
        galleryWrapper.style.cursor = 'grab';
        galleryWrapper.style.userSelect = 'none';

        // Enable horizontal scroll with mouse wheel
        galleryWrapper.addEventListener('wheel', (e) => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault();
                galleryWrapper.scrollLeft += e.deltaY;
            }
        }, { passive: false });
    }

    // Loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        // If image is already loaded
        if (img.complete) {
            img.style.opacity = '1';
        }
    });

    // Price card hover effects
    const priceCards = document.querySelectorAll('.tarif-card');
    priceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (this.classList.contains('featured')) {
                this.style.transform = 'scale(1.05)';
            } else {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });

    // Service cards interactive effects
    const serviceCards = document.querySelectorAll('.formule-card, .option-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const cardImage = this.querySelector('img');
            if (cardImage) {
                cardImage.style.transform = 'scale(1.1) rotate(1deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const cardImage = this.querySelector('img');
            if (cardImage) {
                cardImage.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    // Commitment items staggered animation
    const commitmentItems = document.querySelectorAll('.commitment-item');
    commitmentItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    // Contact info hover effects
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    // Dynamic content loading effect
    function animateNumbers() {
        const numbers = document.querySelectorAll('.price');
        numbers.forEach(number => {
            const finalValue = parseInt(number.textContent.replace(/[€\s]/g, ''));
            if (finalValue && finalValue > 100) {
                let currentValue = 0;
                const increment = finalValue / 50;
                const timer = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        currentValue = finalValue;
                        clearInterval(timer);
                    }
                    number.textContent = Math.floor(currentValue) + '€';
                }, 20);
            }
        });
    }

    // Trigger number animation when formules section is visible
    const formulesSection = document.querySelector('.formules');
    if (formulesSection) {
        const formulesObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumbers();
                    formulesObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        formulesObserver.observe(formulesSection);
    }

    // Keyboard navigation accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close mobile menu if open
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Print optimization
    window.addEventListener('beforeprint', () => {
        document.body.classList.add('printing');
    });

    window.addEventListener('afterprint', () => {
        document.body.classList.remove('printing');
    });

    console.log('Alex\'entiel Events website loaded successfully! 💕');
});

// Utility function for smooth animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Performance optimization
let ticking = false;

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(animateOnScroll);
        ticking = true;
    }
}

window.addEventListener('scroll', () => {
    requestTick();
    ticking = false;
});

// Error handling for images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none';
        console.log('Image failed to load:', e.target.src);
    }
}, true);

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

if (lightbox) {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    let currentImageIndex = 0;
    const images = Array.from(galleryItems);

    // Open lightbox
    function openLightbox(index) {
        currentImageIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Update lightbox image
    function updateLightboxImage() {
        if (images[currentImageIndex]) {
            lightboxImg.src = images[currentImageIndex].src;
            lightboxImg.alt = images[currentImageIndex].alt;
            lightboxCaption.textContent = images[currentImageIndex].alt;
        }
    }

    // Next image
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateLightboxImage();
    }

    // Previous image
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateLightboxImage();
    }

    // Event listeners
    galleryItems.forEach((img, index) => {
        img.addEventListener('click', () => openLightbox(index));
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxNext.addEventListener('click', nextImage);
    lightboxPrev.addEventListener('click', prevImage);

    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            }
        }
    });
}