fetch('http://localhost:3000/animals')
    .then((r) => r.json())
    .then(animalData => {

        animalData.forEach((animal) => {
            console.log(animal)
        })

        function renderAnimal(animal) {
            const container = document.createElement('span')
            const image = document.createElement('img')
            const secondHeader = document.getElementById('second-header')
    
            secondHeader.append(container)
            container.append(image)
            console.log(secondHeader)
    
            image.src = animal.image
        }


    })

   