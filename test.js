const ar = [{ name: "" }, { name: "" }, { name: "" }, { name: "" }];

const a = () => {
  console.log("A");
  b();
  return "test";
};

const b = () => {
  const ner = "";
  console.log("B");
};

// a();
console.log("click", a());
