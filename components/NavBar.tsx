import { useAppDispatch, useAppSelector } from '../redux/store';
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Dropdown, Col, Form, InputGroup, Button } from 'react-bootstrap';
import Image from 'next/image';
import { setContactFormVisibility } from '../redux';
import { useRouter } from 'next/router';
import styles from '../styles/NavBar.module.css';
import Link from 'next/link';
import { ContactUsModal } from './ContactUsModal';
import { ButtonBase } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';

const ignorePathnames = [
    '/landing',
    '/about-us',
    '/discover',
    '/political-spectrum',
    '/political-timeline',
    '/investments',
    '/unsubscribe',
    '/press-release/etha-launch',
    '/privacy-policy',
    '/terms-of-service',
];

export const NavBar: React.FC = () => {
    const dispatch = useAppDispatch();
    const history = useRouter();
    const [showJoinPage, setShowJoinPage] = useState<boolean>(false);
    const navTitles = ['Feedback'];

    return (
        <>
            <div className={`${styles.home_nav_container}`}>
                <div
                    className="p-0 m-0 d-flex align-items-center"
                    onClick={() => {
                        history.push('/');
                    }}
                    style={{ cursor: 'pointer' }}
                >
                    <Image
                        alt='Etha'
                        className="p-0 m-0 d-flex align-items-center mr-3"
                        height={25}
                        width={38.94}
                        src="/logo.svg"
                    />
                </div>
                <div
                    className={`${styles.nav_link} m-0 p-0 mx-4`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                        history.push(`/about-us`);
                    }}
                >
                    About Us
                </div>
                {navTitles.map((val, idx) => {
                    return (
                        <div
                            key={`${val}-${idx}`}
                            className={`${styles.nav_link} m-0 p-0 mx-4`}
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                setShowJoinPage(true);
                            }}
                        >
                            {val}
                        </div>
                    );
                })}

                {/* Invest Button @ top right of page */}
                <Button
                    variant="primary"
                    href="https://wefunder.com/etha.one"
                    style={{
                        borderRadius: '10px',
                        position: 'absolute',
                        right: '25px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    Invest Now <ArrowForwardIos fontSize="small" />
                </Button>
            </div>

            <ContactUsModal show={showJoinPage} onHide={() => setShowJoinPage(false)} />
        </>
    );
};
