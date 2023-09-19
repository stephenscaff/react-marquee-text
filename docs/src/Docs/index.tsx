import { ReactNode } from 'react'
import './style.scss'

interface DocsProps {
  children: ReactNode
}

const Docs: React.FC<DocsProps> = ({ children }) => (
  <section className="docs">
    <div className="grid">{children}</div>
  </section>
)

export default Docs
