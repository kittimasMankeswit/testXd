import Head from 'next/head'
import Tab from '../Components/tab'

export default function Home ()
{
  return (
    <div className="mobile">
      <Tab />
      <style jsx>{`
          .mobile
          {
            max-width:400px;
            margin:auto;
            height: 90vh;
            box-shadow: 0px 3px 6px rgba(0,0,0, 0.16);
            border-radius: 4px;
          }
      `}</style>

    </div>
  )
}
