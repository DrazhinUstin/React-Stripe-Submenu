import React from 'react';
import phone from '../images/phone.svg';

const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero-content section-center'>
                <div className='hero-content-info'>
                    <h1>Payments Infrastructure For The Internet</h1>
                    <p>
                        Millions of companies of all sizes—from startups to Fortune 500s—use
                        Stripe’s software and APIs to accept payments, send payouts, and manage
                        their businesses online.
                    </p>
                    <button className='btn'>start now</button>
                </div>
                <div className='hero-content-image'>
                    <img src={phone} alt='phone-image' />
                </div>
            </div>
        </section>
    );
};

export default Hero;
