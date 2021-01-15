import {http} from './http'



addEventListener('DOMContentLoaded', getImage)


function getImage() {

    const place = document.querySelector('#playlists')

    http.get( 'https://api.deezer.com/radio' )
        .then( data => data.data.forEach(el => {
console.log(el)
                const td = document.createElement('div')
                const img = document.createElement('img')
                const title = document.createElement('h5')
                const div = document.createElement('div')
                title.innerHTML =el.title
                // div.style.display = 'inline-block'
                // td.style.margin = '5px'


                img.src = el.picture
                div.appendChild(title)
                div.appendChild(img)


                place.appendChild(div)
            }

        ) )








      .catch(err =>console.log(err))
}

