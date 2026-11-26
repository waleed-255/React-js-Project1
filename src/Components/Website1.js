import './Website1.css';
function Website4() {
    return (
        <div className="gym">
            <nav className="navbar">
                <h2 className="logo">IRON<span>FIT</span></h2>
                <div>
                    <a href="#home">Home</a>
                    <a href="#programs">Programs</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#join" className="join-btn">Join Now</a>
                </div>
            </nav>

            {/* Hero */}
            <section id="home" className="hero">
                <p className="small">KARACHI'S BEST GYM</p>
                <h1>BUILD YOUR BODY.<br /><span>BREAK YOUR LIMITS.</span></h1>
                <p className="sub">Expert Trainers, Modern Equipment</p>
                <a href="#pricing" className="button">Start Today</a>
            </section>

            {/* Numbers */}
            <section className="stats">
                <div>
                    <h2>500+</h2>
                    <p>Members</p>
                </div>
                <div>
                    <h2>20</h2>
                    <p>Trainers</p>
                </div>
                <div>
                    <h2>10+</h2>
                    <p>Years of Experience</p>
                </div>
            </section>

            {/* Programs */}
            <section id="programs" className="section">
                <h2 className="title">Our Programs</h2>
                <div className="cards">
                    <div className="card">
                        <h1>🏋️</h1>
                        <h3>Strength</h3>
                        <p>Build muscle and increase strength.</p>
                    </div>
                    <div className="card">
                        <h1>🏃</h1>
                        <h3>Cardio</h3>
                        <p>Burn fat and increase stamina.</p>
                    </div>
                    <div className="card">
                        <h1>🧘</h1>
                        <h3>Yoga</h3>
                        <p>Keep your body flexible and your mind relaxed.</p>
                    </div>
                </div>
            </section>
            {/* 5.pricing */}
            <section id='pricing' className='section dark2'>
                <h2 className='title'>Membership Plans</h2>
                <div className='cards'>
                    <div className='card'>
                        <h3>Basic</h3>
                        <p className='price'>Rs 3,000</p>
                        <p>Gym Access</p>
                        <p>Locker Room</p>
                    </div>
                    <div className='card popular'>
                        <h3>Pro</h3>
                        <p className='price'>Rs 5,000</p>
                        <p>Gym + Cardio</p>
                        <p>Trainer support</p>
                    </div>
                    <div className='card'>
                        <h3>Elite</h3>
                        <p className='price'>Rs 8,000</p>
                        <p>All programs</p>
                        <p>Diet Plan</p>
                    </div>
                </div>
            </section>

            {/* 6. join */}
            <section id='join' className='join '>
                <h2>Start today!</h2>
                <p>First day is completely free. Call us: 0300-1234567</p>
            </section>
            {/* 7.footer */}
            <footer className='footer'>
             <p>© 2026 IronFit Gym | Scheme 33 , Karachi</p>
            </footer>
        </div>
    );
}

export default Website4;
