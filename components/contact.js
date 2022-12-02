import React, { Component } from 'react';
 
class Contact extends Component {
    render() {
        return (



<div>
<div class="contact-info col-lg-6 wow fadeInUp" data-wow-duration="500ms">
				<h3>Contact Details</h3>
				<p>We would love the oppertunity to work with you on designing and implenting your next website or web-based service. We offer a proven track record with the customer testimonials and the service awards that one should expect from a business partner.</p>
				<div class="contact-details">
					<div class="con-info clearfix">
						<i class="tf-map-pin"></i>
						<span> 4901 Hunt Rd #200, Blue Ash, Ohio, USA</span>
					</div>

					<div class="con-info clearfix">
						<i class="tf-ion-ios-telephone-outline"></i>
						<span>Phone: (513) 881-2901</span>
					</div>

					<div class="con-info clearfix">
						<i class="tf-ion-iphone"></i>
						<span>Fax: 888-555-5556</span>
					</div>

					<div class="con-info clearfix">
						<i class="tf-ion-ios-email-outline"></i>
						<span>Email:info@kableacademy.com</span>
					</div>
				</div>
			</div>


<div class="container-fluid px-5 my-5">
	<div class="row justify-content-center">
	  <div class="col-xl-10">
		<div class="card border-0 rounded-3 shadow-lg overflow-hidden">
		  <div class="card-body p-0">
			<div class="row g-0">
			  <div class="col-sm-6 d-none d-sm-block bg-image"></div>
			  <div class="col-sm-6 p-4">
				<div class="text-center">
				  <div class="h3 fw-light">Contact Form</div>
				  <p class="mb-4 text-muted">Split layout contact form</p>
				</div>
  
				
  
				<form id="contactForm" data-sb-form-api-token="API_TOKEN">
  
				  
				  <div class="form-floating mb-3">
					<input class="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
					<label for="name">Name</label>
					<div class="invalid-feedback" data-sb-feedback="name:required">Name is required.</div>
				  </div>
  
				  
				  <div class="form-floating mb-3">
					<input class="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" />
					<label for="emailAddress">Email Address</label>
					<div class="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
					<div class="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
				  </div>
  
				  
				  <div class="form-floating mb-3">
					<textarea class="form-control" id="message" type="text" placeholder="Message" style="height: 10rem;" data-sb-validations="required"></textarea>
					<label for="message">Message</label>
					<div class="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
				  </div>
  
				  
				  <div class="d-none" id="submitSuccessMessage">
					<div class="text-center mb-3">
					  <div class="fw-bolder">Form submission successful!</div>
					  <p>To activate this form, sign up at</p>
					  <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
					</div>
				  </div>
  
				 
				  <div class="d-none" id="submitErrorMessage">
					<div class="text-center text-danger mb-3">Error sending message!</div>
				  </div>
  
				  
				  <div class="d-grid">
					<button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button>
				  </div>
				</form>
				
  
			  </div>
			</div>
  
		  </div>
		</div>
	  </div>
	</div>
  </div>
  
  
  <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script></div>

            );
    }
}
export default Contact;