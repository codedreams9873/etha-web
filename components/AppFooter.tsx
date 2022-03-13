// Dependencies
import { useAppDispatch, useAppSelector } from '../redux/store';
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Dropdown, Col, Form, InputGroup, Button } from 'react-bootstrap';
import Image from 'next/image';
// import { useHistory, useLocation } from 'react-router-dom';
import { setContactFormVisibility, setModalVisibility } from '../redux';
// Components
// CSS
import { useRouter } from 'next/router';
import styles from '../styles/Footer.module.css';

export const AppFooter: React.FC = () => {
    const [pageName, setPageName] = useState('Home');
    const [isPageStatic, setPageStatic] = useState(false);
    const [isBackEnabled, setBackEnabled] = useState(false);
    const [searchParam, setSearchParam] = useState('');
    const [contactUsVisible, setContactUsVisible] = useState(false);

    const history = useRouter();
    const pathname = history.pathname;

    const dispatch = useAppDispatch();
    const state = useAppSelector((reduxState) => ({
        signed_in: reduxState.userReducer.signed_in,
        userName: reduxState.userReducer.name,
    }));
    function handleKeyPress(target: React.KeyboardEvent) {
        if (target.key === 'Enter') {
            if (searchParam.length > 1) {
                history.push({ pathname: '/search', search: `?searchParam=${searchParam}` });
                setSearchParam('');
            }
        }
    }
    useEffect(() => {
        setBackEnabled(false);
        switch (pathname.split('/')[1]) {
            case 'post':
                setBackEnabled(true);
                break;
            case 'politician':
                setBackEnabled(true);
                break;
            case 'activity':
                setBackEnabled(true);
                break;
        }
    }, [pathname, setPageName, setPageStatic]);
    return (
        <>
            <div className={`${styles.footer_container} py-4 d-sm-flex d-md-none`}>
                <div
                    className="d-flex"
                    style={{
                        justifyContent: 'space-between',
                        width: '50%',
                        backgroundColor: '#fefefe',
                        boxShadow: '1px 1px 1px 1px #00000030',
                        borderRadius: '15px',
                    }}
                >
                    <div
                        style={{
                            cursor: 'pointer',
                            width: '50%',
                            textAlign: 'center',
                            fontWeight: 'bolder',
                            color: `${pathname.includes('home') ? '#4824D6' : '#707070'}`,
                        }}
                        onClick={() => {
                            history.push('/home');
                        }}
                    >
                        <i className="fa fa-compass" />
                        <br />
                        Discover
                    </div>
                    <div
                        style={{
                            cursor: 'pointer',
                            width: '50%',
                            textAlign: 'center',
                            fontWeight: 'bolder',
                            color: `${pathname.includes('trending') ? '#4824D6' : '#707070'}`,
                        }}
                        onClick={() => {
                            history.push('/trending');
                            
                        }}
                    >
                        <i className="fas fa-chart-line" />
                        <br />
                        Trending
                    </div>
                </div>
            </div>
        </>
    );
};