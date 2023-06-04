fetch('http://localhost:3000/animals')
    .then((r) => r.json())
    .then(animalData => {
        console.log(animalData)
    })

    console.log('hi')