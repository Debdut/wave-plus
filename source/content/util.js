function capitalize (word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

function execute (exes, modes) {
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

function logger (item, type) {
  const p = item
    .split(/(?=[A-Z])/)
    .map(word => capitalize(word))
    .join(' ')
 console.log(`[Entered ${capitalize(type)} ${p}]`)
}

function executeOnCreate (selector, f, ...args) {
  let element = document.querySelector(selector)
  if (element) {
    f(selector, ...args)
  } else {
    setTimeout(() => executeOnCreate(selector, f, ...args), 50)
  }
}

function getHTML (node) {
  const parent = document.createElement('div')
  parent.appendChild(node)
  return parent.innerHTML
}

function snakeToTitle (text) {
  return text
    .split('-')
    .map(w => capitalize(w))
    .join(' ')
}

function removeNode (selector) {
  const node = document.querySelector(selector)
  if (node) {
    node.remove()
  }
}

function objectToString (obj) {
  let str = ''
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key]) {
        str = str + snakeToTitle(key) + ' - ' + obj[key] + '\n'
      }
    }
  }
  return str
}

function parseData(str) {
  const data = {}
  const lines = str
    .trim()
    .split('\n')
    .filter(l => l.length > 0)
    .map(l => {
      const parts = l.split(' - ')
      const key = parts.shift()
      const result = parts.join(' - ')
      data[key] = result
    })
  return data
}

function stripStyles(htmlElement) {
  if (htmlElement instanceof HTMLElement) {
    htmlElement.style = ''; // Clear the style attribute
    for (let i = 0; i < htmlElement.children.length; i++) {
      stripStyles(htmlElement.children[i]); // Recursively strip styles from child elements
    }
  }
}

function removeAndMergeParagraphs(node) {
  if (node instanceof HTMLElement) {
    // Get all <p> elements within the provided node
    const paragraphs = node.querySelectorAll('p');

    paragraphs.forEach(paragraph => {
      // Get the text content of the <p> element
      const text = paragraph.textContent;

      // Replace the <p> element with a text node containing the text content
      const textNode = document.createTextNode(text);
      paragraph.parentNode.replaceChild(textNode, paragraph);
    });
  }
}