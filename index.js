let ratingButtons = []
let selectedIndex = -1;

for(let i = 1;i<=5;i++) {
    const button = document.getElementById(`${i}`);
    ratingButtons.push(button);
}

ratingButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        makeSelected(index);
    });
});

function makeSelected(index) {
    selectedIndex = index;
    ratingButtons.forEach((button, currIndex) => {
        const isSelected = currIndex === index;
        if (isSelected) {
            button.classList.add('selected');
        }
        else button.classList.remove('selected');
    });
}

document.getElementsByClassName('submit')[0].addEventListener('click', () => {
    document.getElementById('section-1').classList.toggle('non-visible');
    document.getElementById('section-2').classList.toggle('non-visible');
    document.getElementsByClassName('results')[0].innerHTML = `You selected ${selectedIndex+1} out of 5`;
});

