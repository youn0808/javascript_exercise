const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

//for Each

// companies.forEach(function (company) {
//     console.log(company.category);
// })



// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }

// }
// console.log(canDrink);



// // const lest = [];
// // ages.forEach(function (age) {
// //     if (age >= 21) {
// //         lest.push(age);
// //     }
// // });
// // console.log(lest);



// using filter 

// const drink = ages.filter(function (age) {
//     if (age >= 21) {
//         return true;
//     }
// })

// using arrow 
// const canDrink = ages.filter(age => {
//     if (age >= 21) {
//         return true;
//     }
// })
// console.log(canDrink)


// const retailCompanies = companies.filter(company => {
//     if (company.category === 'Retail') {
//         return true;
//     }
// })

// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);

// const eightiesCompanies = companies.filter(company => {
//     if (company.start >= 1980 && company.start < 1990) {
//         return true;
//     }
// });

// console.log(eightiesCompanies);

// const lastedTenYears = companies.filter(company => (company.end - company.start < 10));
// console.log(lastedTenYears);


// map

// creat Array of company names

// const companyNames = companies.map(company => {

// })

// const companyNameList = [];

// companies.forEach(company => {
//     companyNameList.push(company.name);
// })
// console.log(companyNameList);


// const testMap = companies.map(function (company) {
//     return `${company.name}[${company.start}-${company.end}]`;
// });
// console.log(testMap[0]);

// const testMap = companies.map(company=> {

// })

const sortedCompanies = companies.sort(function (c1, c2, c3) {
    console.log('c1');
    console.log(c1);
    console.log('c2');
    console.log(c2);


})