let flexItem = document.querySelectorAll('.flex-item');
let lastPanel;

function toggleOpen() {

    if (lastPanel === this) {

    } else if (lastPanel) {
        lastPanel.classList.remove('open');
    }

    this.classList.toggle('open');
    lastPanel = this

}

flexItem.forEach(item => item.addEventListener('click', toggleOpen));