import fs from 'fs';
import readline from 'readline';

function translateLine(line) {
  line = line.trim();
  if (line.startsWith("bhai bol")) return `console.log(${line.slice("bhai bol".length).trim()})`;
  else if (line.startsWith("bhai agar")) return `if (${line.slice("bhai agar".length).trim().replace(/-> \(\)$/, '')}) {`;
  else if (line.startsWith("work")) return `function ${line.slice("work".length).trim().replace(/-> \(\)$/, '')} {`;
  else if (line === ")") return "}";
  else if (line === '/)') return ")";
  else if (line.includes('work')) return line.replace(/work\s*(\([^)]*\))\s*->\s*(\(|)/, (match, params, brace) => brace === '(' ? `function ${params} {` : `function ${params} return`);
  else return line;
}

function print(...args) { console.log(...args); }

function sum(obj, ...args) {
  if (obj.type === "integer") return [...args].reduce((acc, val) => acc + val, 0);
  else if (obj.type === "string") return args.join(obj.join || "");
  else if (obj.type === "object") return args.reduce((acc, obj) => ({ ...acc, ...obj }), {});
  else if (obj.type === "array") return args.concat(args);
}

class List {
  constructor(initial = []) { if (!Array.isArray(initial)) throw new TypeError("List must be initialized with an array or nothing."); this.items = [...initial]; }
  get size() { return this.items.length; }
  add(item) { this.items.push(item); }
  remove(index) { this.items = this.items.filter(item => item.id !== index); }
  includes(item) { return this.items.includes(item); }
  find(index) { return this.items[index]; }
  indexof(item) { return this.items.indexOf(item); }
  print() { console.log(this.items); }
  multiply(n) { this.items = this.items.map(item => item * n); return this.items; }
  multiplyLength(n) { if (!Number.isInteger(n) || n < 1) throw new RangeError("multiplyLength(n): n must be a positive integer."); this.items = [...Array(n)].flatMap(() => this.items); }
  uniqify() { return this.items = [...new Set(this.items)]; }
  clear() { this.items = []; }
}

const π = Math.PI;
const get_decimal = (number, places) => Number(Number(number).toFixed(places));
const Amath = {
  "∑": sum,
  "π": π,
  "!n": (n) => { if (n < 0) throw new RangeError("Factorial is not defined for negative numbers"); if (n === 0 || n === 1) return 1; let result = 1; for (let i = 2; i <= n; i++) result *= i; return result; },
  "√": Math.sqrt,
  "²": (x) => x * x,
};




const readingThefile = async (fileName) => {
  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
    crlfDelay: Infinity
  });

  const results = [];

  for await (let line of rl) {
    line = line.trim();

    if (line.startsWith("<authoi?>")) {
      results.push("\n")
    }else if (line.startsWith("bhai bol")) {
      const toPrint = line.slice("bhai bol".length).trim();
      results.push(`console.log(${toPrint})`);
    } else if (line.startsWith("bhai agar")) {
      let condition = line.slice("bhai agar".length).trim();
      if (condition.endsWith("-> (")) {
        condition = condition.slice(0, -4).trim();
      }
      results.push(`if (${condition}) {`);
    } else if (line.startsWith("work")) {
      let funcPart = line.slice("work".length).trim();
      funcPart = funcPart.replace(/\s*->\s*\($/, "").trim();
      results.push(`function ${funcPart} {`);
    } else if (/^\s*(int|char|float|str)\s+([A-Za-z_]\w*)(\s*=\s*[^;]+)?\s*;?$/.test(line)) {
      const match = line.match(/^\s*(int|char|float|str)\s+([A-Za-z_]\w*)(?:\s*=\s*([^;]+))?\s*;?$/);
      const type = match[1];
      const name = match[2];
      const value = match[3] ? match[3].trim() : null;
      results.push(`const ${name} = { type: '${type}', value: ${value ?? 'null'} };`);
    } else if (line === ")") {
      results.push("}");
    } else if (line === "/)") {
      results.push(")");
    } else if (/std:write\s*>\s*>\s*(.*?)\s*>\s*>\s*std:end/.test(line)) {
      const text = line.match(/std:write\s*>\s*>\s*(.*?)\s*>\s*>\s*std:end/)[1];
      results.push(`process.stdout.write(${text})`);
    } else if (/authoi:returner\s*>\s*>\s*(.*?)\s*>\s*>\s*:end/.test(line)) {
      const returned_content = line.match(/authoi:returner\s*>\s*>\s*(.*?)\s*>\s*>\s*:end/)[1];
      results.push(`return ${returned_content} `);
    } else if (line.includes("work")) {
      results.push(
        line.replace(/work\s*(\([^)]*\))\s*->\s*(\(|)/, (match, params, brace) => {
          if (brace === "(") {
            return `function ${params} {`;
          } else {
            return `function ${params} return`;
          }
        })
      );
    } else {
      results.push(line);
    }
  }

  return results;
};




async function programultra(fileName) {
  const translatedLines = await readingThefile(fileName);

  const fullCode = translatedLines.join("\n");

  eval(fullCode);
  console.log("\n **********Code Executed************");
}

function agar(obj) {
  if (obj.condition) {
    return obj.thenreturn
  }
  return object.return
}



function program(codeLines) {
  const translatedLines = codeLines.map(line => translateLine(line)).filter(line => line !== "");

  const fullCode = translatedLines.join("\n");

  eval(fullCode)
  console.log("**********Code Executed************")
}






export { List, program, print, sum, programultra, Amath, π, get_decimal };