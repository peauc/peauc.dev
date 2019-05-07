import Header from './Header'
import Footer from './Footer'
const Layout = props => (
  <div id='page'>
      <Header />
      <div id='page_content'>
          {props.children}
      </div>
      <Footer />
      <style jsx >{` 
        #page_content {
            border: 1px solid #DDD;
            padding-left: 20px;
        }
    `}</style>
      <style jsx global> {`
        html, body {
          height: 100%;
          margin: 0;
        }
      `}</style>
  </div>
);

export default Layout

