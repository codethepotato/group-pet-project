//fetching data
fetch('http://localhost:3000/animals')
    .then((r) => r.json())
    .then(animalData => {
        const animalImagesContainer = document.getElementById('animal-images')
        animalData.forEach((animal) => {
            console.log(animal)
            renderAnimal(animal)
            moneyDonate()
        })
        //gets the animal pictures to show on DOM
        function renderAnimal(animal) {
            const container = document.createElement('div')
            const image = document.createElement('img')
            const secondHeader = document.getElementById('second-header')
            const animalName = document.getElementById("animalName")
            const species = document.getElementById("species")
            const description = document.getElementById("desc")
            const imageShow = document.getElementById("imageShow")

            secondHeader.after(container)
            container.append(image)

            image.src = animal.image
            image.classList.add('animal-image')
            // even listener for animal image and details to show
            image.addEventListener('mouseover', () => {

                animalName.textContent = animal.name
                species.textContent = animal.species
                description.textContent = animal.description
                imageShow.innerHTML = ''
                imageShow.append(image.cloneNode(true))
            })
        }
        // submit form for volunteering
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
        //donte buttons to donate
        function donateButtons(donation) {
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
//function for the donate buttons
        function moneyDonate() {
            const moneyContainer = document.getElementById("money")
            oneDollar.addEventListener('click', (e) => {
                moneyContainer.textContent = "Thanks For The Dollar!"
            })
            fiveDollar.addEventListener('click', () => {
                moneyContainer.textContent = "5 Dollars Yayyy!"
            })
            tenDollar.addEventListener('click', () => {
                moneyContainer.textContent = "10 Dollars WOW!"
            })
        }

    })





