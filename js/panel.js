const togglePanelButton = document.querySelector('.toggle-panel');
const panel = document.querySelector('.panel');

function togglePanel() {
    if (panel.style.display ==='none') {
        panel.style.display = 'block'
    } else {
        panel.style.display = 'none'
    }
}

togglePanelButton.addEventListener('click', togglePanel);