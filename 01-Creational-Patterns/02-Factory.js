// Factory

/*
Design pattern : Factory

All products produced by One Factory
*/

class Shape{
    draw(){
        throw new Error("This method should be overridden!");
    }
}

class Square extends Shape{
    draw(){
        console.log("Drawing a Square")
    }
}

/*
const square = new Square();
square.draw();
*/

class Circle extends Shape{
    draw(){
    console.log("Drawing a Circle")
    }
}

/*
const circle = new Circle();
circle.draw();
*/


class Triangle extends Shape{
    draw(){
        console.log("Drawing a Triangle")
    }
}

/*
const triangle = new Triangle();
triangle.draw()
*/


class ShapeFactory{
    static createShape(shapeName){
        switch(shapeName){
            case "square":
                return new Square();
            case "circle":
                return new Circle();
            case "triangle":
                return new Triangle();   
            default:
                throw new Error("Invalid shape name");         
        }
    }
}




const square = ShapeFactory.createShape("square");
square.draw(); // Drawing a Square

const circle = ShapeFactory.createShape("circle");
circle.draw(); // Drawing a Circle

const triangle = ShapeFactory.createShape("triangle");
triangle.draw(); // Drawing a Triangle

//const dummy = ShapeFactory.createShape("dummy");  //  // Error
// triangle.draw(); 