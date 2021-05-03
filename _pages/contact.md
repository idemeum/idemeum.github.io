---
title: We are here to help
subtitle: <p>Ping us on slack or fill out the form below to reach our team</p><a href="https://join.slack.com/t/idemeum-community/shared_invite/zt-npfwnoud-hOjc6rbmZmdTAY3xE3i5FA" target="_blank"><button type="button" class="btn btn-outline-neutral">Slack</button></a>
featured_image: /assets/img/contact/contact.jpg
---


<section class="mt-4" id="contact">
	<h3 class="display-4 mb-3 text-center">Fill out the form to send us a question</h3>

  <div class="contactus-1 fullWidth">
    <div class="container">
      <div class="row">
        {% if site.data.settings.contact_settings.form_action %}
        <div class="col-lg-8 col-md-12 ml-auto mr-auto">
          <div class="card card-contact card-raised">

            <form method="post" action="{{ site.data.settings.contact_settings.form_action }}" id="contact-form">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>First name</label>
                      <div class="input-group mb-4">
                        <div class="input-group-prepend">
                          <span class="input-group-text"><i class="ni ni-circle-08"></i></span>
                        </div>
                        <input class="form-control" name="First Name" placeholder="First Name..."
                          aria-label="First Name..." type="text">
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 pl-2">
                    <div class="form-group">
                      <label>Last name</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"><i class="ni ni-collection"></i></span>
                        </div>
                        <input type="text" class="form-control" name="Last Name" placeholder="Last Name..."
                          aria-label="Last Name...">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label>Email address</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Email Here..." name="email">
                  </div>
                </div>
                <div class="form-group">
                  <label>Your message</label>
                  <textarea name="message" class="form-control" id="message" rows="6"></textarea>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="custom-control custom-checkbox mt-2">
                      <input type="hidden" name="_next"
                        value="{{ site.data.settings.contact_settings.confirmation_url }}" />
                      <input type="hidden" name="_subject"
                        value="{{ site.data.settings.contact_settings.email_subject }}" />
                      <input type="text" name="_gotcha" style="display: none;" class="contact-form__gotcha" val="">

                      <input class="custom-control-input" id="customCheck" type="checkbox" required>
                      <label class="custom-control-label" for="customCheck">
                        <span>I'm not a robot</span>
                      </label>

                    </div>
                  </div>
                  <div class="col-md-6">
                    <button type="submit"
                      class="btn btn-primary pull-right">{{ site.data.settings.contact_settings.send_button_text }}</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {% else %}
        <div class="col-lg-5 col-md-7 ml-auto mr-auto">
          <div class="card card-contact card-raised">
            <div class="card-header text-center">
              <h4 class="card-title">Contact Us</h4>
            </div>

            <form method="post" action="" id="contact-form">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>First name</label>
                      <div class="input-group mb-4">
                        <div class="input-group-prepend">
                          <span class="input-group-text"><i class="ni ni-circle-08"></i></span>
                        </div>
                        <input class="form-control" name="First Name" placeholder="First Name..."
                          aria-label="First Name..." type="text">
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 pl-2">
                    <div class="form-group">
                      <label>Last name</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text"><i class="ni ni-collection"></i></span>
                        </div>
                        <input type="text" class="form-control" name="Last Name" placeholder="Last Name..."
                          aria-label="Last Name...">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label>Email address</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Email Here..." name="email">
                  </div>
                </div>
                <div class="form-group">
                  <label>Your message</label>
                  <textarea name="message" class="form-control" id="message" rows="6" disabled></textarea>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <p>This form cannot be submitted right now. If you are the site owner, refer to the theme
                      documentation for help.</p>
                  </div>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>

      {% endif %}
    </div>
  </div>
  </div>
</section>


<div class="contactus-3 fullWidth">
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50689.30282255703!2d-122.1485251304806!3d37.43518114812898!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb07b9dba1c39%3A0xe1ff55235f576cf!2sPalo%20Alto%2C%20CA!5e0!3m2!1sen!2sus!4v1605346276768!5m2!1sen!2sus" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
</div>
