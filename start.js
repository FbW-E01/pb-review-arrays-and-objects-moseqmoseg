///1
const array1 = ["String 1", "string 2", "String 3"];
///2
const array2 = ["String stringy", 56, 5 > 0];
///3
const array3 = [
    [],
    [],
    []
];
const object1 = {};
///5
const object2 = { id: "", email: "", password: "" };
///6
const array4 = [
    { height: 45, width: 56 },
    { height: 45, width: 56 },
    { height: 45, width: 56 },
];
///7
const object3 = {
    Name: "Tito",
    Food: ["tacos", "enchiladas", "burritos"],
    date: { day: 2, month: 3, year: 2021 },
};
///8
console.log(typeof array1);
///9
console.log(typeof object1);
///10
const array5 = ["chico", "loco", "larry", "cura", 57];
////10.1
array5.push(67);
////10.2
array5.unshift("snoochy");
////10.3
array5.pop();
////10.4
console.log(array5.length);
////10.5
array5.pop();
console.log(array5);
array5.splice(1, 1);