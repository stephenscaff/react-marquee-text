import './style.scss'

interface DocsCodeProps {
  language?: string
  children: string
}

const DocsTable: React.FC<DocsCodeProps> = ({ language = 'tsx', children }) => {
  return (
    <section className="code-block">
      <pre className="code-block__pre">
        <code className={`code-block__code language-${language}`}>
          {children}
        </code>
      </pre>
    </section>
  )
}
export default DocsTable
