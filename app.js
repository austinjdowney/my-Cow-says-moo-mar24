let animals = {
    cow: {
        btnColor: 'primary',
        name: 'cow',
        sound: 'moo',
        imgUrl: imgsrc,
    },
    duck: {
        btnColor: 'secondary',
        name: 'duck',
        sound: 'quack',
        imgUrl: imgsrc,
    },
    dog: {
        btnColor: 'success',
        name: 'dog',
        sound: 'woof',
        imgUrl: imgsrc,
    },
    cat: {
        btnColor: 'warning',
        name: 'cat',
        sound: 'meow',
        imgUrl: imgsrc,
    },
    Mick: {
        btnColor: 'danger',
        name: 'Mick',
        sound: 'Tacos',
        imgUrl: imgsrc,
    }
}

function speak(type) {
    let animal = animals[type]
    document.getElementById('msg').innerText = `The ${animal.name} Says ${animal.sound}!`
    document.getElementById('msg').innerHTML = `<img src= "${animal.imgUrl}" alt=""/>`
}

//            <button type="button" class="btn btn-primary" onclick="speak('cow')">COW</button>

function random() {
    //creates an arroy of all the keys from the animals object as strings
    let choices = Object.keys(animals)
    //returns a random number between 0 and the exclusive upper bound (the last index)
    //normall with an array.length you'd need -1 but floor is not inclusive so omit -1
    //bc it wont include itself already
    let randomIndex = Math.floor(Math.random() * (Choices.length))
    speak(choices[randomIndex])
}

function draw() {
    let template = ''
    //for (in) each of the properties of the animals object
    //iterating over an object
    for (let prop in animals) {
        //accessing the animal through the dictionary using the variable for the prop
        let animal = animals[prop]
        //create a button
        template += `<button type="button" class="btn btn-${animal.btnColor}" onclick="speak(`${ prop } `)">${prop.toUpperCase()}
    }</button>`
        document.getElementById('btn').innterHTML = template
    }
    template += `<button type="button" class="btn btn-dark mx-2" onclick="random"` > ${ prop.toUpperCase() }

    draw()

// for in loops (for(let prop in animals)) lets you access properties in a loop

//let animal= animals[type] is same as animals.tim but is now dynamic 
// to access any variable now. Set to parameter


//abstraction is removing the specifics in exchange for more dynamic 
//pieces of data (arrays)

//Section is Dry Code.. dont need as many functions
//function cow(){
  //  console.log('moo')
    //document.getElementById('msg').innerText= 'The Cow Says Moo'
    //document.getElementById('img').innerHTML= '<img src= https//..(image url)>'
//}
//function duck(){
//    console.log('quack')
  //  document.getElementById('msg').innerText= 'The duck Says quack'
 //   document.getElementById('img').innerHTML= '<img src= https//..(image url)>`},