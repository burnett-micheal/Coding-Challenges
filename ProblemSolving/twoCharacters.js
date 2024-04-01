// Link: https://www.hackerrank.com/challenges/two-characters/problem

function alternate(s) {
  function TwoChar() {
    const parents = {};
    let prevChars = [];

    this.newChar = (char) => {
      for (const key in parents) {
        const parent = parents[key];
        if (!parent.badParent)
          if (parent.key === char)
            parent.endSeq();
          else
            parent.newChar(char);
      }
      if (!(char in parents)) parents[char] = new Parent(char, [...prevChars]);
      if (!prevChars.includes(char)) prevChars.push(char);
    }

    this.getLongest = () => {
      let best = null;
      let max = 0;
      for (const key in parents) {
        const parent = parents[key];
        parent.finalize();
        if (parent.length > max) {
          best = key;
          max = parent.length
        };
      }
      console.log(parents[best]);
      return max;
    }

    function Parent(key, badChars) {
      this.key = key;
      this.length = 0;
      this.badChars = badChars;
      this.badParent = false;
      let startup = true;
      let children = [];
      const sequence = [];

      const newBadChar = (char) => {
        if (!badChars.includes(char)) badChars.push(char);
        if (children.includes(char)) children.splice(children.indexOf(char), 1);
        if (sequence.includes(char)) sequence.splice(sequence.indexOf(char), 1);
      }

      this.newChar = (char) => {
        if (badChars.includes(char)) return;

        if (children.includes(char) || startup)
          if (sequence.includes(char))
            newBadChar(char);
          else
            sequence.push(char);
      };
      this.newChar.bind(this);

      this.endSeq = () => {
        if (sequence.length === 0 || (children.length === 0 && !startup)) {
          this.badParent = true;
          this.length = 0;
          return;
        }
        const newChildren = [];
        for (let i = 0; i < sequence.length; i++) {
          const char = sequence[i];
          if (children.includes(char) || startup) newChildren.push(char);
        }
        children = newChildren;
        sequence.length = 0;
        this.length += 2;
        if (startup) startup = false;
      };
      this.endSeq.bind(this);

      this.finalize = () => {
        if (children.length === 0) {
          this.badParent = true;
          this.length = 0;
          return;
        }
        if (!this.badParent)
          if (sequence.length > 0)
            this.endSeq();
          else
            this.length++;
      }
      this.finalize.bind(this);
    }

  }

  if (s.length <= 1) return 0;
  if (s.length === 2) if (s[0] !== s[1]) return 2;
  const twoChar = new TwoChar();
  for (let i = 0; i < s.length; i++) twoChar.newChar(s[i]);
  return twoChar.getLongest();
}