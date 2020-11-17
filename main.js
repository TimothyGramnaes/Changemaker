window.addEventListener('load', main);

function main() {
    getElementsFromDom();
  //  addEventListeners();
}

let taxRate = 1.25

function getElementsFromDom() {


    const tax25 = document.getElementById('25');
    const tax12 = document.getElementById('12');
    const tax6 = document.getElementById('6');
    const tax0 = document.getElementById('0');

    let withTax = document.getElementById('with-tax');
    let withoutTax = document.getElementById('without-tax');
    let tax = document.getElementById('tax');

    tax25.addEventListener('click', ()=> updateTaxRate(withTax, withoutTax, tax, 1.25))
    tax12.addEventListener('click', ()=> updateTaxRate(withTax, withoutTax, tax, 1.12))
    tax6.addEventListener('click', ()=> logOut6(withTax, withoutTax, tax, 1.06))
    tax0.addEventListener('click', ()=> logOut0(withTax, withoutTax, tax, 1.0))
    withTax.addEventListener('input', () => displayResult(withTax, withoutTax, tax))


 
}

function updateTaxRate(withTax, withoutTax, tax, newTaxRate) {
        taxRate = newTaxRate

        displayResult(withTax, withoutTax, tax)

    }

function displayResult(withTax, withoutTax, tax) {
    let numberStart = Number(withTax.value)

    let result = (numberStart / taxRate)
    result = Math.round(result * 100) / 100

    withoutTax.value = result
    tax.value = Math.round((numberStart - result) * 100) / 100
}



/*
function logOut25(withTax, withoutTax) {
    let numberStart = Number(withTax.value)
    let tax25 = 1.25
    const result = (numberStart / tax25)

    console.log(result);
}

function logOut12(includes, excludes) {
    let numberStart = Number(includes.value)
    let tax25 = 1.12
    const result = (numberStart / tax12)

    console.log(result);
}

*/