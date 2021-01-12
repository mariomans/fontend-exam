import React from 'react'

function Function3() {
    const testArray = []
    // const testArray2 = [1]
    // const testArray3 = [1,2,3]
    // const testArray4 = [1,1]
    // const testArray5 = [1,2,3,4,5,6]
    // const testArray6 = [1,5,3,2,5,10]
    // const testArray7 = [100,5,3,2,99]
    // const testArray8 = [35,5,3,2,5,100]
    // const testArray9 = [1,5,101,2,5,10]
    // const testArray10 = [10,10,9]

    function sorting(a) {
        const testArray = a;
        if (testArray[0] == null) {
            return "null"
        } if (testArray[0] != null && testArray[1] == null){
            return testArray[0]
        }
        else {
            testArray.sort((a, b) => b - a);
            return testArray[1]
        }
    }

    return (

        <div className="container">
            <h2 className="mt-5 mb-5">{sorting(testArray)}</h2>

        </div>
    )

}

export default Function3;
