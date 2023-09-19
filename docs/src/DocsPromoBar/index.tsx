import MarqueeText from '../../../src'
import './style.scss'

interface DocsPromoBarProps {
  children: string
}

const DocsPromoBar: React.FC<DocsPromoBarProps> = ({ children }) => (
  <section className="docs-promo">
    <div className="docs-promo__items">
      <MarqueeText>{children}</MarqueeText>
    </div>
  </section>
)

export default DocsPromoBar
