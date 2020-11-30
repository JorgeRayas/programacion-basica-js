var agregado = "";
for (let index = 1; index <= 100; index++) {
  if (index % 3 == 0) {
    agregado = "fizz";
  }
  if (index % 5 == 0) {
    agregado += "buzz";
  }

  document.write(index + ".- " + agregado + "<br>");
  agregado = "";
}
