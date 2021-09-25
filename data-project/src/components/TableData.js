const TableData = () => {
    let color = 'yellow'

    const processDataFile = () => {
        fetch('./dataFile.txt')
        .then((res) => res.text())
        .then((txt) => txt.split("\n\n"))
        .then((splitText) => splitText.filter((element) => element.includes('Color:' + color)))
        .then((result) => result.map((element) => {
            return element.substring(element.indexOf('Name:') + 5, element.indexOf('Company:') - 1)
        }))
        .then((generatedList) => console.log(generatedList))
    }
    
    let colorGroup = processDataFile()


    return (
        <div>
            <h3 id="listColor">Yellow Group</h3>

            <div>
                <h1>{ colorGroup }</h1>
            </div>

        </div>
    )
}

export default TableData
