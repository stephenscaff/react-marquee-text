import MarqueeText from '../../../src'
import './style.scss'

interface DocsMastProps {
  pretitle: string
}

const DocsMast: React.FC<DocsMastProps> = () => {
  return (
    <section className="mast">
      <div className="grid-xl">
        <header className="mast__header">
          <MarqueeText className="mast__text" duration={30} pauseOnHover={true}>
            This is a MarqueeText a React Component written in TypeScript
          </MarqueeText>
          <div className="mast__line"></div>
          <MarqueeText
            className="mast__text"
            duration={40}
            pauseOnHover={true}
            direction="right"
          >
            Let's bring it back to the internet days of yore
          </MarqueeText>
          <div className="mast__line"></div>
          <MarqueeText className="mast__text" duration={50} pauseOnHover={true}>
            Created by Stephen Scaff for you text moving pleasure
          </MarqueeText>
          <div className="mast__line"></div>
          <MarqueeText
            className="mast__text"
            duration={30}
            pauseOnHover={true}
            direction="right"
          >
            Snag it on NPM and get that text moving
          </MarqueeText>
        </header>
      </div>
    </section>
  )
}

export default DocsMast
