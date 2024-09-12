document.addEventListener('DOMContentLoaded', () => {
    const shareBtn = document.querySelector('.card__share-btn');
    const sharePanel = document.querySelector('.card__share-panel');

    shareBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        shareBtn.classList.toggle('active');
        sharePanel.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!shareBtn.contains(e.target) && !sharePanel.contains(e.target)) {
            shareBtn.classList.remove('active');
            sharePanel.classList.remove('active');
        }
    });

    sharePanel.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});