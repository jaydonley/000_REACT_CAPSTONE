
import { Link } from 'react-router-dom'
import Alexis from '../images/AlexisProfilePicture.jpg'
import Kirk from '../images/k4.jpg'

import React, { Component } from 'react'

export default class TeamPage extends Component {
  render() {
	return (
	<div id='mainTeam'>
		<section id="our-team" class="section text-center">
		<div class="container">
			<div class="row">
	
				<div class="col-lg-12">
					<div class="title text-center ">
						<h2>Our <span class="color">Team</span></h2>
						<div class="border"></div>
					</div>
				</div>

				<div class="row">
  <div class="column">
    <div class="card">
      
      <div class="container">
		<img src={Alexis} alt="Alexis" />
        <h2>Alexis Flowers</h2>
        <p class="title">Web Developer</p>
        <p>Kable Academy Web Development Fall '22</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      
      <div class="container">
	  <img src={Kirk} alt="Kirk" />
	  <h2>Kirk Springs</h2>
        <p class="title">Web Developer</p>
        <p>Kable Academy Web Development Fall '22</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      
      <div class="container">
        <h2>Jason Donley</h2>
        <p class="title">Web-Developer/Designer</p>
        <p>Kable Academy Web Development Fall '22</p>
        <p>jay.donley@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>




				
				
				</div>
			</div> 
		</section></div>
	
			

			
		

	)
  }
}
