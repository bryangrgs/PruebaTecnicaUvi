import React from 'react'
import { Button } from '../ButtonInfo3/ButtonElement';
import { Column2, ImgWrap, InfoContainer, InfoWrapper, 
    InfoRow, Column1, TextWrapper , TopLine, Heading, Subtitle, BtnWrap,Img } from './InfoElements2';

export const Info2 = ({lightBg,id,imgStart,topLine1,
    lightText,headLine,headLine2,headLine3,darkText, description,description2,description3,buttonLabel,
    img,alt,primary,dark,dark2}) => {
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>
                        {topLine1}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <Heading lightText={lightText}>{headLine2}</Heading>
                        <Subtitle darkText={darkText}>{description2}</Subtitle>
                        <Heading lightText={lightText}>{headLine3}</Heading>
                        <Subtitle darkText={darkText}>{description3}</Subtitle>
                        <BtnWrap>
                            <Button to='Planes' 
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-90}
                            primary={primary ? 0 : 1}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>
                        </BtnWrap>
                        
                </TextWrapper>
                
                </Column1>
                <Column2>
                
                <ImgWrap>
                <Img src={img} alt={alt}/>
                </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    
    
    </>
  )
}
export default Info2;