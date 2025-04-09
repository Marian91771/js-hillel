class Resident{
    constructor(name, surname, age){
        if (!name || !surname || age == null) {
            throw new Error("Resident: All gaps are required.");
        }
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}

class Flat{
    constructor(flatNum, numOfRooms, residents){
        if (!flatNum || !numOfRooms || !Array.isArray(residents) || residents.length === 0) {
            throw new Error("Flat: All gaps are required.");
        }
        this.flatNum = flatNum;
        this.numOfRooms = numOfRooms;
        this.residents = Flat.createSet(residents);
    }
    static createSet(residents){
        const residentsSet = new Set();
        residents.forEach(resident => residentsSet.add(resident));
        return residentsSet;
    }
}

class Building{
    constructor(address, numOfFlors, flats){
        if (!address || !numOfFlors || !Array.isArray(flats) || flats.length === 0) {
            throw new Error("Building: All gaps are required.");
        }
        this.address = address;
        this.numOfFlors = numOfFlors;
        this.flats = Building.createMap(flats);
    }
    static createMap(flats){
        const flatsMap = new Map();
        flats.forEach(flat => flatsMap.set(flat.flatNum, flat));
        return flatsMap;
    }
}

function showBuilding(building){
    const app = document.querySelector(".app");
    
    const buildingBlock = document.createElement("div");
    buildingBlock.className = "building";
    buildingBlock.innerHTML = `
        <h2>Building at ${building.address}</h2>
        <p>Floors: ${building.numOfFlors}</p>
        <h3>Flats:</h3>
    `;

    building.flats.forEach((flat, flatNum) => {
        const flatBlock = document.createElement("div");
        flatBlock.classList = "flat";
        flatBlock.innerHTML = `
            <p><strong>Flat #${flatNum}</strong> - Rooms: ${flat.numOfRooms}</p>
            <div class="residents">
                <strong>Residents:</strong>
                <ul></ul>
            </div>
        `;

        const residentsBlock = flatBlock.querySelector('ul');
        flat.residents.forEach(resident => {
            const li = document.createElement('li');
            li.textContent = `${resident.name} ${resident.surname}, age ${resident.age}`;
            residentsBlock.appendChild(li);
        });

        buildingBlock.appendChild(flatBlock);
    });

    app.appendChild(buildingBlock);
}



const build1 = new Building('Main st', 5, [
    new Flat(1, 2, [
        new Resident('John', 'Smith', 27),
        new Resident('Kate', 'Smith', 24)
    ]),
    new Flat(2, 1, [
        new Resident('Marian', 'Kvit', 18)
    ]),
    new Flat(3, 2, [
        new Resident('Cali', 'Jener', 23),
        new Resident('Kevin', 'Jener', 24),
        new Resident('Max', 'Jener', 5)
    ])
])

const build2 = new Building('Oak Avenue', 3, [
    new Flat(1, 1, [
        new Resident('Liam', 'Turner', 32)
    ]),
    new Flat(2, 2, [
        new Resident('Emma', 'Brown', 28),
        new Resident('Olivia', 'Brown', 3)
    ]),
    new Flat(3, 3, [
        new Resident('Noah', 'Clark', 40),
        new Resident('Ava', 'Clark', 38),
        new Resident('Sophia', 'Clark', 15),
        new Resident('Lucas', 'Clark', 10)
    ])
]);

const build3 = new Building('River Rd', 4, [
    new Flat(1, 2, [
        new Resident('Jack', 'Wilson', 45),
        new Resident('Ella', 'Wilson', 42)
    ]),
    new Flat(2, 1, [
        new Resident('Mia', 'Lee', 30)
    ]),
    new Flat(3, 1, [
        new Resident('James', 'Hall', 25)
    ]),
    new Flat(4, 2, [
        new Resident('Isabella', 'Hall', 24),
        new Resident('Ethan', 'Hall', 1)
    ])
]);


console.log(build1)

showBuilding(build1)
showBuilding(build2)
showBuilding(build3)


