import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import front from '../img/front.svg';
import back from '../img/back.svg';
import dg from '../img/dg.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                        image={front} 
                        title={'Front-end'} 
                        paragraph={'HTML5, CSS, Javascript, React, styledComponents, Material UI, Consume API'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={back} 
                            title={'Back-end'} 
                            paragraph={'Python, Django, Django-Rest-Framework, Node.js, DataBases'}
                        />
                    </div>
                    <ServiceCard 
                        image={dg} 
                        title={'Design'} 
                        paragraph={'UX, Product Design, Graphic Design,  Illustrator, Photoshop.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
