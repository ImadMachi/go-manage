import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { config } from 'process'
import React from 'react'
import HomeNavbar from '../../components/HomeNavbar'
import * as S from './BlogScreen.styled'
const BlogScreen = () => {
 
  return (
      <div>
  <HomeNavbar />
  <S.Title>Blog</S.Title>
    <S.Articles>
            
      <S.Article>
        <S.Left>
            <S.Image src='images/img1b.jpg' />
        </S.Left>
       < S.Right>
          <S.Date>FEBRUARY 2022</S.Date>
          <S.Sh1>OUTSOURCIA 2021 HIGHLIGHTS</S.Sh1>
          <S.Description>The year 2021 was, for the Outsourcia group, a record year in terms of growth and recruitment with, on a like-for-like basis, 18% growth in revenues, 39% growth in operating income and 370 net jobs created. </S.Description>
          <S.Auteur>Julie Lablonde</S.Auteur>
       </S.Right>
     </S.Article>

     <S.Article>
        <S.Left>
            <S.Image src='images/img2b.png' />
        </S.Left>
       < S.Right>
          <S.Date>29 Abril 2019</S.Date>
          <S.Sh1>CRM (Deals)Component</S.Sh1>
          <S.Description>I’m a huge fan of the CRM (Deals) component. We’ve used it to track sales and automate parts of our sales process. As a small startup business, this has allowed us to save time and focus on other priorities – it really has let us focus our energy on stronger leads, rather than chasing every single lead </S.Description>
          <S.Auteur>Julie Lablonde</S.Auteur>
       </S.Right>
     </S.Article>

     <S.Article>
        <S.Left>
            <S.Image src='images/img3b.jpg' />
        </S.Left>
       < S.Right>
       <S.Date>FEBRUARY 2022</S.Date>
          <S.Sh1>OUTSOURCIA 2021 HIGHLIGHTS</S.Sh1>
          <S.Description>The year 2021 was, for the Outsourcia group, a record year in terms of growth and recruitment with, on a like-for-like basis, 18% growth in revenues, 39% growth in operating income and 370 net jobs created. </S.Description>
          <S.Auteur>Julie Lablonde</S.Auteur>
       </S.Right>
     </S.Article>

     <S.Article>
        <S.Left>
            <S.Image src='images/img4b.jpg' />
        </S.Left>
       < S.Right>
       <S.Date>29 Abril 2019</S.Date>
          <S.Sh1>CRM (Deals)Component</S.Sh1>
          <S.Description>I’m a huge fan of the CRM (Deals) component. We’ve used it to track sales and automate parts of our sales process. As a small startup business, this has allowed us to save time and focus on other priorities – it really has let us focus our energy on stronger leads, rather than chasing every single lead </S.Description>
          <S.Auteur>Julie Lablonde</S.Auteur>
       </S.Right>
     </S.Article>

    </S.Articles>
    <S.Footer >
        <S.Sh2>@Copy 2022 By Skitina And Imad</S.Sh2>
    <S.Social>
<S.Icon><FontAwesomeIcon icon={faFacebook} /></S.Icon>
<S.Icon><FontAwesomeIcon icon={faInstagram} /></S.Icon>
<S.Icon><FontAwesomeIcon icon={faTwitter} /></S.Icon>
</S.Social>
</S.Footer>
    </div>
  )
}

export default BlogScreen