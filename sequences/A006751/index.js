//
// Describe the previous term!
// oeis.org/A006751
export default function* A006751() {
  let sequence = "2"
  yield sequence
  while (true) {
    const results = []
    let index = 0
    let position = 0
    while (position < sequence.length) {
      let count = 1
      while (index <= sequence.length) {
        if (sequence[index] === sequence[index + 1]) {
          count++
          index++
        } else {
          index++
          break
        }
      }
      results.push(`${count}${sequence[position]}`)
      position = index
    }

    sequence = results.join("")
    yield sequence
  }
}
