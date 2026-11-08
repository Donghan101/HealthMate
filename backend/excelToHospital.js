const XLSX = require("xlsx");
const fs = require("fs");

const workbook = XLSX.readFile("1.병원정보서비스 2025.3.xlsx");
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(sheet);

const hospitals = data
  .filter(row => row["좌표(X)"] && row["좌표(Y)"])
  .map(row => ({
    name: row["요양기관명"],
    address: row["주소"],
    phone: row["전화번호"],
    lat: Number(row["좌표(Y)"]),
    lng: Number(row["좌표(X)"]),
  }));

const output =
  "export const hospitals = " +
  JSON.stringify(hospitals, null, 2) +
  ";";

fs.writeFileSync("hospitals.js", output, "utf-8");

console.log("hospitals.js 생성 완료");
