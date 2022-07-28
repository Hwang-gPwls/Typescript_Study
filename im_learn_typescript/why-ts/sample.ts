function add(a: number, b: number): number {
  return a + b;
} // Error의 사전방지

// add(10, "20"); error
add(10, 20);

var result = add(10, 20);
result.toLocaleString(); //자동완성 기능 사용
