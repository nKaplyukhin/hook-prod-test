import './Footer.css'

export const Footer = (props) => {
  return (
    <footer className={props.onFocus ? 'footer footer_hide' : 'footer'}>
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
          <circle cx="22" cy="20" r="12" fill="#FFB000" />
        </g>
        <path d="M22.382 13.6357L16.2729 21.2721H21.7711L21.1602 26.363L27.2693 18.7267H21.7711L22.382 13.6357Z" fill="white" />
        <defs>
          <filter id="filter0_d" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="5" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.690196 0 0 0 0 0 0 0 0 0.5 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
      </svg>
      <div className="footer__block">
        <p className="footer__text1">Delivery</p>
        <p className="footer__text2">25-30 min</p>
      </div>
      <div className="footer__block">
        <p className="footer__text1">Total:</p>
        <p className="footer__text2">£ 150.99</p>
      </div>
      <button className="footer__button">Checkout</button>
    </footer>
  )
}


