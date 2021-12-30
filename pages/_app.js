import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import TitleReducer from '../reducer/Title.Reducer'
import Metadata from '../component/Metadata'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'

function MyApp({ Component, pageProps }) {
	return (
		<TitleReducer>
			<Metadata />
			<NavBar />
			<Component {...pageProps} />
			<Footer />
		</TitleReducer>
	)
}

export default MyApp
