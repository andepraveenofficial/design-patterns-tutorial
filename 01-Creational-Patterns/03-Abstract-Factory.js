// Abstract Factory

/*
Design Pattern : Abstract Factory -> Factories of Factory

Every Product has own Factory
* Create the families 
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


class Circle extends Shape{
    draw(){
        console.log("Drawing a Circle");
    }
}

class Triangle extends Shape{
    draw(){
        console.log("Drawing a Triangle");
    }
}


class ShapeFactory{
    createCircle() {
        throw new Error("This method should be overridden!");
      }
      createSquare() {
        throw new Error("This method should be overridden!");
      }
      createTriangle() {
        throw new Error("This method should be overridden!");
      }
}


// Sub Factories
class SquareFactory extends ShapeFactory{
    createSquare(){
        return new Square();
    }
}

class CircleFactory extends ShapeFactory{
    createCircle(){
        return new Circle()
    }
}

class TriangleFactory extends ShapeFactory{
    createTriangle(){
        return new Triangle();
    }
}


// Usage
const circleFactory = new CircleFactory();
const circle = circleFactory.createCircle();
circle.draw();  // Drawing a Circle

const squareFactory = new SquareFactory();
const square = squareFactory.createSquare();
square.draw();  // Drawing a Square

const triangleFactory = new TriangleFactory();
const triangle = triangleFactory.createTriangle();
triangle.draw();  // Drawing a Triangle

