document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('navbar');

    window.onscroll = function() {
        if (window.scrollY > 20) {
            header.classList.add('header-red');
        } else {
            header.classList.remove('header-red');
        }
    };
});
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  // إضافة وظيفة عند الضغط على الزر
  menuBtn.addEventListener('click', () => {
    // تبديل ظهور القائمة (تبديل كلاس hidden)
    mobileMenu.classList.toggle('hidden');
  });

  // إغلاق المنيو تلقائياً عند الضغط على أي رابط بداخلها
  const menuLinks = mobileMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true, // لتوسيطه تلقائياً
        padding: '1rem', // إضافة مسافة 16px من الجوانب
      },
    },
  },
  plugins: [],
}


window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('shadow-lg', 'bg-white');
    } else {
        header.classList.remove('shadow-lg');
    }
});