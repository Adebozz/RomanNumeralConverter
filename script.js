document.getElementById("convert-btn").addEventListener("click", function() {
    const numberInput = document.getElementById("number").value.trim();
    const output = document.getElementById("output");

    if (numberInput === "") {
        output.textContent = "Please enter a valid number";
        return;
    }

    const number = parseInt(numberInput, 10);
    if (isNaN(number)) {
        output.textContent = "Please enter a valid number";
        return;
    }
    if (number < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
        return;
    }
    if (number >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
        return;
    }

    const romanNumerals = [
        [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
        [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
        [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
    ];

    let roman = "";
    let num = number;

    for (const [value, numeral] of romanNumerals) {
        while (num >= value) {
            roman += numeral;
            num -= value;
        }
    }

    output.textContent = roman;
});