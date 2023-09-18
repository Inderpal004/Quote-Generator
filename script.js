let gQuote = document.getElementById('gQuote');
let gTweet = document.getElementById('gTweet');
let content = document.getElementById('content');
let author = document.getElementById('author')

const app_url = 'https://api.quotable.io/random'

async function generateQuote(url){
const response = await fetch(url)
    let data = await response.json()
    console.log(data)

    content.innerHTML = data.content 
    author.innerHTML = data.author 
}

function shareTweet(){
    window.open(`https://twitter.com/intent/tweet?text=${content.innerHTML} ---- ${author.innerHTML} `)
}

generateQuote(app_url)
