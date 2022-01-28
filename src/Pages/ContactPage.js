import React, {useState} from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';
import emailjs from 'emailjs-com'


const Result = () =>{
    return(
        <p>Your message has been sent</p>
    )
}

function ContactPage() {
    const [result, showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_1lhoxql', 'template_599ejud', e.target, 'user_dFBz5aXLliSzStEMjZ4si')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          showResult(true);
      };

    //hide message after sending
    setTimeout(() => {
        showResult(false)
    }, 5000);

    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
    
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactPageStyled >
            <InnerLayout className={'contact-section'}>
                <div className="left-content">
                    <div className="contact-title">
                        <h4>Get In Touch</h4>
                    </div>
                    <form action=""  className="form" onSubmit={sendEmail}>
                        <div className="form-field">
                            <label htmlFor="name"  >Enter your name*</label>
                            <input type="text" id="name" name="fullname" required />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email"  >Enter your email*</label>
                            <input type="email" id="email" name='email' required />
                        </div>
                        <div className="form-field">
                            <label htmlFor="phone"  >Enter your phone</label>
                            <input type="text" id="subject" name='phone' />
                        </div>
                        <div className="form-field">
                            <label htmlFor="text-area">Enter your Message*</label>
                            <textarea name="message" id="textarea" cols="30" rows="10" required></textarea>
                        </div>
                        <div className="form-field f-button">
                            <button className='ton'> Send Email </button>
                        </div>
                        <div>
                            {result ? <Result/> : null}
                        </div>
                    
                    </form>
                </div>
                <div className="right-content">
                    <ContactItem title={'Phone'} icon={phone} cont1={'+57 313 384 0052'} />
                    <ContactItem title={'Email'} icon={email} cont1={'garcia.pulido.erika@gmail.com'} />
                    <ContactItem title={'Address'} icon={location} cont1={'Bogota D.C, Cundinamarca'} cont2={'Colombia'} />
                    
                </div>
            </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
                button{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: rgb(5, 127, 255);
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: white;
                }
            }

            
        }
    }
`;

export default ContactPage
