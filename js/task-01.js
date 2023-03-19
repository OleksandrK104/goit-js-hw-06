
const itemEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemEl.length);

itemEl.forEach((element) => {
    const categoryEl = element.querySelector('h2');
    console.log('Category:', categoryEl.textContent);
    const elementsEl = element.querySelectorAll('ul > li');
    console.log('Elements:', elementsEl.length);
});
