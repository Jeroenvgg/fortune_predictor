class Message {
    constructor(name, dateDay, dateMonth, horoscope) {
        this._name = name;
        this._dateDay = dateDay;
        this._dateMonth = dateMonth;
        this._horoscope = horoscope;
    }

    // Getter and Setter for name
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    // Getter and Setter for dateDay
    get dateDay() {
        return this._dateDay;
    }

    set dateDay(value) {
        this._dateDay = value;
    }

    // Getter and Setter for dateMonth
    get dateMonth() {
        return this._dateMonth;
    }

    set dateMonth(value) {
        this._dateMonth = value;
    }

    // Getter and Setter for horoscope
    get horoscope() {
        return this._horoscope;
    }

    set horoscope(value) {
        this._horoscope = value;
    }

    displayProperties() {
        console.log(`Name: ${this._name}`);
        console.log(`Date Day: ${this._dateDay}`);
        console.log(`Date Month: ${this._dateMonth}`);
        console.log(`Horoscope: ${this._horoscope}`);
    }

        // Hash function to generate a consistent number based on input string
        static hashCode(str) {
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                const char = str.charCodeAt(i);
                hash = (hash << 5) - hash + char;
                hash |= 0; // Convert to 32bit integer
            }
            return hash;
        }
    
        // Function to generate the message
        generateMessage() {
            const hashInput = `${this._name}${this._dateDay}${this._dateMonth}${this._horoscope}`;
            const hashValue = Message.hashCode(hashInput);
            const hashInput2 = `${this._name}${this._dateDay}${this._dateMonth}${this._horoscope}random`;
            const hashValue2 = Message.hashCode(hashInput2);
            
            // Generate values based on hash
            const loveLifeRate = Math.abs(hashValue % 100) + 1; // X between 1 and 100
            const starEnergy = Math.abs(hashValue2 % 100); // Number between 0 and 100
    
            // Generate the message
            return `The tired tear, predicted that the human with the name off ${this._name}, her love life will be at a rate of ${loveLifeRate}% for the month ${this._dateMonth}. You ${this._horoscope}, feel the energy of ${starEnergy}% off the stars.`;
        }
}

let messages = []

messages.push(new Message('Alice', 31, 'January', 'Capricorn'));
messages.push(new Message('Bob', 7, 'February', 'Aquarius'));
messages.push(new Message('Charlie', 4, 'March', 'Pisces'));
messages.push(new Message('David', 9, 'April', 'Aries'));
messages.push(new Message('Eva', 21, 'May', 'Taurus'));
messages.push(new Message('Frank', 6, 'June', 'Gemini'));
messages.push(new Message('Grace', 7, 'July', 'Cancer'));
messages.push(new Message('Hannah', 5, 'August', 'Leo'));
messages.push(new Message('Ian', 22, 'September', 'Virgo'));

messages[0].displayProperties()

console.log(messages[0].generateMessage())
console.log(messages[1].generateMessage())
console.log(messages[2].generateMessage())
console.log(messages[3].generateMessage())
