const XLSX = require("xlsx");
const fs = require("fs");

const workbook = XLSX.readFile("2.약국정보서비스 2025.3.xlsx");
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(sheet);

const pharmacies = data
  .filter(row => row["좌표(X)"] && row["좌표(Y)"])
  .map(row => ({
    name: row["요양기관명"],
    address: row["주소"],
    phone: row["전화번호"],
    lat: Number(row["좌표(Y)"]),
    lng: Number(row["좌표(X)"]),
  }));

const output =
  "export const pharmacies = " +
  JSON.stringify(pharmacies, null, 2) +
  ";";

fs.writeFileSync("pharmacies.js", output, "utf-8");

console.log("pharmacies.js 생성 완료");
