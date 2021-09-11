let colorSelected = document.getElementById('colors')
let value = ''


colorSelected.addEventListener('change', () => {
  value = colorSelected.options[colorSelected.selectedIndex].value;
  readFile('data.txt', value)
})


/* takes the tableID from the HTML, the array to make into a table, and 
 * the number of columns you desire, and creates a table in the DOM
 */
const buildTable = (tableID, dataArray, numberOfCols) => {

  // create a table in the DOM
  let table = document.getElementById(tableID)
  table.innerHTML = ''
  document.body.style.backgroundColor = value

  // loop through the names, create a numbered list item for each of the names
  // set vars for table setup
  let idx = 0
  let numCols = numberOfCols
  let numRows = Math.ceil(dataArray.length / numCols)
  console.log(`Table: Rows = ${numRows}, Columns = ${numCols}`)

  // loop to populate table
  for (let r = 0; r < numRows; r++) {
    let tr = table.insertRow()
    for (let c = 0; c < numCols; c++) {
      let td = tr.insertCell()
      idx < dataArray.length ? td.innerHTML = dataArray[idx] : td.innerHTML = ""
      tr.appendChild(td)
      idx++
    }
  }
}

// reads a text file and returns it as a string, then splits into array of information, then builds the table and header
const readFile = (fileNameAsString, colorAsString) => {
  let txt = 'File not converted to String';
  let splitTxt;
  let colorArray = [];
  let colorSortedNamesArray = [];

  fetch(fileNameAsString)
    .then(res => res.text()) // return file as string
    .then(str => txt = str) // set txt to value of string
    .then(() => splitTxt = txt.split('\n\n')) // divide information groupings into an array
    .then(() => {

      // isolate color matches
      splitTxt.map(element => { // .filter(0 is a more direct way of doing this, returns new array)
        if (element.includes("Color:" + colorAsString)) {
          colorArray.push(element)
        }
      })

      // log result
      // console.log(colorArray)

      // add name of persons to the colorSortedNamesArray
      colorArray.forEach(element => {
        colorSortedNamesArray.push(element.substring(element.indexOf('Name:') + 5, element.indexOf('Company:') - 1))
      })
      colorSortedNamesArray = colorSortedNamesArray.sort()

      // build the table
      buildTable('names', colorSortedNamesArray, 3)

      // creates an h3 in the DOM for the color searched
      document.getElementById('listColor').innerHTML = "TEAM " + colorAsString.toUpperCase()

    })
}


