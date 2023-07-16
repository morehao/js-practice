const moduleObj = {
  x: 42,
  getX: function(y) {
    if (y) {
      return this.x + y;
    } else {
      return this.x;
    }
  }
};

const unboundGetX = moduleObj.getX();
console.log(unboundGetX); // 42

const bindGetX = moduleObj.getX.apply(moduleObj, [1]);
console.log(bindGetX); // 43
