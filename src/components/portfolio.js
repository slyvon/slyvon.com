import React from "react"
import { Link } from "gatsby"

import styled from '@emotion/styled'
import Brighter from "../images/portfolio/brighter2.png"
import SimplifiedFitness from "../images/portfolio/simplifiedFitness2.png"
import DesignSite from "../images/portfolio/design-site2.png"
import JCDFitness from "../images/portfolio/jcdfitness2.png"
import BryanKrahn from "../images/portfolio/bryankrahn2.png"
import Physiqonomics from "../images/portfolio/physiqonomics2.png"


// Styled Components
const ScreenshotImage= styled.img`
 border-radius: .25rem;
 box-shadow: 0 0 8px 2px rgba(0,0,0,.2);
`;

const LinkToImage= styled(Link)`

`;


// Output
const Portfolio = () => {
  return (
<React.Fragment>
<div class="w-100 center bb pb5 b--black-10">
    <div class="cf">
        <div class="fl w-100 w-30-ns ph2">
            <div class="">
              <h1 class="mb0 pb0 f2 tracked-tight">Brighter</h1>
              <h2 class="black-50 fw4 pt0 lh-title mt0 f4 tracked-tight">Design, Development, and Copy</h2>
              <p class="f5">My most recent web design & development work. Brighter is a video production agency based in LA that has created content for companies such as Disney, KIA, Nintendo, and Lands' End.  <a href="https://abrightercompany.com/" target="_blank" rel="nofollow">Click here</a> to check out the site.</p>
              <p class="f6 i">Fall 2019</p>
            </div>
          </div>
      <div class="fl w-100 w-70-ns ph4">
        <div class="pv4">
          <LinkToImage to={Brighter}>
            <ScreenshotImage src={Brighter} />
          </LinkToImage>
        </div>
      </div>
      
    </div>
  </div>

 


  <div class="w-100 center bb pv5 b--black-10">
      <div class="cf">
          <div class="fl w-100 w-30-ns ph2">
              <div class="pr3">
                <h1 class="mb0 pb0 f2 tracked-tight">SimplifiedFitness</h1>
                <h2 class="black-50 fw4 pt0 lh-title mt0 f4 tracked-tight">Design, Development, and Copy</h2>
                <p class="f5">Originally Von Blanco Fitness, SimplifiedFitness.io is my fitness website that has been rebranded and restructured with the sole purpose of providing educational content. <a href="https://simplifiedfitness.io/" target="_blank" rel="nofollow">Click here</a> to check out the site.</p>
                <p class="f6 i">Est. 2011, updated Fall 2019</p>
              </div>
            </div>
          <div class="fl w-100 w-70-ns ph4">
              <div class="pv4">
              <LinkToImage to={SimplifiedFitness}>
                <ScreenshotImage src={SimplifiedFitness} />
                </LinkToImage>
              </div>
            </div>
      </div>
    </div>



  <div class="w-100 center bb pv5 b--black-10">
      <div class="cf">
          <div class="fl w-100 w-30-ns ph2">
              <div class="pr3">
                <h1 class="mb0 pb0 f2 tracked-tight">JCD Fitness</h1>
                <h2 class="black-50 fw4 pt0 lh-title mt0 f4 tracked-tight">Design, Development, and Copy</h2>
                <p class="f5">Redesigned the website of JC Deen, a writer & editor in the fitness industry. <a href="https://jcdfitness.com/" target="_blank" rel="nofollow">Click here</a> to check out the site.</p>
                <p class="f6 i">Summer 2019</p>
              </div>
            </div>
        <div class="fl w-100 w-70-ns ph4">
          <div class="pv4">
          <LinkToImage to={JCDFitness}>
            <ScreenshotImage src={JCDFitness} />
            </LinkToImage>
          </div>
        </div>
        
      </div>
    </div>



   <div class="w-100 center bb pv5 b--black-10">
      <div class="cf">
          <div class="fl w-100 w-30-ns ph2">
              <div class="pr3">
                <h1 class="mb0 pb0 f2 tracked-tight">Design.slyvon.com</h1>
                <h2 class="black-50 fw4 pt0 lh-title mt0 f4 tracked-tight">Design, Development, and Copy</h2>
                <p class="f5">My web-design service sales page. <a href="https://design.slyvon.com/" target="_blank" rel="nofollow">Click here</a> to check out the site.</p>
                <p class="f6 i">Summer 2019</p>
              </div>
            </div>
          <div class="fl w-100 w-70-ns ph4">
              <div class="pv4">
              <LinkToImage to={DesignSite}>
                <ScreenshotImage src={DesignSite} />
                </LinkToImage>
              </div>
            </div>
         
        
        
      </div>
    </div>




<div class="w-100 center bb pv5 b--black-10">
    <div class="cf">
        <div class="fl w-100 w-30-ns ph2">
            <div class="pr3">
              <h1 class="mb0 pb0 f2 tracked-tight">Bryan Krahn</h1>
              <h2 class="black-50 fw4 pt0 lh-title mt0 f4 tracked-tight">Design, Development, Copy, Email Marketing, and Content Strategy</h2>
              <p class="f5">Redesigned the website of Bryan Krahn, a writer & editor in the fitness industry. <a href="https://bryankrahn.com/" target="_blank" rel="nofollow">Click here</a> to check out the site.</p>
              <p class="f6 i">Fall 2017</p>
            </div>
          </div>
      <div class="fl w-100 w-70-ns ph4">
        <div class="pv4">
        <LinkToImage to={BryanKrahn}>
          <ScreenshotImage src={BryanKrahn} />
          </LinkToImage>
        </div>
      </div>
      
    </div>
  </div>



  <div class="w-100 center pv5">
      <div class="cf">
          <div class="fl w-100 w-30-ns ph2">
              <div class="pr3">
                <h1 class="mb0 pb0 f2 tracked-tight">Physiqonomics</h1>
                <h2 class="black-50 fw4 pt0 lh-title mt0 f4 tracked-tight">Design, Development, and Copy</h2>
                <p class="f5">Redesigned the website of Adam Ali, a writer in the fitness industry. <a href="https://physiqonomics.com/" target="_blank" rel="nofollow">Click here</a> to check out the site.</p>
                <p class="f6 i">Fall 2017</p>
              </div>
            </div>
          <div class="fl w-100 w-70-ns ph4">
              <div class="pv4">
              <LinkToImage to={Physiqonomics}>
          <ScreenshotImage src={Physiqonomics} />
          </LinkToImage>
                
              </div>
            </div>
          
        
        
      </div>
    </div>
    </React.Fragment>
  )
}

export default Portfolio