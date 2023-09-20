import { Fragment } from 'react'
import MarqueeText from '../../../src'
import './style.scss'

interface DocsMastProps {
  marquees: {
    title?: string
    direction?: 'left' | 'right'
    duration?: number
    pauseOnHover?: boolean
  }[]
}

const DocsMast: React.FC<DocsMastProps> = ({ marquees }) => {
  return (
    <section className="mast">
      <div className="grid-xl">
        <header className="mast__header">
          {marquees.map((marquee, index) => (
            <Fragment key={index}>
              <MarqueeText
                className="mast__text"
                direction={marquee.direction}
                duration={marquee.duration}
                pauseOnHover={marquee.pauseOnHover}
              >
                {marquee.title}
              </MarqueeText>
              {index !== marquees.length - 1 && (
                <div className="mast__sep"></div>
              )}
            </Fragment>
          ))}
        </header>
      </div>
    </section>
  )
}

export default DocsMast
