// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

class Robot {
    usedNames = new Set()
    constructor() {
        this.reset()
    }
    releaseNames() {
        this.usedNames.clear()
    }
    get name() {
        return this._name
    }

    reset() {
        let name = this.generateName()
        do {
            name = this.generateName()
        } while (this.usedNames.has(name))
        this.usedNames.add(name)
        this._name = name
    }

    generateName() {
        let name = this.generateChar(26, 65) +
            this.generateChar(26, 65) +
            this.generateChar(10, 48) +
            this.generateChar(10, 48) +
            this.generateChar(10, 48)
        return name
    }

    generateChar(diff, start) {
        return String.fromCharCode(Math.floor(Math.random() * diff) + start)
    }
}

Robot.releaseNames = () => { };