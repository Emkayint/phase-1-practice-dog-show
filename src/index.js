document.addEventListener('DOMContentLoaded', getNamesFromDb)

function getNamesFromDb(){
    fetch("  http://localhost:3000/dogs")
    .then(res => res.json())
    .then(data => {
        data.forEach(elem => {

            let tables = document.getElementById('table-body')
            let tr = document.createElement('tr')
            let tdName = document.createElement('td')
            let tdBreed = document.createElement('td')
            let tdSex = document.createElement('td')
            let tdBtn = document.createElement('td')
            let btn = document.createElement('button')


            tdName.innerText = elem.name
            tdBreed.innerText = elem.breed
            tdSex.innerText = elem.sex 
            btn.innerText = "Edit Dog"
            tdBtn.appendChild(btn)
            tr.appendChild(tdName)
            tr.appendChild(tdBreed)
            tr.appendChild(tdSex)
            tr.appendChild(tdBtn)
            tables.appendChild(tr)
            console.log(elem)
        })
    })
}

