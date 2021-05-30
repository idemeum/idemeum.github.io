---
title: Passwordless login for your mobile or desktop app
type: managed
subtitle: Onboard, authenticate, and engage your users with idemeum SDK.<br><a href="https://developer.idemeum.com/devportal/index.html" class="btn btn-white mt-2" target="_blank">Try it free</a><a href="https://jsdemo.idemeum.com" class="btn btn-outline-white mt-2" target="_blank">Live demo</a>
featured_image: /assets/img/mfa/mfa.png
---

<link href="/assets/styles/prism.css" rel="stylesheet" />
<script src="/assets/js/prism.js"></script>



<!-- How is idemeum different? -->
<div class="section">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <h6 class="text-uppercase">How is idemeum different?</h6>
        <h3 class="display-3">The only passwordless, private, and user-centric platform</h3>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-lg-4 d-flex align-items-stretch">
        <div class="card bg-gradient-success">
          <div class="card-body">
            <h4 class="card-title text-white">Passwordless</h4>
            <p class="card-description text-white">With one SDK you choose how you want to login your users: with one-click, biometrics, or QR-codes. No passwords involved.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 d-flex align-items-stretch">
        <div class="card bg-gradient-info">
          <div class="card-body">
            <h4 class="card-title text-white">Private</h4>
            <p class="card-description text-white">With client-side encryption we empower your users to own and control their data. Your users' data is none of our business. We make it private.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 d-flex align-items-stretch">
        <div class="card bg-gradient-default">
          <div class="card-body">
            <h4 class="card-title text-white">Single Sign-on</h4>
            <p class="card-description text-white">With Single Sign-On across domains and apps your users will love the experience. They won't even notice it.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<!-- Login videos -->
<div class="section">
  <div class="container">
    <div class="row">
		<div class="col-lg-6 mx-auto justify-content-center d-flex flex-column">
			<h6 class="text-uppercase">All-in-one SDK</h6>
			<h3 class="display-3">Remove password friction for your users</h3>
			<p class="lead">All you need is idemeum SDK and a couple of hours of your time. You can easily implement one-click, biometric, or QR code login flow for your desktop or mobile app.</p>
			
	        <a href="https://docs.idemeum.com/overview/oneclick/" target="_blank">
	          <button type="submit" class="btn btn-outline-primary">About login flows</button>
	        </a>
		</div>
		
		<div class="col-lg-6 mx-auto justify-content-center d-flex flex-column">

<div class="nav-wrapper">
    <ul class="nav nav-pills nav-fill flex-column flex-md-row" id="tabs-icons-text" role="tablist">
        <li class="nav-item">
            <a class="nav-link mb-sm-3 mb-md-0 active" id="tabs-icons-text-1-tab" data-toggle="tab" href="#tabs-icons-text-1" role="tab" aria-controls="tabs-icons-text-1" aria-selected="true">One-click</a>
        </li>
        <li class="nav-item">
            <a class="nav-link mb-sm-3 mb-md-0" id="tabs-icons-text-2-tab" data-toggle="tab" href="#tabs-icons-text-2" role="tab" aria-controls="tabs-icons-text-2" aria-selected="false">Biometric</a>
        </li>
        <li class="nav-item">
            <a class="nav-link mb-sm-3 mb-md-0" id="tabs-icons-text-3-tab" data-toggle="tab" href="#tabs-icons-text-3" role="tab" aria-controls="tabs-icons-text-3" aria-selected="false">QR-code</a>
        </li>
    </ul>
</div>
<div class="card shadow">
    <div class="card-body">
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="tabs-icons-text-1" role="tabpanel" aria-labelledby="tabs-icons-text-1-tab">
				
				
				
<video width="100%" controls>
  <source src="/assets/videos/one-click-animation.mp4" type="video/mp4">
  <source type="video/webm" src="/assets/videos/one-click-animation.webm" />
Your browser does not support the video tag.
</video>
            
			
			
			
			
			</div>
            <div class="tab-pane fade" id="tabs-icons-text-2" role="tabpanel" aria-labelledby="tabs-icons-text-2-tab">
				
				
				
				
<video width="100%" controls>
  <source src="/assets/videos/biometric-animation.mp4" type="video/mp4">
  <source type="video/webm" src="/assets/videos/biometric-animation.webm" />
Your browser does not support the video tag.
</video>

</div>
            
			
			
			
            <div class="tab-pane fade" id="tabs-icons-text-3" role="tabpanel" aria-labelledby="tabs-icons-text-3-tab">
				
				
				
				
<video width="100%" controls>
  <source src="/assets/videos/qrcode-animation.mp4" type="video/mp4">
  <source type="video/webm" src="/assets/videos/qrcode-animation.webm" />
Your browser does not support the video tag.
</video>

</div>
            
				
				
				
            </div>
        </div>
    </div>
</div>

<div>

    </div>
  </div>
</div>
</div>


<!-- Code examples -->
<div class="section">
  <div class="container">
    <div class="row" style="flex-wrap: wrap-reverse;">
      <div class="col-lg-6 mx-auto">

<pre><code class="language-javascript">var idemeum = new IdemeumManager(
(clientId = "YOUR_CLIENT_ID")
);

function isUserLoggedIn() {
    idemeum.isLoggedIn().then(
        function(data) {
            renderUserClaims();
        },
        function(errorData) {
            html = `<button id="btn-login" onclick="login()">Log in</button>`;
            document.getElementById("initial").innerHTML = html;
        }
    );
}</code></pre>
			
			
			
			
			

      </div>
      <div class="col-lg-6 mx-auto justify-content-center d-flex flex-column">
        <h6 class="text-uppercase">How to integrate</h6>
        <h3 class="display-3">Plug and play experience</h3>
        <p class="lead">With just a few lines of code you can leverage idemeum SDK to implement passwordless for your mobile or desktop app. We make it simple.</p>
        <a href="https://docs.idemeum.com/reference/sdkoverview/" target="_blank">
          <button type="submit" class="btn btn-outline-primary">Start integrating</button>
        </a>
      </div>
    </div>
  </div>
</div>


<!-- About security -->
<div class="section">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 mx-auto justify-content-center d-flex flex-column">
        <h6 class="text-uppercase">About infrastructure</h6>
        <h3 class="display-3">Secure and private by design</h3>
        <p class="lead">With Privacy-aware Identity Architecture we make user data privacy and security part of our DNA. We engineered idemeum to combine best of both worlds - provide Single Sing-On yet enable digital identity privacy and modern security controls.</p>
        <a href="https://docs.idemeum.com/overview/security/" target="_blank">
          <button type="submit" class="btn btn-outline-primary">Learn more</button>
        </a>
      </div>
      <div class="col-lg-6 mx-auto justify-content-center d-flex flex-column">
          <div class="image-container">
            <img src="./assets/img/architecture.png" alt="idemeum architecture">
          </div>
      </div>
    </div>
  </div>
</div>


