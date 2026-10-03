function calculateBMI() {

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    let bmi = weight / ((height / 100) ** 2);

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    }
    else if (bmi < 25) {
        category = "Normal Weight";
    }
    else if (bmi < 30) {
        category = "Overweight";
    }
    else {
        category = "Obese";
    }

    document.getElementById("result").innerHTML =
    `BMI: ${bmi.toFixed(2)}<br>${category}`;
}
