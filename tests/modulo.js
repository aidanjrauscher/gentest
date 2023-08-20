import { modulo } from "../math.js"

export default function testModulo(){
    const calculatedResult1 = modulo(17,3)
    const expectedResult1 = 2
    equalityCheck(1, calculatedResult1, expectedResult1)

    const calculatedResult2 = modulo(49,7)
    const expectedResult2 = 0
    equalityCheck(2, calculatedResult2, expectedResult2)

    const calculatedResult3 = modulo(13,0)
    const expectedResult3 = 0
    equalityCheck(3, calculatedResult3, expectedResult3)


    function equalityCheck(testNum, val1, val2){
        if(val1 === val2){
            console.log(`PASSED: TEST ${testNum}`)
        }
        else{
            console.log(`FAILED: TEST ${testNum}`)
        }
    }
}