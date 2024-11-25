// Singleton

/*
Design Pattern : Singleton

* A class maintains only one single instance.
Description : Ensure a class has only one instance and provide a global point of access to it.
*/

// Design Pattern
class Singleton{
    constructor(){
        if (Singleton.instance) {
            return Singleton.instance;
          }
        this.data = [];  // This is Global store
        Singleton.instance = this;
    }

     // Static method ensures getInstance can be called without an instance.
    static getInstance(){
        return Singleton.instance || new Singleton()     
    }

    display(){
        return Singleton.instance.data
    }

    append(item){
        Singleton.instance.data.push(item);
    }
}

// Instances Usage
const instance1 = Singleton.getInstance();
console.log(instance1.display());
instance1.append("data1")
console.log(instance1.display());

const instance2 = Singleton.getInstance();
console.log(instance2.display());
instance2.append("data2")
console.log(instance2.display())

console.log("------------")
