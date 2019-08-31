try {
  throw new Error("Deu ruim no Try.");
}
catch (ex) {
  console.error("Ops, erro:", ex.message);
}
finally {
  console.log("Finalizou!");
}
