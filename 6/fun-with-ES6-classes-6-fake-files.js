// https://www.codewars.com/kata/5784c8116211383b5f0001d3

class File {
  _fullName;
  _filename;
  _extension;
  _contents;

  constructor(fullName, contents) {
    this._fullName = fullName;
    this._filename = this._fullName.match(/([^]+)(?=\.\w+$)/)[0];
    this._extension = this._fullName.match(/[^\\]*\.(\w+)$/)[1];
    this._contents = contents;

    this.getsCalls = this._contents.split("\n").length;
    this.wordIndex = 0;
  }

  get fullName() {
    return this._fullName;
  }

  set fullName(value) {
    return
  }

  get filename() {
    return this._fullName.match(/([^]+)(?=\.\w+$)/)[0];
  }

  set filename(newFileName) {
    return
  }

  get extension() {
    return this._fullName.match(/[^\\]*\.(\w+)$/)[1];
  }

  set extension(newExtension) {
    return
  }

  getContents() {
    return this._contents;
  }

  write(str) {
    this.getsCalls++;
    this._contents =
      this._contents.length === 0
        ? str
        : `${this._contents}\n${str}`;
  }

  gets() {
    const getSubString = () => {
      let length = this._contents.split("\n").length;
      let index = length - this.getsCalls;
      return this._contents.split("\n")[index];
    }

    if (this.getsCalls >= 0) {
      const subString = getSubString();
      this.getsCalls--;
      return subString;
    } else {
      return undefined
    }
  }

  getc() {
    if (this._contents.split("\n").length >= 0) {
      this.wordIndex++;
      return this._contents.split("")[this.wordIndex - 1]
    } else {
      return undefined;
    }
  }
}

var example = new File("example.txt", "An example file");
example.write("Hello World");
console.log(example.getContents());

console.log(example.gets());
console.log(example.gets());
console.log(example.gets());
