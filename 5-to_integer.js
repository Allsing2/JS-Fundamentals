const [ , , raw ] = process.argv;

if (/^-?\d+$/.test(raw)) {
  const num = parseInt(raw, 10);
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}
