import React from 'react'
import FooterItem from './FooterItem'

const Footer = () => {
    return (
        <ul className="list-inline py-2 mb-0">
            <FooterItem resim="assets/img/facebook.svg" />
            <FooterItem resim="assets/img/twitter.svg" />
            <FooterItem resim="assets/img/github.svg" />
            <FooterItem resim="assets/img/linkedin.svg" />
            <FooterItem resim="assets/img/telegram.svg" />

        </ul>
    )
}

export default Footer
