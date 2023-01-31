    let height = document.getElementById('height')
    let weight = document.getElementById('weight')
    let btn = document.querySelector('input[type = "button"]')
    let status = document.getElementById('status')

    let head2 = document.createElement('h2')
    let para = document.createElement('p')

    status.appendChild(head2)
    status.appendChild(para)

    function checkBMI(){
        let bmi = Number(weight.value)/(Math.pow(height.value/100,2))

        // obesity > 30
        // overweight >= 25
        // healthy weight 18.5 - 24.9
        // underweight < 18.5  

        bmi >= 30 ?
        head2.textContent = `${bmi} is obesity`

        : bmi >= 25 ?
        head2.textContent = 'Overweight'
        : bmi >= 18.5 ?
        head2.textContent = 'Healthy Weight'
        : head2.textContent = "Underweight"

        console.log(bmi.toFixed(2))
    }

    btn.addEventListener('click', checkBMI)