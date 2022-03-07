import escapeHtml from 'escape-html'
import { Text } from 'slate'

const serialize = node => {
  if (Text.isText(node)) {
    let string = escapeHtml(node.text)
    if (node.bold) {
      string = `<strong>${string}</strong>`
    }
    if (node.italic) {
        string = `<i>${string}</i>`
    }
    if (node.underline) {
        string = `<u>${string}</u>`
    }
    return string
  }

  const children = node.children.map(n => serialize(n)).join('')

  switch (node.type) {
    case 'title':
        if (children === ""){
            return `<br>`;
        }
        return `<h3>${children}</h3>`
    case 'paragraph':
        if (children === ""){
            return `<br>`;
        }
        return `<p>${children}</p>`
    case 'numbered-list':
        return `<ol>${children}</ol>`
    case 'bulleted-list':
        return `<ul>${children}</ul>`
    case 'list-item':
        if (children === ""){
            return `<br>`;
        }
        return `<li>${children}</li>`
    default:
        return children
  }
}

export default serialize