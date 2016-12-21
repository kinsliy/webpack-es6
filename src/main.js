var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    document.write(i);
  };
}
a[6](); 