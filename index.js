document.querySelector('#load').addEventListener('click', load);

function load() {

    const url ='https://jsonplaceholder.typicode.com/users';

    fetch(url)
        .then(function (respons) {
            return respons.json();
        })
        .then(function (data) {
            const ul = document.querySelector('#list');

            let html = data.map(function (item) {
                return '<li>' + item.id + ' ' + item.name + ' (' + item.email + ')</li>'
            });

            ul.insertAdjacentHTML('afterbegin', html.join(' '))
        })
}