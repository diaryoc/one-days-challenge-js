//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
    constructor () {
        // initialize as empty
        this._roster = {};
    }

    roster() {
        // return a copy of the roster
        return structuredClone(this._roster);
    }

    add(name, grade) {
        // check for name in each grade in the roster and remove it if found
        for (const g in this._roster) {
            const index = this._roster[g].indexOf(name);
            if (index >= 0) { this._roster[g].splice(index, 1) };
        }
        // add the name to the given grade
        this._roster[grade] = [...(this._roster[grade] || []), name].sort();
    }

    grade(grade) {
        // return a copy of the grade or [] if empty
        return Array.from(this._roster[grade] || []);
    }
}