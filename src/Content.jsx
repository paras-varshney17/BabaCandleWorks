import About from "./About";
import ContactForm from "./ContactForm";
import Products from "./Products";
import Hero from "./Hero";
function Content({aboutref,contactref,productref}){
    return (
        
        <div className="grow">
            <Hero contactref={contactref} productref={productref}/>
            <About aboutref={aboutref}/>
            <Products productref={productref}/>
            <ContactForm contactref={contactref} />
        </div>
    );
}

export default Content;
