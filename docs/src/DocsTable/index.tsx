import HTMLParser from '../HTMLParser'
import './style.scss'

interface TableType {
  id: string
  option: string
  type: string
  description: string
  default: string
}

interface DocsTableProps {
  options: TableType[]
}

const DocsTable: React.FC<DocsTableProps> = ({ options }) => {
  // const renderCode = (html: string) => {
  //   return <code dangerouslySetInnerHTML={{ __html: html }} />
  // }
  return (
    <section className="docs-table">
      <table className="docs-table__table">
        <thead>
          <tr>
            <th>Option</th>
            <th>Type</th>
            <th>Description</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          {options.map((option) => (
            <tr key={option.id}>
              <td>
                <HTMLParser html={option.option} />
              </td>
              <td>
                <HTMLParser html={option.type} />
              </td>
              <td>{option.description}</td>
              <td>
                <HTMLParser html={option.default} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default DocsTable
