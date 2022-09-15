

function Car(color) {
    if (!new.target) {
      // Called as function.
      return `${color} car`;
    }
    // Called with new.
    this.color = color;
  }
  
  const a = Car("red"); // a is "red car"
  const b = new Car("red"); // b is `Car { color: "red" }`