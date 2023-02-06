const main = document.querySelector('.main')

function getDAta () {
    fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(res => res.json())
        .then(data => {
            console.log( data)
        })
}
getDAta()