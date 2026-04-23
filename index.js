const cursor = document.getElementById('cursor'), ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx + 'px'; cursor.style.top = my + 'px'; });
(function anim() { rx += (mx - rx) * .12; ry += (my - ry) * .12; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(anim); })();
document.querySelectorAll('a,button,.skill-cat,.project-item,.cert-item,.lang-item').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
});

const revObs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }); }, { threshold: 0.07 });
document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 5) * .06 + 's'; revObs.observe(el); });

const barObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.querySelectorAll('.lang-fill').forEach(b => { b.style.transitionDelay = '.3s'; b.style.transform = `scaleX(${b.dataset.w})`; });
        }
    });
}, { threshold: .3 });
document.querySelectorAll('.lang-grid').forEach(g => barObs.observe(g));

const secs = document.querySelectorAll('section[id]'), navAs = document.querySelectorAll('.nav-links a');
new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { navAs.forEach(a => a.classList.remove('active')); const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`); if (a) a.classList.add('active'); } }); }, { threshold: .35 }).observe && secs.forEach(s => new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { navAs.forEach(a => a.classList.remove('active')); const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`); if (a) a.classList.add('active'); } }); }, { threshold: .35 }).observe(s));
