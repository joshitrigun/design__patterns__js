function Fedex() {
    this.calculate = () => {
        return 2.45
    }
}
function UPS() {
    this.calculate = () => {
        return 1.9  
    }
}
function USPS() {
    this.calculate = () => {
        return 1.45
    }
}

function Shipping() {
    this.company = ""
    this.setStrategy = (company) => {
        this.company=company
    }
    this.calculate = (package) => {
        return this.company.calculate(package)
    }
}
const fedex = new Fedex()
const ups = new UPS()
const usps = new USPS()
const package = { 
    from: 'Alabama',
    to: 'Georgia',
    weight: 1.56
}

const shipping = new Shipping()
shipping.setStrategy(fedex)
console.log("Fedex: " + shipping.calculate(package));


shipping.setStrategy(ups)
console.log("ups: " + shipping.calculate(package));

shipping.setStrategy(usps)
console.log("USPS: " + shipping.calculate(package));