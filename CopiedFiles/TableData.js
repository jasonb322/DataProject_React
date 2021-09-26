/*

Trying to get it to display the result of the list generation to the actual DOM, but unable
to do so. I can get it to log though.

Also, trying to figure out how to update this dynamically when the selector is updated.
Able to reflect the updated value in a console.log from the Selector file, but have
not yet figured out how to communicate this change to the list generator so that it
updates in real time.

Logic is working though, so I am happy about that.

*/
const TableData = () => {

    let color = 'blue'
    let colorGroup = ['Empty Array']

    // data file accessed, string created, text split by \n\n, filtered by color, mapped to display only name
    // colorGroup array assigned to hold the sorted list
    const processDataFile = () => {
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
 
    processDataFile()

    return (
        <div className="names">
            <h3 id="listColor">Yellow Group</h3>

            <div>
                
            </div>

        </div>
    )
}

export default TableData
