function convertToRoman(num) {
    const romanNumerals = [
        [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
        [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
        [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
    ];
    let roman = "";
    for (const [value, numeral] of romanNumerals) {
        while (num >= value) {
            roman += numeral;
            num -= value;
        }
    }
    return roman;
}

function handleConversion() {
    const numberInput = document.getElementById("number");
    const output = document.getElementById("output");
    const number = parseInt(numberInput.value.trim(), 10);

    if (isNaN(number) || number < 1 || number > 3999) {
        output.textContent = "Please enter a number between 1 and 3999";
        return;
    }

    output.textContent = `${number} in Roman numerals is: ${convertToRoman(number)}`;
}

document.getElementById("convert-btn").addEventListener("click", handleConversion);
document.getElementById("number").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        handleConversion();
    }
});