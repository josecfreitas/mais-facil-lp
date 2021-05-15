import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

import styled from "styled-components"


const Section = styled.section`
    min-height: 36.8rem;
    background: rgb(135,163,72);
    background: linear-gradient(90deg, rgba(135,163,72,1) 0%, rgba(134,173,51,1) 100%);
    padding-top: 14rem;
    border-radius: 0 0 280px 0;
    position: relative;
    @media (max-width: 768px) {
        padding-top: 9rem;
        padding-bottom: 4rem;
        min-height: 0;
        border-radius: 0;
    }
`

const CustomH2 = styled.h2`
    font-family: roboto;
    font-weight: 700;
    color: #ffffffde;
    font-size: 42px;
    line-height: 42px;
    margin-bottom: 24px;
    letter-spacing: 1.25px;
    @media (max-width: 768px) {
        font-size: 32px;
        line-height: 32px;
    }
`

const CustomP = styled.p`
    font-family: roboto;
    font-weight: 500;
    color: #ffffffde;
    font-size: 18px;
    line-height: 24px;
    @media (max-width: 768px) {
        font-size: 16px;
        font-weight: 400;
    }
`

const ImgContainer = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 420px;
    height: auto;
    transform: translate(-50%, 6px);
    @media (max-width: 1024px) {
        right: -80px;
    }
    @media (max-width: 768px) {
        width: 320px;
        right: -120px;
    }
`

const HeaderSection = () => {
    return (
        <Section>
            <Container>
                <Row>
                    <Col xs='6'>
                        {/* <CustomTextContainer> */}
                        <CustomH2>Contabilidade digital <br />perfeita para o seu negócio</CustomH2>
                        <CustomP>
                            Somos uma contabilidade completa com atendimento reconhecidamente excelente.
                            Podemos abrir empresa grátis, transformar seu MEI em ME e migrar de outras contabilidades.
                        </CustomP>
                        {/* </CustomTextContainer> */}
                    </Col>
                    <ImgContainer>
                        <StaticImage src="../../images/header.png" placeholder="blurred" alt="Homem sorrindo com tablet" />
                    </ImgContainer>
                </Row>
            </Container>
        </Section>
    )
}

export default HeaderSection;