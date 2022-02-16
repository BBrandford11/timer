const args = process.argv.slice(2);

const positiveArgs = args.filter((time) => time > 0);
for (let i = 0; i < positiveArgs.length; i++) {
  if (positiveArgs.length === 0) {
    break;
  }

  setTimeout(() => {
    process.stdout.write("\x07");
  }, positiveArgs[i] * 1000);
}
