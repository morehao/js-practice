let isDone: boolean = false;

const name1: string = 'name1';

const list: number[] = [ 1, 2, 3 ];
const list1: Array<number> = [ 1, 2, 3 ];

// 元组Tuple
let tuple1: [ string, number, string | number ];
tuple1 = [ 'a', 1, 'c' ];
console.log('tuple1:', tuple1);

// 枚举enum
enum Color { Red = 1, Green, Blue };
let c: Color = Color.Green;
console.log('c:', c);

// Any类型
let notSure: any = 4;
notSure = 'maybe a string instead';
console.log('notSure:', notSure);

// Void类型表示无任何类型，当一个函数没有返回值时，其返回类型是void
function warnUser(): void {
  console.log('This is my warning message');
}

// never类型，表示无返回值或总是会抛出异常
function error(message: string): never {
  throw new Error(message);
}
function fail() {
  return error('Something failed');
}