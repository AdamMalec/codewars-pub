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

    this.getsCounter = 0;
    this.getcCounter = 0;
  }

  get fullName() {
    return this._fullName;
  }

  set fullName(value) {
    return;
  }

  get filename() {
    return this._fullName.match(/([^]+)(?=\.\w+$)/)[0];
  }

  set filename(newFileName) {
    return;
  }

  get extension() {
    return this._fullName.match(/[^\\]*\.(\w+)$/)[1];
  }

  set extension(newExtension) {
    return;
  }

  getContents() {
    return this._contents;
  }

  write(str) {
    if (this._contents.length === 0) {
      this._contents = str;
    } else {
      this._contents = `${this._contents}\n${str}`;
    }
  }

  gets() {
    if (this.getsCounter >= 0) {
      const line = this._contents.split("\n")[this.getsCounter];
      this.getsCounter++;
      return line;
    } else {
      return undefined;
    }
  }

  getc() {
    if (this._contents.split("\n").length >= 0) {
      const char = this._contents.split("")[this.getcCounter]
      this.getcCounter++;
      return char;
    } else {
      return undefined;
    }
  }
}
