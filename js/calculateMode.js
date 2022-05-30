const calculateMode = (info) => {
//create an empty object to keep track of the elemt and its count
    let obj = {}
//iterate through the input. push elements into the object. Here object key will be the info[i] and the value would be another object that contains the value and count.
//It was approached this way so the integers and floats will be logged as actual numbers and not as strings.
    for (let i = 0; i < info.length; i++) {
        if (!obj.hasOwnProperty(info[i])) {
            obj[info[i]] = {
                'value': info[i],
                'count': 1
            }
        } else {
            obj[info[i]].count += 1
        }
    } 
//iterate through the object and push the count into an empty array.
    let arrCount = []
    for (key in obj) {
        arrCount.push(obj[key].count)
    } arrCount
arrCount
//find the highgest count in the arrCount array and create and empty array for the answer
    let maxFromCount = Math.max(...arrCount)
    let answer = []

//itearte through the object keys. if the object count == highest count from maxFromCount, psu into the answer the values
    for (key in obj) {
        if (obj[key].count === maxFromCount) {
            answer.push(obj[key].value)
        }
    } return answer
}
