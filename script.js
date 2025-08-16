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
    const characterCards = document.querySelectorAll('.card[data-character]');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalJutsu = document.getElementById('modal-jutsu');
    const modalBio = document.getElementById('modal-bio');

    function openModal(character) {
        const data = characterData[character];
        if(!data) return;

        modalImg.src = data.image;
        modalImg.alt = data.title;
        modalTitle.textContent = data.title;
        modalJutsu.textContent = data.jutsu;
        modalBio.textContent = data.bio;

        modalOverlay.classList.add('active');
    }
    function closeModal () {
        modalOverlay.classList.remove('active');
    }

    characterCards.forEach(card => {
        card.addEventListener('click', () => {
            const character = card.dataset.character;
            openModal(character);
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
});