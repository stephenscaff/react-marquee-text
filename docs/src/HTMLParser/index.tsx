import React from 'react'

interface HTMLParserProps {
  html: string
}

const tagRenderers = {
  P: ({ children }) => <p>{children}</p>,
  STRONG: ({ children }) => <strong>{children}</strong>,
  S: ({ children }) => <s>{children}</s>,
  EM: ({ children }) => <em>{children}</em>,
  CODE: ({ children }) => <code>{children}</code>,
  UL: ({ children }) => <ul>{children}</ul>,
  LI: ({ children }) => <li>{children}</li>
  // Add more tag renderers as needed
}

const HTMLParser: React.FC<HTMLParserProps> = ({ html }) => {
  const parseHTML = (htmlString) => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlString, 'text/html')
    return doc.body
  }

  const parsedHTML = parseHTML(html)

  const renderNode = (node, index) => {
    const { nodeName, nodeValue, childNodes } = node

    if (nodeName === '#text') {
      return nodeValue
    }

    const TagRenderer = tagRenderers[nodeName] || 'span'

    return (
      <TagRenderer key={`${nodeName}-${index}`}>
        {childNodes && Array.from(childNodes).map(renderNode)}
      </TagRenderer>
    )
  }

  return <>{parsedHTML && Array.from(parsedHTML.childNodes).map(renderNode)}</>
}

export default HTMLParser
