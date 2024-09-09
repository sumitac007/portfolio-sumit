import './styles.css'
import image from '../assets/images/react-js-icon.png'

export default function App() {
  return (
    <>
      <h1>
        Hello World! -{' '}
        {
          // eslint-disable-next-line no-undef
          process.env.NODE_ENV
        }
      </h1>
      <img src={image}></img>
    </>
  )
}
