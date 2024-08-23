document.querySelectorAll('#menu-footer a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // デフォルトのジャンプ動作を防ぐ

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // スムーズにスクロールする
            });
        }
    });
});
