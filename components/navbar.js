import React, { Component } from 'react';
 
class navbar extends Component {
    render() {
        return (


<header id="navigation" class="navigation">
  <div class="container">
    <div class="navbar-header w-100">
      <nav class="navbar navbar-expand-lg navbar-dark px-0">
        <!-- logo -->
        <a class="navbar-brand logo" href="index.html">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Seal_of_the_City_of_Cincinnati_%28Ohio%29.png/1200px-Seal_of_the_City_of_Cincinnati_%28Ohio%29.png"  id=logoSize  alt="Seal of Cincinnati" />
          
        </a>
        
  
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar01"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbar01">
          <ul class="navbar-nav navigation-menu ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">Attractions</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">Culture & Industry</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#portfolio">Sports</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact-us">Contact</a>
            </li>
        <li class="nav-item">
              <a class="nav-link" href="#our-team">Team</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  </header>

            );
    }
}
export default navbar;