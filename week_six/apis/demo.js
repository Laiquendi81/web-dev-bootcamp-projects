const car_1 = {
    name: 'BMW',
    model: 'XSeries',
    number_doors: 2,
    fwd: false,
    horsepower: 200
}

const user_1 = {
    email: "123@hotmail.com",
    first_name: "Colin",
    surname: "Caterpillar",
    city: "London",
    phone: 07771234567,
    verification: true
}

const cars = [
    {
        name: 'BMW',
        model: 'XSeries',
        number_doors: 2,
        fwd: false,
        horsepower: 200
    },
    {
        name: 'Volvo',
        model: 'S40',
        number_doors: 4,
        fwd: true,
        horsepower: 400
    },
    {
        name: 'Mazda',
        model: '6',
        number_doors: 4,
        fwd: false,
        horsepower: 300
    }
]

function printCarNames() {
    cars.forEach((car) => {
        const p = document.createElement('p');
        p.innerHTML = car.name;
        document.getElementById('demo').appendChild(p);
    })
}

printCarNames();

// console.log(cars[0]);
// const mazda = cars[2].name;
// console.log(mazda);