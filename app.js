const arr = [2,6,8,7,9,3,4,8,7,3]
function shuffling () {
    const result = []
    let min = 0
    let max = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === min) {
            console.log('Apres')
        } else {
            max = arr[i]
            result.push(arr[i])
            result.sort(() => Math.random() -0.5)
        }
    }
    return result
}

const a = shuffling(arr)
console.log(a)
const b = shuffling(arr)
console.log(b)
console.log(arr)