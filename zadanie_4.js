let duck = {name: 'Дональд', color: 'белый', age: '1 год',
    toStr(){
        return `${this.name}, ${this.color}, ${this.age}`;
    },
    say(){
        return 'кря кря';
    } 
};

console.log(duck.toStr());
console.log(duck.say());
