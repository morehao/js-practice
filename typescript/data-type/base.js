var isDone = false;
var name1 = 'name1';
var list = [1, 2, 3];
var list1 = [1, 2, 3];
// 元组Tuple
var tuple1;
// 枚举enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log('c:', c);
