<template>
  <div class="inner-banner inner-bg2">
    <div class="container">
      <div class="inner-title">
        <h3>Contact Us</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>Service</li>
          <li>Contact Us</li>
        </ul>
        <div class="inner-shape">
          <img src="@/assets/images/inner-banner/inner-shape1.png" alt="Images">
          <img src="@/assets/images/inner-banner/inner-shape2.png" alt="Images">
        </div>
      </div>
    </div>
  </div>


  <div class="contact-info-area  pt-100 pb-70">
    <div class="container">
      <div class="section-title text-center">
        <h2>Contact Info</h2>
      </div>
      <div class="row pt-45 justify-content-center">
        <div class="col-lg-4 col-6">
          <div class="contact-card">
            <i class="ri-map-pin-line"></i>
            <h3>Location</h3>
            <p> Pokfulam, Hong Kong</p>
            <p> The University of Hong Kong</p>
          </div>
        </div>
        <div class="col-lg-4 col-6">
          <div class="contact-card">
            <i class="ri-phone-line"></i>
            <h3>Phone</h3>
            <p><a href="">+852 00000000</a></p>
            <p><a href="">+852 11111111</a></p>
          </div>
        </div>
        <div class="col-lg-4 col-6">
          <div class="contact-card">
            <i class="ri-mail-send-line"></i>
            <h3>Email Address</h3>
            <p>
              <a href=""><span>20202020202@foxmail.com</span></a>
            </p>
            <p>
              <a href=""><span>385738392975@foxmail.com</span></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="contact-area pb-70">
    <div class="container">
      <div class="contact-form">
        <h3>Contact Form</h3>
        <form id="contactForm">
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <label>Your Name</label>
                <input type="text" name="name" id="name" class="form-control" required
                       data-error="Please Enter Your Name">
                <div class="help-block with-errors"></div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label>Your Email</label>
                <input type="email" name="email" id="email" class="form-control" required
                       data-error="Please Enter Your Email">
                <div class="help-block with-errors"></div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label>Phone Number</label>
                <input type="text" name="phone_number" id="phone_number" required
                       data-error="Please Enter Your number" class="form-control">
                <div class="help-block with-errors"></div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="form-group">
                <label>Your Subject</label>
                <input type="text" name="msg_subject" id="msg_subject" class="form-control" required
                       data-error="Please Enter Your Subject">
                <div class="help-block with-errors"></div>
              </div>
            </div>
            <div class="col-lg-12 col-md-12">
              <div class="form-group">
                <label>Your Message</label>
                <textarea name="message" class="form-control" id="message" cols="30" rows="5" required
                          data-error="Write your message"></textarea>
                <div class="help-block with-errors"></div>
              </div>
            </div>
            <div class="col-lg-12 col-md-12">
              <div class="agree-label">
                <input type="checkbox" id="chb1">
                <label for="chb1">
                  Accept <a href="terms-condition.html">Terms & Conditions</a> And <a
                    href="privacy-policy.html">Privacy Policy.</a>
                </label>
              </div>
            </div>
            <div class="col-lg-12 col-md-12">
              <button type="submit" class="default-btn border-radius-5">
                Send Message <i class="ri-chat-4-line"></i>
              </button>
              <div id="msgSubmit" class="h3 text-center hidden"></div>
              <div class="clearfix"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>


  <div class="involved-area-two pt-100 pb-70">
    <div class="container">
      <div class="section-title text-center">
        <h2>Get Involved</h2>
      </div>
      <div class="row pt-45">
        <div class="col-lg-3 col-6">
          <div class="involved-card">
            <div class="icon">
              <i class="ri-flight-takeoff-line"></i>
            </div>
            <h3>Join Our <b>Community</b></h3>
            <ul class="social-link">
              <li>
                <a href="https://www.google.com/" target="_blank">
                  <i class="ri-google-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  <i class="ri-facebook-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <i class="ri-instagram-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank">
                  <i class="ri-twitter-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank">
                  <i class="ri-linkedin-fill"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-6">
          <div class="involved-card">
            <div class="icon">
              <i class="ri-checkbox-circle-line"></i>
            </div>
            <h3>Become A <b>Creator</b></h3>
            <a href="register.html" class="default-btn">Register</a>
          </div>
        </div>
        <div class="col-lg-3 col-6">
          <div class="involved-card">
            <div class="icon">
              <i class="ri-heart-2-line"></i>
            </div>
            <h3>Become A <b>Charity Partner</b></h3>
            <a href="create-collection.html" class="default-btn">Express Interest</a>
          </div>
        </div>
        <div class="col-lg-3 col-6">
          <div class="involved-card">
            <div class="icon">
              <i class="ri-discuss-line"></i>
            </div>
            <h3>Reach Out To <b>Our Team</b></h3>
            <a href="contact.html" class="default-btn">Contact Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>


<script>
export default {
  name : 'ContactUs',

}

</script>