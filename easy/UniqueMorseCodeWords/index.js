/* https://leetcode.com/problems/unique-morse-code-words/description/ */

const uniqueMorseRepresentations = words => {
  const morseMap = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--.."
  }

  let uniqWords = new Set
  
  words.forEach(word => {
    const morseRepresentation = Array.from(word)
      .map(letter => morseMap[letter])
      .join("")
    uniqWords.add(morseRepresentation)
  })

  return uniqWords.size
}

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))
