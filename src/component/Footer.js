import React from 'react'
import logo from '../images/logo.svg'
import google from '../images/googleplay.jpg'
import apple from '../images/appstore.png'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='footer-col-1'>
                        <h3>Download Our App</h3>
                        <p>Download App for Android and ios mobile phone.</p>
                        <div className='app-logo'>
                            <a href='https://www.google.com/search?q=www.google+play+store.com&oq=www.google+play+store.com&aqs=chrome..69i57j0j69i64.32821j0j9&sourceid=chrome&ie=UTF-8'><img src={google} alt='Google PlayStore' /></a>
                            <a href='https://www.google.com/search?sxsrf=ALeKk03r9b_WGyQCkQ0T6dggR8UypZGahA%3A1604786294555&ei=dhinX-K3IcOx8gKbk4rIDQ&q=www.appstore.com&oq=www.appstore.com&gs_lcp=CgZwc3ktYWIQAzICCAAyBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yAggAMgYIABAHEB4yBggAEAcQHjoECCMQJzoECAAQClD8UVj8UWDfjAFoAHAAeACAAaoOiAGUEZIBBzMtMS44LTGYAQCgAQGqAQdnd3Mtd2l6wAEB&sclient=psy-ab&ved=0ahUKEwjiypvotvHsAhXDmFwKHZuJAtkQ4dUDCA0&uact=5'><img src={apple} alt='App Store' /></a>
                        </div>
                    </div>
                    <div className='footer-col-2'>
                    <img src={logo} alt='Beach Resort' />
                        <p>Our Purpose Is To Sustainably Make Your Experience One of a LifeTime.</p>
                    </div>
                    <div className='footer-col-3'>
                        <h3>Follow us</h3>
                        <ul>
                            <li><a href='https://www.google.com/search?q=www.facebook.com&oq=www.facebook.com&aqs=chrome..69i58j69i57j5i44l4.17698j0j7&sourceid=chrome&ie=UTF-8'>Facebook</a> </li>
                            <li><a href='https://www.google.com/search?q=www.twitter.com&oq=www.twitter.com&aqs=chrome..69i58j69i57j5i44l3.16429j0j9&sourceid=chrome&ie=UTF-8'>Twitter</a></li>
                            <li><a href='https://www.instagram.com/'>Instagram</a></li>
                            <li><a href='https://www.google.com/search?q=www.youtube.com&oq=www.youtube.com&aqs=chrome..69i58j69i57j69i60l3j5i44l2j69i60.24770j0j4&sourceid=chrome&ie=UTF-8'>YouTube</a></li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <p className='copyright'>Copyright 2020 - DogoEmpire</p>
            </div>
            
        </div>
    )
}
