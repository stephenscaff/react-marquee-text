// @ts-no-check
import DocsMast from './DocsMast'
import Docs from './Docs'
import DocsCode from './DocsCode'
import DocsTable from './DocsTable'
import DocsFooter from './DocsFooter'
import DocsHeader from './DocsHeader'
import DocsPromoBar from './DocsPromoBar'
import HTMLParser from './HTMLParser'
import data from './data/content.json'

export default function App() {
  return (
    <>
      {/* @ts-ignore */}
      <DocsPromoBar>
        <div>React MarqueeText</div>
        <div>●</div>
        <div>TS Componnent</div>
        <div>●</div>
        <div>Let's Go</div>
        <div>●</div>
      </DocsPromoBar>
      <DocsHeader />
      <DocsMast />
      <main>
        <Docs>
          <p>{data.intro.lead}</p>

          <h2 id={data.features.id} className="docs__title">
            {data.features.title}
          </h2>
          <ul className="docs-list">
            {data.features.items.map((item, index) => (
              <li key={'docs-list' + index}>
                <HTMLParser html={item} />
              </li>
            ))}
          </ul>

          <h2 className="docs__title">{data.quickStart.title}</h2>

          <p>{data.quickStart.install}</p>
          <DocsCode language="tsx">{`npm install react-marquee-text`}</DocsCode>

          <p className="docs__description">
            <HTMLParser html={data.quickStart.use} />
          </p>

          <DocsCode language="tsx">
            {`import MarqueeText from "react-marquee-text"

function SomeComponent() {
  return (
    <h1>
      <StaggerText>
        This text will be staggered by word
      </StaggerText>
    </h1>
  )
}
`}
          </DocsCode>
          <h2 id={data.options.id} className="docs__title">
            {data.options.title}
          </h2>
          <DocsTable options={data.options.optionsTable} />

          <h2 id={data.useage.id} className="docs__title">
            {data.useage.title}
          </h2>
          <h5 className="docs__subtitle">Stagger by letter</h5>
          <DocsCode language="tsx">
            {`<StaggerText
  staggerType='letter'
  staggerDuration={0.4}
  startDelay={0.04}
>
 Let's go ahead and stagger this by letter.
</StaggerText>
`}
          </DocsCode>

          <h5 className="docs__subtitle">Stagger with extended start delay</h5>
          <DocsCode language="tsx">{`<StaggerText
  staggerType='letter'
  staggerDuration={0.4}
  startDelay={0.04}
  startDelay={500}
>
 Let's go ahead and stagger this by letter with a start delay.
</StaggerText>`}</DocsCode>

          <h5 className="docs__subtitle">Stagger with custom easing</h5>
          <DocsCode language="tsx">{`<StaggerText
  staggerType='letter'
  staggerEasing='cubic-bezier(0.4, 0, 0.2, 1)'
>
 Stagger this text with custom easing
</StaggerText>`}</DocsCode>

          <h5 className="docs__subtitle">Stagger with callback</h5>
          <DocsCode language="tsx">{`const handleStaggerEnd = () => {
  console.log('sup ya'll, i'm dun')
}

<StaggerText
  onStaggerComplete={handleStaggerEnd}
>
  Stagger this text, then let em know
</StaggerText>`}</DocsCode>

          <h5 className="docs__subtitle">
            Sequentially start stagger instances
          </h5>
          <DocsCode language="tsx">{`// Some data with titles and config
const lines = [
  {
    title: "Stagger this first line by word",
    staggerType: "word",
    staggerDelay: 0.09,
    staggerDuration: 0.7
  },
  {
    title: "And, stagger this line by letter after the first.",
    staggerType: "letter",
    staggerDelay: 0.04,
    staggerDuration: 0.4,
    startDelay: 300
  }
  // etc
]

// Component
import { useState } from 'react'

const StaggeredTextLines: React.FC<Props> = (lines) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Callback handler
  const handleStaggerComplete = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1)
  }

  return (
    {lines.map((line, index) => (
      <StaggerText
        key={index}
        onStaggerComplete={
          index === currentIndex ? handleStaggerComplete : null
        }
        shouldStart={index === currentIndex}
        startDelay={line.startDelay}
        staggerType={line.staggerType}
        staggerDuration={line.staggerDuration}
        staggerDelay={line.staggerDelay}
      >
        {line.title}
      </StaggerText>
    }
  )
}
`}</DocsCode>

          <h2 id={data.notes.id} className="docs__title">
            {data.notes.title}
          </h2>

          {data.notes.items.map((item, index) => (
            <div key={'docs-item' + index} className="docs-item">
              <h5 className="docs-item__title">{item.title}</h5>
              <HTMLParser html={item.content} />
            </div>
          ))}

          <h2 id={data.todos.id} className="docs__title">
            {data.todos.title}
          </h2>
          <ul className="docs-list">
            {data.todos.items.map((item, index) => (
              <li key={'docs-list' + index}>
                <HTMLParser html={item} />
              </li>
            ))}
          </ul>
        </Docs>
      </main>
      <DocsFooter />
    </>
  )
}
