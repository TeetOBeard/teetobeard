// scripts/update-experience.js
const fs = require("fs");

const START_DATE = "2023-01-01";
const PLACEHOLDER = "{{ANOS_EXPERIENCIA}}";
const README_PATH = "README.md";

function yearsBetween(start, end) {
  const msPerYear = 1000 * 60 * 60 * 24 * 365.2425; // ano médio (mais preciso)
  return (end - start) / msPerYear;
}

const start = new Date(START_DATE);
if (Number.isNaN(start.getTime())) {
  console.error("START_DATE inválida:", START_DATE);
  process.exit(1);
}

const now = new Date();
const years = yearsBetween(start, now);

// formato: 2.3 (1 casa). inteiro: Math.floor(years)
const formatted = years.toFixed(1);

let readme = fs.readFileSync(README_PATH, "utf8");

if (!readme.includes(PLACEHOLDER)) {
  console.error(`Placeholder não encontrado no ${README_PATH}: ${PLACEHOLDER}`);
  process.exit(1);
}

readme = readme.replaceAll(PLACEHOLDER, formatted);
fs.writeFileSync(README_PATH, readme, "utf8");

console.log(`README atualizado: ${PLACEHOLDER} -> ${formatted}`);
