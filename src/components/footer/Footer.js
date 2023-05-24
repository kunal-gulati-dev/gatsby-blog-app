import * as React from "react"
import footerLogo from "../../images/footer_logo.png"
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <section className="footer-section">
        <div className="marquee-container">
          <div className="product-marquee">
            <p className="product-work">
              <strong>Digital product design</strong>
            </p>
            <p className="product-work">Remote work</p>
            <p className="product-work">
              <strong>UX design</strong>
            </p>
            <p className="product-work">Distributed teams</p>
            <p className="product-work">
              <strong>Creativity</strong>
            </p>
            <p className="product-work">Strategy</p>
            <p className="product-work">
              <strong>Suspense</strong>
            </p>
            <p className="product-work">Growth</p>
          </div>
        </div>
        <div className="main-footer">
          <div className="footer-image-container">
            <img src={footerLogo} alt="" className="footer-image" />
          </div>
          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
            velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus.
          </p>
          <div className="social-links">
            <a href="">Twitter</a>
            <a href="">LinkedIn</a>
            <a href="">RSS</a>
          </div>
          <div className="copyright">
            <p>&copy; 2012-2020 Nordic Rose Co.</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
