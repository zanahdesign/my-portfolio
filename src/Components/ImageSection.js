import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';
import cv from '../img/cv.pdf'

function ImageSection() {
    
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Erika Garcia</span></h4>
                <p className="paragraph">
                Bilingual Full Stack- Developer focused on developing and optimizing interactive user- friendly and feature rich websites. High analytical skills and strong attention to detail in order to deliver efficient solutions. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Erika Adrina García Pulido</p>
                        <p>: Colombian </p>
                        <p>: Native Spanish, English </p>
                        <p>: Bogota, Colombia</p>
                        <p>: Remote </p>
                    </div>
                </div>
                <a href={cv}>
                    <PrimaryButton title={'Download Cv'} type="submit"/>
                </a>
              
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
            text-align: justify;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
