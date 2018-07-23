const bands = ['Twenty one pilots', '30 seconds to Mars', 'Muse', 'Enigma', 'NWA', 'Hurts'];

const innerBands = document.querySelector('#bands');
const buttonToSortArray = document.querySelector('.sort-array button');

document.querySelector('.not-sorted').innerHTML = `<li>${bands.join(', ')}</li>`;

function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => {
    return strip(a) > strip(b) ? 1 : -1;
});

const clickToSortArray = () => {
    innerBands.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
};
buttonToSortArray.addEventListener('click', clickToSortArray);



