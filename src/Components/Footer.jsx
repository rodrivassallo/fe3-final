import "../Styles/footer.css"


const Footer = () => {
  return (
    <footer>
    <div className='footer-by'><p>Desarrollado por: COOLSTAR SA</p></div> 
      <div className='footer-logo-and-icons'>
        <div>
          <a href="/#"><img className='footer-icons' src="/images/ico-facebook.png" alt="" /></a>
          <a href="/#"><img className='footer-icons' src="/images/ico-instagram.png" alt="" /></a>
          <a href="/#"><img className='footer-icons' src="/images/ico-whatsapp.png" alt="" /></a>
          <a href="/#"><img className='footer-icons' src="/images/ico-tiktok.png" alt="" /></a>
        </div>
    </div>
</footer>
  )
}

export default Footer