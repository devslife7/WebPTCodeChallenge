class Copier {
  constructor(arg) {
    this.arg = arg
  }

  async get() {
    let promise = new Promise(resolve => {
      setTimeout(() => resolve(this.arg), 1000)
    })

    return await promise
  }

  async delete() {
    try {
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject('Cannot delete!'), 2000)
      })

      return await promise
    } catch (err) {
      return { message: err }
    }
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

const src2 = 'b'
const copier2 = new Copier(src2)
copier2.get().then(resp => console.log('dest2: ', resp))

const src3 = 'c'
const copier3 = new Copier(src3)
copier3.delete().then(resp => console.log('dest3: ', resp))
