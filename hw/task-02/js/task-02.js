

let student = {
    subjects: [],

    addSubject: function (subject) {
        for(const item of this.subjects) {
            if(item === subject) {
                console.log('Цей предмет вже існує в списку');
                return 'Цей предмет вже додано';
            }
        }

        this.subjects.push(subject);
        return 'Предмет додано успішно';
    },

    removeSubject: function (subject) {
        const index = this.subjects.indexOf(subject)
            if(index !== -1) {
                this.subjects.splice(index, 1)
                console.log(this.subjects);
                return `Предмет ${subject} успішно видалений`
            } else {
                return `Предмет ${subject} не знайдено`
            }
        }
    }

console.log(student.addSubject("Математика"));
console.log(student.addSubject("Історія"));
console.log(student.addSubject("Математика"));
console.log(student.subjects); // ["Математика", "Історія"]
console.log(student.removeSubject("Історія"));
console.log(student.subjects); // ["Математика"]
console.log(student.removeSubject("Англійська"));