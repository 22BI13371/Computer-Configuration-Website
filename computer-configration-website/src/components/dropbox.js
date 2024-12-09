"use client";

import React, { useState, useEffect } from 'react';
import './dropbox.css';
import Link from 'next/link'
import picture from '@/img/pic1.jpg'
import Image from 'next/image'

const Dropbox = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropbox = () => {
        setIsOpen(prev => !prev);
    };

    const closeDropbox = () => {
        setIsOpen(false);
    };

    // Close dropbox when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('.dropbox-menu') && !event.target.closest('.dropbox-button')) {
                closeDropbox();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="relative">
            <button onClick={toggleDropbox} className="dropbox-button">
                Products
            </button>
            {isOpen && (
                <div className="dropbox-background">
                    <div className="dropbox-content">
                        <div className='dropbox-content-left'>
                            <div className="product-card">
                                <Link href={"/products/cpu"}>
                                    <Image src={picture} alt='CPUs' className="product-image" />
                                    <p className="product-name">CPUs</p>
                                </Link>
                            </div>
                            <div className="product-card">
                                <a href="#">
                                    <Image src={picture} alt='CPUs' className="product-image" />
                                    <p className="product-name">CPUs</p>
                                </a>
                            </div>
                            <div className="product-card">
                                <a href="#">
                                    <Image src={picture} alt='CPUs' className="product-image" />
                                    <p className="product-name">CPUs</p>
                                </a>
                            </div>
                            <div className="product-card">
                                <a href="#">
                                    <Image src={picture} alt='CPUs' className="product-image" />
                                    <p className="product-name">CPUs</p>
                                </a>
                            </div>
                            <div className="product-card">
                                <a href="#">
                                    <Image src={picture} alt='CPUs' className="product-image" />
                                    <p className="product-name">CPUs</p>
                                </a>
                            </div>
                            <div className="product-card">
                                <a href="#">
                                    <Image src={picture} alt='CPUs' className="product-image" />
                                    <p className="product-name">CPUs</p>
                                </a>
                            </div>
                            <div className="product-card">
                                <a href="#">
                                    <Image src={picture} alt='CPUs' className="product-image" />
                                    <p className="product-name">CPUs</p>
                                </a>
                            </div>
                            <div className="product-card">
                                <a href="#">
                                    <Image src={picture} alt='CPUs' className="product-image" />
                                    <p className="product-name">CPUs</p>
                                </a>
                            </div>
                        </div>

                        <div class="dropbox-content-right">
                            <div>
                                <div class="section">
                                    <h3>Peripherals</h3>
                                    <ul>
                                        <li><a href="#">Headphones</a></li>
                                        <li><a href="#">Keyboards</a></li>
                                        <li><a href="#">Mice</a></li>
                                        <li><a href="#">Speakers</a></li>
                                        <li><a href="#">Webcams</a></li>
                                    </ul>
                                </div>

                                <div class="section">
                                    <h3>Displays</h3>
                                    <ul>
                                        <li><a href="#">Monitors</a></li>
                                    </ul>
                                </div>

                                <div class="section">
                                    <h3>Software</h3>
                                    <ul>
                                        <li><a href="#">Operating Systems</a></li>
                                    </ul>
                                </div>
                            
                            </div>

                            <div>
                                <div class="section">
                                    <h3>Expansion</h3>
                                    <ul>
                                        <li><a href="#">Sound Cards</a></li>
                                        <li><a href="#">Wireless Networking</a></li>
                                    </ul>
                                </div>

                                <div class="section">
                                    <h3>Accessories / Other</h3>
                                    <ul>
                                        <li><a href="#">Case Fans</a></li>
                                        <li><a href="#">Fan Controllers</a></li>
                                        <li><a href="#">Thermal Compound</a></li>
                                        <li><a href="#">External Hard Drives</a></li>
                                        <li><a href="#">Optical Drives</a></li>
                                        <li><a href="#">Uninterruptible Power Supplies</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropbox;