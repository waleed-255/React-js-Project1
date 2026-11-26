import photo from "../img1.jpg";
import mypic from "../img2.avif"
import meretasveer from "./img3.avif"

function Website2() {
    return (
        <>
            <div>
                {/* Header */}
                <header className="header">
                    <h1>Waleed Khan</h1>
                    <p>Web Developer</p>
                </header>
            </div>
            <br />
            <div>
                {/* About */}
                <section className="section">
                    <h2>About YourSelf</h2>
                    <p>Hello Mein Aptech ka Student hon , aur React seekh raha hooon</p>
                </section>
            </div>
            <br />
            {/* Contact */}
            <div>
                <section className="myclass">
                    <h3>Contact</h3>
                    <p>Waleed@gmail.com</p>
                </section>
            </div>
            <img src={photo} alt="mere-photo" className="mypic" />
            <img src={mypic} alt="" className="myphoto" />
            <img src={meretasveer} alt="mere-tasveer" className="mere-tasveer" />
            </>
        
    )
}
export default Website2;