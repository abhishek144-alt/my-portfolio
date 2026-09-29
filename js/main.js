/**
 * Main Application Logic & UI Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileDrawer = document.querySelector('.nav-mobile-drawer');
  const mobileLinks = document.querySelectorAll('.nav-mobile-drawer .nav-link');
  const navLinks = document.querySelectorAll('.site-header .nav-link');
  const sections = document.querySelectorAll('section[id]');
  const cursorSpotlight = document.querySelector('.cursor-spotlight');

  // Sticky Header on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active Navigation Link on Scroll
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    const allNavLinks = document.querySelectorAll('.nav-manga-link, .nav-desktop .nav-link');
    allNavLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  // Tech Stack Brutalist Tabs Switching
  const techTabBtns = document.querySelectorAll('.tech-tab-btn');
  const techPanels = {
    hdl: document.getElementById('tab-panel-hdl'),
    eda: document.getElementById('tab-panel-eda'),
    domains: document.getElementById('tab-panel-domains')
  };

  if (techTabBtns.length > 0) {
    techTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        techTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const tabKey = btn.dataset.tab;
        Object.keys(techPanels).forEach(key => {
          if (techPanels[key]) {
            techPanels[key].style.display = key === tabKey ? 'grid' : 'none';
          }
        });
      });
    });
  }

  // Mobile Menu Toggle
  if (mobileMenuBtn && mobileDrawer) {
    const backdrop = document.querySelector('.nav-drawer-backdrop');
    const closeBtn = document.querySelector('.drawer-close-btn');

    const toggleDrawer = (isOpen) => {
      const open = typeof isOpen === 'boolean' ? isOpen : !mobileDrawer.classList.contains('open');
      mobileMenuBtn.classList.toggle('active', open);
      mobileDrawer.classList.toggle('open', open);
      if (backdrop) backdrop.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    };

    mobileMenuBtn.addEventListener('click', () => toggleDrawer());
    if (closeBtn) closeBtn.addEventListener('click', () => toggleDrawer(false));
    if (backdrop) backdrop.addEventListener('click', () => toggleDrawer(false));

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => toggleDrawer(false));
    });
  }

  // Cursor Spotlight Glow
  if (cursorSpotlight && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      cursorSpotlight.style.left = `${e.clientX}px`;
      cursorSpotlight.style.top = `${e.clientY}px`;
    });
  }

  // Update current year in footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Projects Horizontal Slider Navigation
  const projectsGrid = document.querySelector('.projects-cards-grid');
  const prevBtn = document.getElementById('proj-btn-prev');
  const nextBtn = document.getElementById('proj-btn-next');

  if (projectsGrid && prevBtn && nextBtn) {
    const scrollStep = 432; // card width (400px) + gap (32px)

    prevBtn.addEventListener('click', () => {
      projectsGrid.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      projectsGrid.scrollBy({ left: scrollStep, behavior: 'smooth' });
    });

    // Mouse drag scrolling support
    let isDown = false;
    let startX = 0;
    let initialScrollLeft = 0;

    projectsGrid.addEventListener('mousedown', (e) => {
      if (e.target.closest('a') || e.target.closest('button')) return;
      isDown = true;
      projectsGrid.style.cursor = 'grabbing';
      startX = e.pageX - projectsGrid.offsetLeft;
      initialScrollLeft = projectsGrid.scrollLeft;
    });

    projectsGrid.addEventListener('mouseleave', () => {
      isDown = false;
      projectsGrid.style.cursor = '';
    });

    projectsGrid.addEventListener('mouseup', () => {
      isDown = false;
      projectsGrid.style.cursor = '';
    });

    projectsGrid.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - projectsGrid.offsetLeft;
      const walk = (x - startX) * 1.5;
      projectsGrid.scrollLeft = initialScrollLeft - walk;
    });
  }
});
