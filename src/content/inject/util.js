export function capitalize (word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export function execute (exes, modes) {
  for(const mode in modes) {
    if (modes.hasOwnProperty(mode)) {
      if (modes[mode]) {
        if (exes[mode]) {
          print (mode, 'mode')
          exes[mode].init()
        }
      }
    }
  }
}

export function print (item, type) {
  const p = item
    .split(/(?=[A-Z])/)
    .map(word => capitalize(word))
    .join(' ')
 console.log(`[Entered ${capitalize(type)} ${p}]`)
}

export function executeOnCreate (selector, f, ...args) {
  let element = document.querySelector(selector)
  if (element) {
    f(selector, ...args)
  } else {
    setTimeout(() => executeOnCreate(selector, f, ...args), 50)
  }
}

export function getHTML (node) {
  const parent = document.createElement('div')
  parent.appendChild(node)
  return parent.innerHTML
}

export function snakeToTitle (text) {
  return text
    .split('-')
    .map(w => capitalize(w))
    .join(' ')
}

export function removeNode (selector) {
  const node = document.querySelector(selector)
  if (node) {
    node.remove()
  }
}