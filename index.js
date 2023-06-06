
fetch('http://localhost:3000/animals')
    .then((r) => r.json())
    .then(animalData => {

        animalData.forEach((animal) => {

            renderAnimal(animal)
        })


        function renderAnimal(animal) {
            const container = document.createElement('div')
            const image = document.createElement('img')
            const secondHeader = document.getElementById('second-header')

            secondHeader.after(container)
            container.append(image)

            image.src = animal.image
            image.classList.add('animal-image')
        }

        const formV = document.getElementById("volunteer-form")
        const urSignup = document.getElementById("volunteer")
        const volunteerList = document.getElementById("volunteer-list")


        formV.addEventListener('submit', (e) => {
            e.preventDefault()
            const newLi = document.createElement('li')
            volunteerList.append(newLi)
            newLi.textContent = urSignup.value
            urSignup.value = ''



        })
<<<<<<< HEAD
   
        
=======

        function donateButtons(donate) {
            let money = document.getElementById('btn-group')

            const oneDollar = document.querySelector('oneDollar')
            const fiveDollar = document.querySelector('fiveDollar')
            const tenDollar = document.querySelector('tenDollar')

            oneDollar.textContent = '$1'
            fiveDollar.textContent = '$5'
            tenDollar.textContent = '$10'

            money.append(oneDollar)
            money.append(fiveDollar)
            money.append(tenDollar)

            donate.append(money)
        }

>>>>>>> 01daae0b70ef64859891146b3b5e07091427ef59
    })




<<<<<<< HEAD
=======



>>>>>>> 01daae0b70ef64859891146b3b5e07091427ef59
