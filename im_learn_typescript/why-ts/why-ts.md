# 타입스크립트를 써야 하는 이유

### <b>에러의 사전 방지</b>

```js
// math.js
function sum(a, b) {
  return a + b;
}

sum("10", "20"); // Error: '10'은 number에 할당될 수 없습니다.

// math.ts
function sum(a: number, b: number) {
  return a + b;
}
```

### <b>코드 자동 완성과 가이드</b>

- VS Code는 TypeScript로 작성 되어있음

```js
// math.js
function sum(a, b) {
  return a + b;
}
var total = sum(10, 20);
total.toLocaleString();
```

=> total이라는 변수의 타입이 코드를 작성하는 시점에 number 라는 것을 자바스크립트가 인지하지 못한다.

```js
function sum(a: number, b: number): number {
  return a + b;
}
var total = sum(10, 20);
total.toLocaleString();
```

=> total 이라는 변수의 타입이 number라는 점을 자바스크립트가 인지함.
