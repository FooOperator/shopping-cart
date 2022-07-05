import useAuth0 from '@auth0/auth0-react/src/use-auth0'
import { Article } from '../../components/Article'
import { LoginButton } from '../../components/AuthButtons'

const Home = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <>
      <Article textAlign='center'>
        <h1>Welcome To Ecommerce</h1>
        <h2>A bunch of text</h2>
        <p>
          More paragraphs, more texts
          More paragraphs, more texts
          More paragraphs, more texts
          More paragraphs, more texts
        </p>
        <p>
          More paragraphs, more texts
          More paragraphs, more texts
          More paragraphs, more texts
          More paragraphs, more texts
          More paragraphs, more texts
        </p>
        <LoginButton />
      </Article>
    </>
  )
}

export default Home;