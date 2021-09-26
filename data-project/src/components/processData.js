const processDataFile = (color) => {
    
    let colorGroup;
    
    fetch('./dataFile.txt')
    .then((res) => res.text())
    .then((txt) => txt.split("\n\n"))
    .then((splitText) => splitText.filter((element) => element.includes('Color:' + color)))
    .then((result) => result.map((element) => {
        return element.substring(element.indexOf('Name:') + 5, element.indexOf('Company:') - 1)
    }))
    .then((generatedList) => colorGroup = generatedList.sort())
    .then((printList) => console.log(printList))
    
}

export default processDataFile