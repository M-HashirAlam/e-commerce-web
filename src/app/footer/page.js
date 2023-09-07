import React from 'react';
import "./footer.css"
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>We are the largest growing e-commerce platform with a varity of products</p>
            <p>Shop Online sitting at Home with Best Prices</p>
            <p>Get Best Deals At Discounted Rates</p>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: contact@h-cart.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>
        <div className='header3'>H-Cart</div>
        <p className="copyright">&copy; {new Date().getFullYear()} </p>
      </div>
    </footer>
  );
}

export default Footer;
