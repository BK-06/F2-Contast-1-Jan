/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap(arr) {
  //Write your code here
  arr.map((item) => {
    if (item.profession === "developer") {
      console.log(item.name);
    }
  });
  // if((arr[0].profession) === 'developer'){
  //     console.log(arr[0].name);
  // }
}
PrintDeveloperswithMap(arr);

function PrintDeveloperbyForEach(arr) {
  //Write your code here
  arr.forEach((item) => {
    if (item.profession === "developer") {
      console.log(item.name);
    }
  });
}
PrintDeveloperbyForEach(arr);

function addData(arr) {
  //Write your code here
  arr.push({ id: 4, name: "susan", age: "20", profession: "intern" });
  console.log(arr);
}
addData(arr);

function removeAdmin(arr) {
  //Write your code here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].profession === "admin") {
      arr.splice(i, 1);
    }
  }
  console.log(arr);
}
removeAdmin(arr);

function concatenateArray(arr) {
  //Write your code here
  let arr2 = [
    { id: 5, name: "kiran", age: "18", profession: "developer" },
    { id: 6, name: "balu", age: "20", profession: "developer" },
    { id: 7, name: "raj", age: "19", profession: "admin" },
  ];
  console.log(arr.concat(arr2));
}
concatenateArray(arr);
