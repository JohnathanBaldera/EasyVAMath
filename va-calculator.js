const enteredDisabilityPercentages = []
const disabilityNums = document.getElementsByClassName("disability-num")
const enteredRatingDiv = document.getElementById("entered-ratings")

// Calculate the adding of a disability
const calculateDisability = () => {
    let leftoverPercentage = 100
    enteredRatingDiv.innerHTML = ""
    document.querySelector(".disability-leftover-amount").textContent = 0
    document.querySelector(".true-percentage-amount").textContent = 0
    document.querySelector(".current-rating").textContent = 0
        for (let disPer of enteredDisabilityPercentages) {
            enteredRatingDiv.innerHTML += `<button class="entered-rating-btn">${disPer}% X</button>`
            let calNum = Math.round(leftoverPercentage * (disPer * .01))
            leftoverPercentage -= calNum
            document.querySelector(".disability-leftover-amount").textContent = `${leftoverPercentage}`
            document.querySelector(".true-percentage-amount").textContent = `${100 - leftoverPercentage}`
            document.querySelector(".current-rating").textContent = `${Math.round((100 - leftoverPercentage) * .10) * 10}%`
        }
}

// Calculating the disability when Percentage Buttons Clicked/Updating DOM 
for (let btn of disabilityNums) {
    btn.addEventListener("click", () => {
        let num = btn.textContent.match(/(\d+)/)[0]
        enteredDisabilityPercentages.push(num)

        //Sorting array in reversed order
        enteredDisabilityPercentages.sort(function(a, b){return b-a})
        calculateDisability()
    })
}    

//Event Delgation - Remove Disability num and recalculate
enteredRatingDiv.addEventListener("click", (e) => {
        if (e.target && e.target.className == 'entered-rating-btn') {
            let num = e.target.textContent.match(/(\d+)/)[0]
            enteredDisabilityPercentages.splice(enteredDisabilityPercentages.indexOf(num), 1)          
            calculateDisability()
        }
})
        
        
        //Removing a percentage
        // TODO: Recalulate once button is removed

        // const enteredNums = document.getElementsByClassName("entered-rating-btn")
        // for (let enteredBtn of enteredNums) {
        //     enteredBtn.addEventListener("click", () => {
        //         let percentage = enteredBtn.textContent.match(/(\d+)/)[0]
        //         let idx = enteredDisabilityPercentages.indexOf(percentage)
        //         enteredDisabilityPercentages.splice(idx, 1)

        //         document.querySelector(".entered-ratings").innerHTML = ""
        //         for (let disPer of enteredDisabilityPercentages) {
        //             document.querySelector(".entered-ratings").innerHTML += `<button class="entered-rating-btn">${disPer}% X</button>`
        //             let calNum = 100 * (disPer * .01)
        //             calNum = Math.round(calNum)
        //             leftoverPercentage = 100 - calNum
        //             document.querySelector(".disability-leftover-amount").textContent = `${leftoverPercentage}`
        //             document.querySelector(".true-percentage-amount").textContent = `${100 - leftoverPercentage}`
        //         }
        //         document.querySelector(".current-rating").textContent = `${Math.round((100 - leftoverPercentage) * .10) * 10}%`                

        //     })
        // }
//     })
           
// };