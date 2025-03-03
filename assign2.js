document.getElementById("taxable_inc").addEventListener("keyup", () => {

    let taxable_inc = document.getElementById("taxable_inc").value * 1;
    let excess, rate, btax, msg;

    if (taxable_inc < 250000) {
        btax = 0;
        excess = 0;
        rate = 0;
        msg = "You do not reach the minimum amount (250,000 pesos) to be subject to income tax.";
    } else if (taxable_inc < 400000) {
        btax = 0;
        excess = 250000;
        rate = 0.2;
        msg = "Your income tax is 20% of the excess (250,000 pesos).";
    } else if (taxable_inc < 800000) {
        btax = 30000;
        excess = 400000;
        rate = 0.25;
        msg = "Your income tax is 25% of the excess (400,000 pesos).";
    } else if (taxable_inc < 2000000) {
        btax = 130000;
        excess = 800000;
        rate = 0.3;
        msg = "The income tax is 30% of the excess (800,000 pesos).";
    } else if (taxable_inc < 8000000) {
        btax = 490000;
        excess = 2000000;
        rate = 0.32;
        msg = "The income tax is 32% of the excess (2,000,000 pesos).";
    } else {
        btax = 2410000;
        excess = 8000000;
        rate = 0.35;
        msg = "The income tax is 35% of the excess (8,000,000 pesos).";
    }

    result = ((taxable_inc - excess) * rate) + btax;

    document.getElementById("res").value = result;
    document.getElementById("message").innerHTML = msg;
});
