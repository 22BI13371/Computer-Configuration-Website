"use client";

import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Link from 'next/link';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dropdownMenu.css';


import cpuImage from '@/img/cpu.jpg';
import coolerImage from '@/img/cooler.jpg';
import motherboardImage from '@/img/motherboard.jpg';
import memoryImage from '@/img/memory.jpg';
import ssdImage from '@/img/ssd.jpg';
import hddImage from '@/img/hdd.jpg';
import vgaImage from '@/img/vga.jpg';
import powerSupplyImage from '@/img/powerSupply.jpg';
import caseImage from '@/img/case.jpg';
import monitorImage from '@/img/monitor.jpg';

const Dropbox = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    const handleItemClick = () => {
        setIsOpen(false); // Close dropdown when an item is clicked
    };

    // Product data with corresponding images
    const products = [
        { href: "/products/cpu", label: "CPU", image: cpuImage },
        { href: "/products/cooler", label: "CPU Cooler", image: coolerImage },
        { href: "/products/motherboard", label: "Motherboard", image: motherboardImage },
        { href: "/products/memory", label: "Memory", image: memoryImage },
        { href: "/products/storage", label: "Storage", image: ssdImage },
        // { href: "/products/hdd", label: "HDD", image: hddImage },
        { href: "/products/videocard", label: "Video Card", image: vgaImage },
        { href: "/products/power-supply", label: "Power Supply", image: powerSupplyImage },
        { href: "/products/case", label: "Case", image: caseImage },
        { href: "/products/monitor", label: "Monitor", image: monitorImage },
    ];

    return (
        <DropdownButton
            id="dropdown-basic-button"
            title="Products"
            menuVariant="dark"
            className="nav-item"
            show={isOpen}
            onToggle={handleToggle}
        >
            <Dropdown.Header>Products</Dropdown.Header>
            <div className="dropdown-content">
                {products.map(({ href, label, image }) => (
                    <div className="product-card" key={label}>
                        <Link href={href} passHref>
                            <div className="product-link" onClick={handleItemClick}>
                                <Image src={image} alt={label} width={24} height={24} />
                                <span>{label}</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </DropdownButton>
    );
};

export default Dropbox;