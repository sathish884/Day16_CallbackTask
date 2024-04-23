
// Call Back hel

function createElement(tagName, clasess = [], textContent = '') {
    let element = document.createElement(tagName);

    if (clasess.length > 0) {
        element.classList.add(...clasess);
    }

    if (textContent !== '') {
        element.textContent = textContent
    }

    return element;
}

let container = createElement('div', ['container-fluid', 'p-5', 'd-flex', 'justify-content-center']);

let card = createElement('div', ['card']);
container.appendChild(card);

let cardBody = createElement('div', ['card-body', 'text-center', 'p-3']);
card.appendChild(cardBody);

let h4Tag = createElement('h4', ['text-center']);
h4Tag.style.color = "white";
card.style.backgroundColor = 'grey';
cardBody.appendChild(h4Tag);

setTimeout(function () {
    console.log("Country - India");
    h4Tag.textContent = "10";

    setTimeout(function () {
        console.log("Country - Srilankah");
        h4Tag.textContent = '9';

        setTimeout(function () {
            h4Tag.textContent = '8';

            setTimeout(function () {
                h4Tag.textContent = '7';

                setTimeout(function () {
                    h4Tag.textContent = '6';

                    setTimeout(function () {
                        h4Tag.textContent = '5';

                        setTimeout(function () {
                            h4Tag.textContent = '4';

                            setTimeout(function () {
                                h4Tag.textContent = '3';

                                setTimeout(function () {
                                    h4Tag.textContent = '2';

                                    setTimeout(function () {
                                        h4Tag.textContent = '1';

                                        setTimeout(function () {
                                            h4Tag.textContent = 'Happy Independency Day';
                                            h4Tag.style.color = 'black';
                                            card.style.backgroundColor = 'white';
                                            let image = createElement('img', ['img-thumbnail']);
                                            image.setAttribute('src', 'Flag_of_India.svg.webp');
                                            image.setAttribute('width', '200');
                                            image.setAttribute('height', '200');
                                            cardBody.appendChild(image);

                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

document.body.appendChild(container);