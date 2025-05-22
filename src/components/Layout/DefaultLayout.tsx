import Footer from "../Footer/Index";
import Header from "../Header/Header";

type DefaultLayoutProps = {
    children: React.ReactNode;
};

const DefaultLayout = ({children} : DefaultLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Header/>
        {children}
      <Footer /> 
    </div>
  )
}

export default DefaultLayout
