const cont = document.querySelector('.container')
const input = document.querySelector('input')
const btn = document.querySelector('button')
const format = document.querySelector('.resolution')

function getData (){

    // input[0].onkeyup = function(){
    //     document.querySelector('.title').innerHTML = `Food title: ${input[0].value}`
    // }

    const key = {
        url:"https://www.youtube.com/watch?v=P56RouFPdLk",
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(key)
    }

    fetch('http://167.99.138.67:1000/youtubeDownload', options)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setVideo(data)
        })
}
getData()

function setVideo (data){

    cont.innerHTML = `
          <div class="first d-flex flex-d-column gap j-center p10">
            <img src="${data.videoDetails.thumbnails[4].url}" alt="">
            <h1>${data.videoDetails.title}</h1>
            <p>${data.videoDetails.description}</p>
            <div>${data.videoDetails.ownerChannelName}</div>
            <div>${data.videoDetails.uploadDate}</div>
            <p>${data.videoDetails.keywords}</p>
          </div>
    `
    data.formats.forEach(obj => {
        console.log(obj)

        // reikia panaudoti find funkcija kad atsirastu tik 1 toks mygtukas
        // reikia perduoti mygtukui rzoliucijos nuoroda
        // tas mygtukas turi perduoti rezoliucijos nuoroda download mygtukui
        // turi atsisiusti i kompiuteri
        // padaryti kad ikelus nuoroda iskart atsirastu vido info
        // perkelti kad viskas veiktu per inputo nuoroda


        if (obj.qualityLabel === "2160p"){
            format.innerHTML+=`<button>2160p</button>`
        }
        if (obj.qualityLabel === "1440p"){
            format.innerHTML+=`<button>1440p</button>`
        }
        if (obj.qualityLabel === "1080p"){
            format.innerHTML+=`<button>1080p</button>`
        }
        if (obj.qualityLabel === "720p"){
            format.innerHTML+=`<button>720p</button>`
        }
        if (obj.qualityLabel === "480p"){
            format.innerHTML+=`<button>480p</button>`
        }
        if (obj.qualityLabel === "360p"){
            format.innerHTML+=`<button>360p</button>`
        }

    })
}

input.onkeyup = function (){

}