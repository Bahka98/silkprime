console.log('--- DEBUG: script.js foi carregado e está sendo executado. ---');

document.addEventListener('DOMContentLoaded', () => {
    console.log('--- DEBUG: O HTML foi completamente carregado (DOMContentLoaded). ---');

    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeBtn = document.getElementById('close-btn');
    const nav = document.querySelector('header nav');

    // Vamos verificar se os elementos foram encontrados
    console.log('--- DEBUG: Buscando elementos... ---');
    console.log('Elemento "hamburgerBtn":', hamburgerBtn);
    console.log('Elemento "closeBtn":', closeBtn);
    console.log('Elemento "nav":', nav);

    if (hamburgerBtn && closeBtn && nav) {
        console.log('--- DEBUG: Elementos encontrados! Adicionando eventos de clique. ---');

        hamburgerBtn.addEventListener('click', () => {
            console.log('--- SUCESSO: O botão HAMBÚRGUER foi CLICADO! ---');
            nav.classList.add('active');
            closeBtn.style.display = 'block';
            hamburgerBtn.style.display = 'none';
        });

        closeBtn.addEventListener('click', () => {
            console.log('--- SUCESSO: O botão FECHAR foi CLICADO! ---');
            nav.classList.remove('active');
            closeBtn.style.display = 'none';
            hamburgerBtn.style.display = 'block';
        });

    } else {
        console.error('--- ERRO CRÍTICO: Um ou mais elementos essenciais (hambúrguer, fechar, nav) NÃO foram encontrados no HTML. Verifique os IDs e seletores! ---');
    }
});