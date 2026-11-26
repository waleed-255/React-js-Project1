// import './Website3.css';
function Website3()
{
    return(
        <>
        <div className="gym">
      {/* 1. Navbar */}
      <nav className="navbar">
        <h2 className="logo">IRON<span>FIT</span></h2>
        <div>
          <a href="#home">Home</a>
          <a href="#programs">Programs</a>
          <a href="#pricing">Pricing</a>
          <a href="#join" className="join-btn">Join Now</a>
        </div>
      </nav>

      {/* 2. Hero */}
      <section id="home" className="hero"> 
        <p className="small">KARACHI'S BEST GYM</p>
        <h1>BUILD YOUR BODY.<br /><span>BREAK YOUR LIMITS.</span></h1>
        <p className="sub">Expert trainers, modern equipment aur ek strong community.</p>
        <a href="#pricing" className="button">Start Today</a>
      </section>    

      {/* 3. Numbers */}
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
          <h2>10</h2>
          <p>Saal ka tajurba</p>
        </div>
      </section>

      {/* 4. Programs */}
      <section id="programs" className="section">
        <h2 className="title">Hamare Programs</h2>
        <div className="cards">
          <div className="card">
            <h1>🏋️</h1>
            <h3>Strength</h3>
            <p>Muscles banayein aur taqat barhayein.</p>
          </div>   
          <div className="card">
            <h1>🏃</h1>
            <h3>Cardio</h3>
            <p>Fat burn karein aur stamina barhayein.</p>
          </div>
          <div className="card">
            <h1>🧘</h1>
            <h3>Yoga</h3>
            <p>Body flexible aur mind relax rakhein.</p>
          </div>
        </div>
      </section> 

      {/* 5. Pricing */}
      <section id="pricing" className="section dark2">
        <h2 className="title">Membership Plans</h2>
        <div className="cards">
          <div className="card">
            <h3>Basic</h3>
            <p className="price">Rs 3,000</p>
            <p>Gym access</p>
            <p>Locker room</p>
          </div>
          <div className="card popular">
            <h3>Pro</h3>
            <p className="price">Rs 5,000</p>
            <p>Gym + Cardio</p>
            <p>Trainer ki madad</p>
          </div>
          <div className="card">
            <h3>Elite</h3>
            <p className="price">Rs 8,000</p>
            <p>Sab programs</p>
            <p>Diet plan</p>
          </div>
        </div>
      </section>

      {/* 6. Join */}
      <section id="join" className="join">
        <h2>Aaj hi shuru karein!</h2>
        <p>Pehla din bilkul free. Call karein: 0300-1234567</p>
      </section>

      {/* 7. Footer */}
      <footer className="footer">
        <p>© 2026 IronFit Gym | Karachi</p>
      </footer>
    </div>
        </>
    )
    
}
export default Website3;
    
        
    


    
