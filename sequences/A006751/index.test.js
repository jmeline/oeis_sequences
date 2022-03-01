import test from "ava"
import A006751 from "./index.js"

test("A006751 passes all test cases", t => {
  const expectedResults = [
    "2",
    "12",
    "1112",
    "3112",
    "132112",
    "1113122112",
    "311311222112",
    "13211321322112",
    "1113122113121113222112",
    "31131122211311123113322112",
    "132113213221133112132123222112",
    "11131221131211132221232112111312111213322112",
    "31131122211311123113321112131221123113111231121123222112",
  ]
  const results = A006751()
  let i = 0
  while (i < expectedResults.length) {
    t.is(expectedResults[i], results.next().value)
    i++
  }
})
