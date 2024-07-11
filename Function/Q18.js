const getSubsets = (array ,subsetLength) => {
    let result = []
    function gernateSubSets(currentSubset , start){
        if (currentSubset.length === subsetLength) {
            result.push(currentSubset.slice())
            return    
        }
        for (let i = start; i < array.length; i++) {
            currentSubset.push(array[i]);
            gernateSubSets(currentSubset , i+1)
            currentSubset.pop()
            
        }
    }

    gernateSubSets([] , 0)
    return result
}

let sampleArray = [1,2,3]
let subsetLength = 2
console.log(getSubsets(sampleArray , subsetLength));