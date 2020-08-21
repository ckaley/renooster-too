export const splitArray = arr => {
    // calculate half array length
    const half = Math.ceil(arr.length / 2)

    // split array into halves
    const firstHalf = arr.splice(0, half)
    const secondHalf = arr.splice(-half)

    // return two dimensional array
    return [firstHalf, secondHalf]
}
