import React from "react"

export default function Dynamic() {
    const date = new Date()
    const hours = date.getHours()

    const nums = [1, 2, 3, 4, 5]
    const square = nums.map(function(num) {
    return num * num
})
    const person = ["Tim", "Bob", "Joe", "John"]
    const uppercase = person.map(function(name) {
        return name[0].toUpperCase() + name.slice(1)
})
  /*   const pokemon = ["Tim", "Bob", "Joe", "John"]
    const poke = pokemon.map(function(name) {
        return `<p>${name}</p>`
}) */

    let timeOfDay 

    if(hours < 12) {
        timeOfDay = "morning"
    }else if(hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    }else {
        timeOfDay = "night"
    }
    return (
        <h1>Good {timeOfDay}! {uppercase[0]}. And the square is {square[4]}.</h1>
    )
}
