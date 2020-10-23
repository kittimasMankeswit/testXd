import '../styles/globals.css'
import Navnar from './../layouts/_app/index'
function MyApp ({ Component, pageProps })
{
  return <div className="mobile">
    <Navnar />
    <Component {...pageProps} />
    <style jsx>{`
          .mobile
          {
            max-width:400px;
            margin:auto;
            font-family:kanit;
          }
      `}</style>
  </div>
}

export default MyApp
