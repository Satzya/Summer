const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
let app = new (require('express'));
app.listen(9999, () => { });

// let abc = ['1', '2', '3'];
let abc = [1, 2, 3];


console.log(abc.filter(a => a > 1));

// console.log(companies.filter(company => company.category === 'Retail'));

// console.log('=========================================================')

// console.log(companies.filter(company => (company.start > 1979 && company.start < 1999)));

// console.log(companies.map(company => `${company.name}`));

// console.log(companies.sort((c1, c2) => c1.start > c2.start ? 1 : -1));

// console.log(abc.sort((a => a > a ? -1 : 1))); /* Reverse */

console.log(abc.reduce((total, val) => total += val, 0));

console.log(companies.reduce((total, val) => total += val.start, 0));

