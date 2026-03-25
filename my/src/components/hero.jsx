import "./hero.css"
function Hero(){
    return (
        <section className="hero">
        <img src="/bp.jpg" alt="logo" className="logo"/>  
        <div className="quote">
            <div className=" para"><p>"One of the world's most beautiful restaurants — a Mughal jewel box that happens to serve the finest Negroni east of Milan."</p></div>
            <p >— Condé Nast Traveller</p>
            </div> 
            <div className="title">
                <h2 className="B">Bar</h2>
                <h1 className="P">Palladio</h1>
                </div>
                <h3 className="J">Jaipur · Est. 2016</h3>
         
            <div className="divider"></div>
            <button className="btn">RESERVE TABLE</button>
        </section>
    )
}
export default Hero