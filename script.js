document.addEventListener('DOMContentLoaded', () => {
    const hiddenElements = document.querySelectorAll('.hidden');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    hiddenElements.forEach((el) => observer.observe(el));
    const characterData = {
        naruto: {
            title: "Naruto Uzumaki",
            image: "assests/images/naruto.png",
            jutsu: "Rasengan, Shadown Clone Jutsu, Rasenshuriken",
            bio: "The Seventh Hokage of the Hidden Leaf Village, who dreamed of being the best and achieved it through perseverance and the help of his friends"
        },
        sasuke: {
            title: "Sasuke Uchiha",
            image: "assests/images/sasuke.png",
            jutsu: "Chidori, Amaterasu, Susanoo",
            bio: "The last surviving member of the Uchiha clan, whose quest for power and revenge led him down a dark path before ultimately returning to protect the village."
        },
        sakura: {
            title: "Sakura Haruno",
            image: "assests/images/sakura.png",
            jutsu: "Cherry Blossom Impact, Strength of a Hundred Seal",
            bio: "A highly skilled medical-nin and one of the strongest kunoichi, renowned for her chakra control and superhuman strength."
        },
        kakashi: {
            title: "Kakashi Hatake",
            image: "assests/images/Kakashi.png",
            jutsu: "Lightning Blade, Kamui, Chidori",
            bio: "The legendary 'Copy Ninja' and the Sixth Hokage, known for his Sharingan and mastery of over a thousand jutsu."
        }
    };
    const villageData = {
        konoha: {
            title: "Konohagakure (Hidden Leaf)",
            image: "assests/images/konoha.png",
            fieldTitle: "Leader (Kage)",
            fieldText: "Hokage",
            bio: "One of the Five Great Shinobi Countries, known for producing many of the world's most powerful and legendary ninja, including Naruto Uzumaki."
        },
        suna: {
            title: "Sunagakure (Hidden Sand)",
            image: "assests/images/sand.png",
            fieldTitle: "Leader (Kage)",
            fieldText: "Kazekage",
            bio: "Located in the Land of Wind, this village is protected by its harsh desert environment and its ninja who specialize in Wind Release and the Puppet Technique."
        },
        kiri: {
            title: "Kirigakure (Hidden Mist)",
            image: "assests/images/mist.jpg",
            fieldTitle: "Leader (Kage)",
            fieldText: "Mizukage",
            bio: "A village in the Land of Water, originally known for its brutal academy graduation exams and its fearsome Seven Ninja Swordsmen of the Mist."
        }
    };
    const cards = document.querySelectorAll('.card');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalFieldTitle = document.querySelector('#modal-content h4')
    const modalFieldText = document.getElementById('modal-jutsu');
    const modalBio = document.getElementById('modal-bio');

    function openModal(data) {
        if(!data) return;

        modalImg.src = data.image;
        modalImg.alt = data.title;
        modalTitle.textContent = data.title;
        modalFieldTitle.textContent = data.fieldTitle;
        modalFieldText.textContent = data.fieldText;
        modalBio.textContent = data.bio;

        modalOverlay.classList.add('active');
    }
    function closeModal () {
        modalOverlay.classList.remove('active');
    }

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const character = card.dataset.character;
            const village = card.dataset.village;
            if(character) {
                openModal(characterData[character]);
            } else if (village) {
                openModal(villageData[village]);
            }
        });
    });
    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (event) => {
        if(event.target === modalOverlay) {
            closeModal();
        }
    });
    const hamburger = document.getElementById('hamburger-icon');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('open');
    });
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    function applySavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme === 'light') {
            body.classList.add('light-theme');
            themeToggle.checked = true;
        } else {
            body.classList.remove('light-theme');
            themeToggle.checked = false;
        }
    }
    applySavedTheme();
    themeToggle.addEventListener('change', () => {
        if(themeToggle.checked) {
            body.classList.add('light-theme');
            localStorage.setItem('theme','light');
        } else {
            body.classList.remove('light-theme');
            localStorage.setItem('theme','dark');
        }
    });
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert("Thank you for your application! A scroll will be sent to you shortly.");
        contactForm.reset();
    });
});