// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker {

    constructor (attributes) {
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    }
//Volume Method - Lives on object prototype but not a method on the object. Saves Memory.
    volume () {
        return (this.length * this.width * this.height);
  }

  //SurfaceArea Method - same `location` as Volume above

  surfaceArea () {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }

  }
  
  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
  });
  

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

//Extending CubeMaker from CuboidMaker

class CubeMaker extends CuboidMaker {
    constructor (attributes) {
        super (attributes);
    }
    //Formula for Cube Volume - only the attributes are extended, Methods aren't extended. 
    volume () {
        return (this.length * this.length * this.length);
    }
    //Formula for Cube Surface Area
    surfaceArea () {
        return 6 * (this.length * this.length) 
    }
} // end CubeMaker

//New cube made from constructor class CubeMaker
const cube = new CubeMaker({
    //A Cube has all sides equal, so
    length: 9,
});

//TEST
console.log(cube.volume()); // 729
console.log(cube.surfaceArea()); // 130