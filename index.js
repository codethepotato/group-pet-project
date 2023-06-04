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


    })

   