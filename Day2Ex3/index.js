import _ from "lodash";

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// Question 1
companies.forEach((element) => {
  console.log(element.name);
});

// Question 2
companies.forEach((element) => {
  if (element.start > 1987) console.log(element.name);
});

// Question 3
console.log(_.sortBy(companies, ["end"]));

// Question 4
const age = [];

companies.forEach((element) => {
  age.push(element.end - element.start);
});
console.log(_.sortBy(age).reverse());

//  Question 5
console.log(
  _.reduce(
    age,
    function (sum, n) {
      return sum + n;
    },
    0
  )
);

// Question 6
const [company]=companies

const companyDes = (company) => {
  const { name, category } = company;
  console.log(name);
  console.log(category);
};
companyDes(company);

// Question 7
const sumArr = (...numArr) => {
  return _.reduce(
    numArr,
    function (sum, n) {
      sum += n;
      return sum;
    },
    0
  );
};

console.log(sumArr(1, 2, 3, 4, 5, 6, 7, 8, 9));

// Question 8
const addInArr = (...args) => {
  const other = _.concat(args, []);
  return other;
};

console.log(addInArr(1, 2, 3, 4, "q", "w", "", 12));

// Question 9
let num = 0;
const increament = () => {
  num += 1;
  return num;
};
console.log(increament());
console.log(increament());
console.log(increament());

// Question 10
