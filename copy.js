class Copier {
  constructor(arg) {
    this.arg = arg
  }
  get() {
    return this.arg
  }
  delete() {
    return 'cannot delete'
  }

  copy() {
    return typeof this.arg === 'object' ? { ...this.arg } : this.arg
  }
}

const src = 'a'
const copier = new Copier(src)
const dest = copier.copy()
console.log('dest: ', dest)

const src1 = { a: 'b', c: { d: 'e', f: ['g', { h: 'i' }] } }
const copier1 = new Copier(src1)
const dest1 = copier1.copy()
console.log('dest1: ', dest1)
console.log('same object: ', dest1 === src1)

// console.log(copier.get())
// console.log(copier.delete())
// console.log(copier.copy())
