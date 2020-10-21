import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';


 class LandingPage extends Component{
     render(){
         return(
        <div style={{width:'100%', margin: 'auto'}}> 
            <Grid className ="Landing-grid">
                <Cell col={12}>
                    <img src="https://www.w3schools.com/howto/img_avatar2.png" 
                    alt="self-img" className="image-avatar"/>
                    <div className="banner-text">
                        <h1>Web Developer</h1>

                        <hr/>
                        <p>HTML/CSS |Javascript |ReactJS |Bootstrap | NodeJS |MongoDB |Python| 
                            Network Security| Cyber Security|</p>
                        <div className="social-links">
                            
                            <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>

                            </a>
                           
                            <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"/>

                            </a>
                            
                            <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-twitter-square" aria-hidden="true"/>

                            </a>

                        </div>
                    </div>

                </Cell>
            </Grid>

        </div>
                
                
         )
     }
 }
 export default LandingPage;