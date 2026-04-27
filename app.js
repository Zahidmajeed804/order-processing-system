//Order Processing System (Level 2)

function burgerPriceCalculator(quantity) {
    return quantity * 250;
}
function pizzaPriceCalculator(quantity) {
    return quantity * 500;
}

function discountSystem(totalBill) {
    if (totalBill > 1000) {
        return totalBill * 0.1;
    }
    return 0;
}

function taxCalculator(tax) {
    return tax * 0.05;
}

function orderProcess(burgers, pizzas) {
    const burgerTotalPrice = burgerPriceCalculator(burgers);
    const pizzaTotalPrice = pizzaPriceCalculator(pizzas);

    const overallTotal = burgerTotalPrice + pizzaTotalPrice;
    const discount = discountSystem(overallTotal);
    const afterDiscount = overallTotal - discount;
    const tax = taxCalculator(afterDiscount);

    const finalTotal = afterDiscount + tax;
    console.log(`Order Summary:
Burgers: ${burgers} → Rs. ${burgerTotalPrice}
Pizzas: ${pizzas} → Rs. ${pizzaTotalPrice}
Subtotal: Rs. ${overallTotal}
Discount: Rs. ${discount}
Tax: Rs. ${tax}
Final Total: Rs. ${finalTotal}`);
}

console.log(orderProcess(1, 1));
