class Copier {
  constructor(src) {
    this.src = src
  }
  get() {
    return this.src
  }
  delete() {
    return 'cannot delete'
  }

  copy() {
    return { ...this.src }
  }
}

const copier = new Copier({ name: 'my name' })

console.log(copier.get())
console.log(copier.delete())
console.log(copier.copy())
