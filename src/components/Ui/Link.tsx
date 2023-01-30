/* eslint-disable jsx-a11y/anchor-is-valid */
import './Link.css'

const Link = ({ text, secondary }: { text: string; secondary?: boolean }) => {
  return (
    <div className={`link ${secondary ? 'secondary' : ''}`}>
      <a href=''>{text}</a>
    </div>
  )
}

export default Link
