// return contents of .txt file as a string
const readFile = (fileNameAsString, colorAsString) => {
  let txt = 'File not converted to String';
  let splitTxt;
  let colorArray = [];
  let colorSortedNamesArray = [];

  fetch(fileNameAsString)
    .then(res => res.text()) // return file as string
    .then(str => txt = str) // set txt to value of string
    .then(() => splitTxt = txt.split('\n\n')) // divide information groupings
    .then(() => {

      // isolate color matches
      splitTxt.map(element => { // .filter(0 is a more direct way of doing this, returns new array)
        if (element.includes("Color:" + colorAsString)) {
          colorArray.push(element)
        }
      })

      // log result
      console.log(colorArray)

      // add name of person to the colorSortedNamesArray
      colorArray.forEach(element => {
        colorSortedNamesArray.push(element.substring(element.indexOf('Name:') + 5, element.indexOf('Company:') - 1))
      })

      // create a numbered list on the DOM
      let list = document.getElementById('names')

      // loop through the names, create a numbered list item for each of the names
      colorSortedNamesArray.forEach(element => {
        let li = document.createElement('li');
        li.textContent = element;
        list.appendChild(li);
      })

      // creates an h3 in the DOM for the color searched
      let colorAsCaps = colorAsString.toUpperCase()
      document.getElementById('listColor').innerHTML = colorAsCaps

      // adds the list items to the list in the DOM
      // document.getElementById('names').appendChild(list)
    })
}

readFile('data.txt', 'red')







//////////////////////////////
/* example of how to convert an object to a JSON file */

// var testObj = {
//     Name:Jason,
//     age: 40,
//     ft: 5,
//     in: 8
// }

// var jsonObj = JSON.stringify(testObj)
// console.log(jsonObj)