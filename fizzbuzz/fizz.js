var agregado = "";
for (let index = 1; index <= 100; index++) {
  agregado = index;
  if (index % 3 == 0) {
    agregado = "fizz";
  }
  if (index % 5 == 0) {
    agregado = agregado == index ? "buzz" : agregado + "buzz";
  }

  document.write(agregado + "<br>");
}
