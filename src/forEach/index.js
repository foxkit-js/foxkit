export function forEach(subject, callback) {
  if (typeof subject !== "object" && typeof subject !== "string") return;

  let self;
  if (typeof subject === "string") self = subject.split("");
  else if (subject instanceof Array) self = subject;
  else self = Object.entries(subject);

  // loop plain object
  if (typeof subject === "object" && !(subject instanceof Array)) {
    for (let i = 0; i < self.length; i++) {
      const ret = callback(self[i][1], self[i][0], subject);
      if (ret === false) break;
    }
    return;
  }

  // loop array or split string
  for (let i = 0; i < self.length; i++) {
    const ret = callback(self[i], i, subject);
    if (ret === false) break;
  }
}
