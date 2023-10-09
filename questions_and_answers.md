<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer:A</b></summary>
<p>

#### Answer: ?

<i>This variable are empty object which will output an empty object</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer:C</b></summary>
<p>

#### Answer: ?

<i>Passing the number 1 and a string "2" as arguments. JavaScript will perform type coercion in this case, converting the number 1 to a string and then concatenating the two strings, resulting in "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer:A</b></summary>
<p>

#### Answer: ?

<i>Afterward, update the info.favoriteFood property to this operation does not affect the original food array. Arrays and objects are separate data structures, and modifying one does not automatically affect the other.So, it will still contain the original elements</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer:B</b></summary>
<p>

#### Answer: ?

<i>In this function,defined a parameter name, but when call the function with sayHi(),it haven't provided any argument for the name parameter.so this parameter answer is undefined </i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer:C</b></summary>
<p>

#### Answer: ?

<i>In this code have an array called nums containing the values [0, 1, 2, 3] and using the forEach method to iterate over each element of the array and increment the count variable if the element is truthy.However, the condition if (num) checks if each num is truthy, and in JavaScript, 0 is considered falsy. So, when the loop encounters num with the value 0, it doesn't increment the count.It will correctly output 3 because there are three truthy elements in the nums array (1, 2, and 3).</i>

</p>
</details>
