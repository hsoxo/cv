import React from "react"

const Footer = () => (
  <footer style={{textAlign: 'center', margin: 30}}>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org" rel="noopener noreferrer">Gatsby</a>
  </footer>
)

export default Footer
