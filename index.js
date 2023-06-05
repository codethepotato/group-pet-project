
fetch('http://localhost:3000/animals')
    .then((r) => r.json())
    .then(animalData => {
        const animalImagesContainer = document.getElementById('animal-images')
        animalData.forEach((animal) => {
            console.log(animal)
            renderAnimal(animal)
        })

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

            container.addEventListener('mouseover', () => {
    
                animalName.textContent = animal.name
                species.textContent = animal.species
                description.textContent = animal.description
                imageShow.innerHTML = ''
                imageShow.append(image.cloneNode(true))

                

            })
        }
// want to make a function for more modular code 
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
        const money = document.getElementById("money")
      
         oneDollar.addEventListener('click', (e) => {
            money.textContent = "Thanks For The Dollar!"
        })

        fiveDollar.addEventListener('click', () => {
            money.textContent = "5 Dollars Yayyy!"
        })
        tenDollar.addEventListener('click', () => {
            money.textContent = "10 Dollars WOW!"
        })

    })
   




