export default class HolbertonCourse {
    constructor(name="", length = int, students=[]){
        this._name = name;
        this._length = length;
        this._students = students;
    }

    // set and get name
    get name(){
        return this.name;
    }
    set name(value){
        if (typeof value !== 'string'){
            throw new TypeError('Name must be a string');
        } else {
            this._name = value;
        }
    }

    // set and get length

    get length(){
        return this._length;
    }
    set length(value){
        if (typeof value !== 'int') {
            throw new TypeError('Length must be a number');
        }else {
            this._length = value;
        }
    }
    // set and get students
    get students() {
        return this._students;
    }
    set students(value) {
        value.forEach((element) => {
            if (typeof element !== 'string') {
                throw new TypeError('Students array must be strings')
            }
        });
    }
}