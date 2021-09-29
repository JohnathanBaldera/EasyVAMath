enteredDisabilityPercentages = []
const disabilityNums = document.getElementsByClassName("disability-num")
const enteredNums = document.getElementsByClassName(".entered-ratings")

// Calculating the disability when Percentage Buttons Clicked/Updating DOM 
for (let btn of disabilityNums) {
    btn.addEventListener("click", () => {
        let leftoverPercentage = 100
        let num = btn.textContent.match(/(\d+)/)[0]
        enteredDisabilityPercentages.push(num)

        //Sorting array in reversed order
        enteredDisabilityPercentages.sort(function(a, b){return b-a})

        document.querySelector(".entered-ratings").innerHTML = ""
        for (let disPer of enteredDisabilityPercentages) {
            document.querySelector(".entered-ratings").innerHTML += `<button class="entered-rating-btn">${disPer}% X</button>`
            let calNum = leftoverPercentage * (disPer * .01)
            calNum = Math.round(calNum)
            console.log(calNum)
            leftoverPercentage -= calNum
            document.querySelector(".disability-leftover-amount").textContent = `${leftoverPercentage}`
            document.querySelector(".true-percentage-amount").textContent = `${100 - leftoverPercentage}`
        }
        document.querySelector(".current-rating").textContent = `${Math.round((100 - leftoverPercentage) * .10) * 10}%`
        
           
    })
}


// TODO: Remove Button Entered
for (let btn of enteredNums) {
    btn.addEventListener("click", () => {
        console.log("remove btn")
    })
}

