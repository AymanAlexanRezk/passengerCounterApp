let count = document.querySelector('.count');
count.textContent = 0;
// console.log(count);

const increment = document.querySelector('.increment');
const save = document.querySelector('.save');
const entries = document.querySelector('.entries');

increment.addEventListener('click', function () {
  count.textContent++;
});

/*
  const prevEntries = [];

  save.addEventListener('click', function () {
    prevEntries.push(count.innerText);
    count.innerText = 0;
    let results = prevEntries.join(' - ');
    // let results = prevEntries.map((entry) => `${entry}`);
    console.log(results);
    entries.innerText = results;
  });
*/

save.addEventListener('click', function () {
  // let results = count.textContent + ' - ';
  let results = count.textContent.concat(' - ');
  entries.textContent += results;
  count.textContent = 0;
});
