function Website()
{
    return(
        <>
        <div>
      {/* Header */}
      <header className="header">
        <h1>Waleed Khan</h1>
        <p>Web Developer</p>
      </header>

      {/* About */}
      <section className="section">
        <h2>About</h2>
        <p>Main Software Engineering ka student hoon aur React seekh raha hoon.</p>
      </section>

      {/* Skills */}
      <section className="section">
        <h2>Skills</h2>
        <p>HTML, CSS, JavaScript, React</p>
      </section>

      {/* Contact */}
      <section className="section">
        <h2>Contact</h2>
        <p>waleed@example.com</p>
      </section>
    </div>
        </>
    )
}
export default Website;