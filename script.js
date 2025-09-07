// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                // Check if the link is an internal anchor on the same page
                if (this.hash && document.querySelector(this.hash)) {
                    e.preventDefault();
                    document.querySelector(this.hash).scrollIntoView({
                        behavior: 'smooth'
                    });
                    // Close mobile menu if open
                    const nav = document.getElementById('nav');
                    const toggle = document.getElementById('mobile-menu-toggle');
                    if (nav.classList.contains('active')) {
                        nav.classList.remove('active');
                        toggle.classList.remove('active');
                    }
                }
                // If it's an external link (like to a new page), let default behavior happen
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const nav = document.getElementById('nav');

        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });

        // Add 'active' class to nav links based on scroll position
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - header.offsetHeight; // Adjust for fixed header
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                // Only apply active class if it's an internal link on the current page
                if (link.href.includes(current) && link.href.split('#')[0] === window.location.href.split('#')[0]) {
                    link.classList.add('active');
                }
            });
        });

        // Fade-in animation on scroll
        const faders = document.querySelectorAll('.fade-in');

        const appearOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('visible');
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, appearOptions);

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });

        // Contact Form Submission (Frontend JavaScript)
        const contactForm = document.getElementById('contactForm');
        const formMessage = document.getElementById('formMessage');

        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if (!name || !email || !subject || !message) {
                showMessage('Please fill in all fields.', 'error');
                return;
            }

            // Show loading message
            showMessage('Sending message...', '');

            try {
                const response = await fetch('/submit-contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, subject, message })
                });

                const result = await response.json();

                if (response.ok) {
                    showMessage(result.message, 'success');
                    contactForm.reset(); // Clear form on success
                } else {
                    showMessage(result.message || 'Failed to send message.', 'error');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                showMessage('An error occurred. Please try again later.', 'error');
            }
        });

        // Function to display messages to the user
        function showMessage(msg, type) {
            formMessage.textContent = msg;
            formMessage.className = 'message-box show'; // Reset classes
            if (type) {
                formMessage.classList.add(type);
            }
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.classList.remove('show');
                formMessage.textContent = '';
                formMessage.className = 'message-box'; // Reset to default
            }, 5000);
        }

        // Placeholder image fallback (basic example)
        document.querySelectorAll('img').forEach(img => {
            img.onerror = function() {
                // Using a pink background for placeholder images
                this.src = 'https://placehold.co/400x400/FF4081/000000?text=Image+Unavailable';
            };
        });
