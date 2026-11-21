document.addEventListener('DOMContentLoaded', () => {

    // Menú hamburguesa
    document.querySelectorAll('.navbar-burger').forEach(burger => {
        burger.addEventListener('click', () => {
            const target = document.getElementById(burger.dataset.target);
            burger.classList.toggle('is-active');
            target.classList.toggle('is-active');
            burger.setAttribute('aria-expanded', burger.classList.contains('is-active'));
        });
    });

    // Modal
    const cerrarModal = (modal) => modal.classList.remove('is-active');

    document.querySelectorAll('.js-modal-trigger').forEach(boton => {
        boton.addEventListener('click', () => {
            document.getElementById(boton.dataset.target).classList.add('is-active');
        });
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.querySelectorAll('.modal-background, .delete, .js-modal-close').forEach(el => {
            el.addEventListener('click', () => cerrarModal(modal));
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.is-active').forEach(cerrarModal);
        }
    });

});