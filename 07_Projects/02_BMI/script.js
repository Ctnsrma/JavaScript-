

const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if(height < 0 || isNaN(height)){
        result.innerHTML = "Please enter a valid height."
    }else if(weight < 0 || isNaN(weight)){
        result.innerHTML = "Please enter a valid weight"
    }else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2);
        let category = '';
        if (bmi < 18.6) category = "Underweight";
        else if (bmi < 24.9) category = "Normal Range";
        else if (bmi < 29.9) category = "Overweight";
        else category = "Obese";
        result.innerHTML = `<span>${bmi} : ${category}</span>`
    }
})