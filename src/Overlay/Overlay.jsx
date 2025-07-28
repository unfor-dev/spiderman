import './styles.css'

export default function Overlay() {
  return (
    <div className="container">
      <div className="line line1" />
      <div className="line line2" />
      <div className="line line3" />
      <div className="line line4" />
      <div className="line line5" />
      <header>
        <div className="brand">
          <p>
            SPIDERMAN <strong>BLACK</strong>
          </p>
        </div>
        <div className='header-nav'>
          <ul>
            <li>Origins</li>
            <li>Powers</li>
            <li>Legacy</li>
          </ul>
        </div>
        <button>DISCOVER</button>
      </header>

      <div className="main-wrapper">
        <section className="section section-1">
          <video width="320" height="240" autoPlay muted loop>
            <source src="1.mp4" type="video/mp4" />
          </video>
          <video width="320" height="240" autoPlay muted loop>
            <source src="3.mp4" type="video/mp4" />
          </video>
          <video width="320" height="240" autoPlay muted loop>
            <source src="2.mp4" type="video/mp4" />
          </video>
          {/* <div className="wrapper">
            <h2>
              The Rise of <strong>Spiderman Black</strong>
            </h2>
            <p>
              Witness the transformation of Peter Parker as he bonds with the alien symbiote,
              evolving into a darker, more powerful version of himself. Experience the
              intensity of a hero who walks the line between justice and vengeance.
            </p>
          </div> */}
        </section>

        <section className="section section-2">
          <div className="wrapper">
            <h2>
              Unleashing <strong>Symbiotic Powers</strong>
            </h2>
            <p>
              The black suit enhances Spiderman’s strength, speed, and reflexes beyond
              imagination. With the symbiote’s influence, he pushes the limits of heroism—and
              wrestles with the darkness within.
            </p>
            <ul>
              <li>
                Enhanced <strong>strength and agility</strong> beyond normal limits
              </li>
              <li>
                Reactive suit with <strong>self-healing</strong> capabilities
              </li>
              <li>
                Advanced <strong>stealth and camouflage</strong> modes
              </li>
              <li>
                Inner struggle between <strong>power and control</strong>
              </li>
            </ul>
          </div>
        </section>

        <section className="section section-3">
          <div className="card-wrapper">
            <div className="card">
              <h2>90%</h2>
              <p>
                Over 90% of comic fans rate the Black Suit storyline as the most iconic and emotionally powerful in the Spiderman saga.
              </p>
            </div>
            <div className="card">
              <h2>3X</h2>
              <p>
                The black suit triples Peter's strength, reflexes, and sense precision, giving him an unmatched edge in battle.
              </p>
            </div>
          </div>
          <div className="numbers-title">
            <h2>
              POWER STATS <strong>IN NUMBERS</strong>
            </h2>
            <p>
              The Spiderman Black storyline is a turning point in comic history, redefining what it means to be a hero. It combines raw emotion, internal conflict, and explosive action like never before.
            </p>
          </div>
        </section>
      </div>

      <footer>
        <div className="footer-left">
          <h3>The darkness awakens</h3>
          <p>Will you embrace it?</p>
          <p className="copyright">Copyright © 2025. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <img src="brand.svg" width={60} />
          <ul>
            <li>Privacy policy</li>
            <li>Terms of service</li>
            <li>Cookie policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
