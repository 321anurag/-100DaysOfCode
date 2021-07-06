s = [
  "Lorem",
  "ipsum",
  " dolor",
  "sit",
  "amet",
  "consectetur",
  "adipisicing",
  "elit",
  "Eaque",
  "voluptate",
  "repellat",
  "tempora",
  "earum",
  "ad",
  "voluptatibus",
  "dignissimos",
  "Aliquid",
  "repudiandae",
  "dolorum",
  "hic",
  "harum",
  "necessitatibus",
  "cumque?",
  "Repellendus",
  "sed",
  "optio",
  "nostrum",
  "odit",
  "aut",
  "libero",
];

//array with 20 string each with odd or even length
//Filter out all even length strings
//MAp convert all string to string length
// Reduce to sum of array
// bonus utilize array.sum

s = s
  .filter((word) => word.length % 2 == 0)
  .map((word) => word.length)
  .reduce((i, item) => (i = i + item));
console.log(s);
