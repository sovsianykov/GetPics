import {http} from './http'



addEventListener('DOMContentLoaded', () =>{

      fetch(' https://api.github.com/users')
          .then(data =>data.json())
          .then(data =>console.log(data))
          //  .then(data => createcard(data))
} )

function createcard(data) {
      const map = document.querySelector('#map')
       data.forEach( el => {
    let  item = document.createElement('div');
    // let  login = document.createElement('div');


    })



}




