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
      <DocsMast marquees={data.mast.marquees} />
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
import 'MarqueeText/styles.css' // may not be required depending on your bundle config

function SomeComponent() {
  return (
    <h1>
      <MarqueeText>
        This text will be staggered by word
      </MarqueeText>
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
          <h5 className="docs__subtitle">Provide options</h5>
          <DocsCode language="tsx">
            {`<MarqueeText
  direction='left'
  duration={50}
  pauseOnHover={true}
>
 Here's and instance with some options ya'll
</StaggerText>
`}
          </DocsCode>

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
