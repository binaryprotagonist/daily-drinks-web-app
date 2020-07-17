<template>
<div>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <div class="container">
  <a class="navbar-brand" href="#">
  <div class="logo">
        <a href="#">
          <div class="d-flex flex-row align-items-center justify-content-start">
            <div><img src="../assets/images/logo_footer.png" class="img_top" alt=""></div>
            <div>Daily Drinks</div>
          </div>
        </a>  
      </div>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
      <router-link to="/"><a class="header_font nav-link">Home <span class="sr-only">(current)</span></a></router-link>  
      </li>
      <li class="nav-item">
          <router-link to="/order"><a class="header_font nav-link">Orders</a></router-link>
      </li>

      <li class="nav-item">
        <a class="header_font nav-link" href="#"><img src="../assets/images/cart.svg" class="img-fluid1"/></a>
      </li>

     
      
    </ul>
   
  </div>
  </div>
</nav>


<!-- Product -->

		<div class="product">
			<div class="container">
				<div class="row">
					
					<!-- Product Image -->
					<div class="col-lg-6">
            <img class="img-fluid" src="../assets/images/6.jpg" alt="">
					</div>

					<!-- Product Info -->
					<div class="col-lg-6 product_col">
						<div class="product_info">
							<div class="product_name">Pretty Things Jack D
</div>
							<div class="product_category">In <a href="category.html">Category</a></div>
							<div class="product_rating_container d-flex flex-row align-items-center justify-content-start">
								<div class="rating_r rating_r_4 product_rating"><i></i><i></i><i></i><i></i><i></i></div>
								<div class="product_reviews">4.7 out of (3514)</div>
								<div class="product_reviews_link"><a href="#">Reviews</a></div>
							</div>
							<div class="product_price"><span>$99</span></div>
							
							<div class="product_text">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec consequat lorem. Maecenas elementum at diam consequat bibendum. Mauris iaculis fringilla ex, sit amet semper libero facilisis sit amet. Nunc ut aliquet metus. Praesent pulvinar justo sed velit tempus bibendum. Quisque dictum lorem id mi viverra, in auctor justo laoreet. Nam at massa malesuada, ullamcorper metus vel, consequat risus. Phasellus ultricies velit vel accumsan porta.</p>
							</div>
							<div class="product_buttons">
              <h4>Select Quantity</h4>
							<div class="product_quantity_container">
                      <div class="product_quantity  text-center">
                        <span class="product_text product_num">1</span>
                        <div class="qty_sub qty_button trans_200 text-center"><span>-</span></div>
                        <div class="qty_add qty_button trans_200 text-center"><span>+</span></div>
                      </div>
                    </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

    <div class="container width_custom">
   <div class="row">
    <div class="col-md-4 order-md-2 mb-4">
      <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-muted">Your cart</span>
        <span class="badge badge-secondary badge-pill">1</span>
      </h4>
      <ul class="list-group mb-3">
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">Pretty Things Jack D</h6>
            <small class="text-muted">Brief description</small>
          </div>
          <span class="text-muted">$99</span>
        </li>
      
        
        <li class="list-group-item d-flex justify-content-between bg-light">
          <div class="text-success">
            <h6 class="my-0">Promo code</h6>
            <small>EXAMPLECODE</small>
          </div>
          <span class="text-success">-$5</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>$100</strong>
        </li>
      </ul>

      <form class="card p-2">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Promo code">
          <div class="input-group-append">
            <button type="submit" class="btn btn-secondary">Redeem</button>
          </div>
        </div>
      </form>
    </div>
    <div class="col-md-8 order-md-1">
      <h4 class="mb-3">Billing address</h4>
      <form class="needs-validation">
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="firstName">First name</label>
            <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="lastName">Last name</label>
            <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
            <div class="invalid-feedback">
              Valid last name is required.
            </div>
          </div>
        </div>

        

        <div class="mb-3">
          <label for="email">Email <span class="text-muted">(Optional)</span></label>
          <input type="email" class="form-control" id="email" placeholder="you@example.com">
          <div class="invalid-feedback">
            Please enter a valid email address for shipping updates.
          </div>
        </div>

        <div class="mb-3">
          <label for="address">Address</label>
          <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="">
          <div class="invalid-feedback">
            Please enter your shipping address.
          </div>
        </div>

        <div class="mb-3">
          <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
          <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">
        </div>

        <div class="row">
          <div class="col-md-5 mb-3">
            <label for="country">Country</label>
            <select class="custom-select d-block w-100" id="country" required="">
              <option value="">Choose...</option>
              <option>United States</option>
            </select>
            <div class="invalid-feedback">
              Please select a valid country.
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="state">State</label>
            <select class="custom-select d-block w-100" id="state" required="">
              <option value="">Choose...</option>
              <option>California</option>
            </select>
            <div class="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="zip">Zip</label>
            <input type="text" class="form-control" id="zip" placeholder="" required="">
            <div class="invalid-feedback">
              Zip code required.
            </div>
          </div>
        </div>
        <hr class="mb-4">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="same-address">
          <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="save-info">
          <label class="custom-control-label" for="save-info">Save this information for next time</label>
        </div>
        <hr class="mb-4">

        <h4 class="mb-3">Payment</h4>

        <div class="d-block my-3">
          <div class="custom-control custom-radio">
            <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="">
            <label class="custom-control-label" for="credit">Credit card</label>
          </div>
          <div class="custom-control custom-radio">
            <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="">
            <label class="custom-control-label" for="debit">Debit card</label>
          </div>
          
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="cc-name">Name on card</label>
            <input type="text" class="form-control" id="cc-name" placeholder="" required="">
            <small class="text-muted">Full name as displayed on card</small>
            <div class="invalid-feedback">
              Name on card is required
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="cc-number">Credit card number</label>
            <input type="text" class="form-control" id="cc-number" placeholder="" required="">
            <div class="invalid-feedback">
              Credit card number is required
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 mb-3">
            <label for="cc-expiration">Expiration</label>
            <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">
            <div class="invalid-feedback">
              Expiration date required
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="cc-cvv">CVV</label>
            <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
            <div class="invalid-feedback">
              Security code required
            </div>
          </div>
        </div>
        <hr class="mb-4">
        <router-link to="/order"><button class="btn btn-primary btn-lg btn-block" type="submit">Place Order</button></router-link>
      </form>
    </div>
  </div>
    </div>

		
<div class="features">
      <div class="container">
        <div class="row">
          
          <!-- Feature -->
          <div class="col-lg-4 feature_col">
            <div class="feature d-flex flex-row align-items-start justify-content-start">
              <div class="feature_left">
                <div class="feature_icon"><img src="../assets/images/icon_1.svg" alt=""></div>
              </div>
              <div class="feature_right d-flex flex-column align-items-start justify-content-center">
                <div class="feature_title">Fast Secure Payments</div>
              </div>
            </div>
          </div>

          <!-- Feature -->
          <div class="col-lg-4 feature_col">
            <div class="feature d-flex flex-row align-items-start justify-content-start">
              <div class="feature_left">
                <div class="feature_icon ml-auto mr-auto"><img src="../assets/images/icon_2.svg" alt=""></div>
              </div>
              <div class="feature_right d-flex flex-column align-items-start justify-content-center">
                <div class="feature_title">Premium Products</div>
              </div>
            </div>
          </div>

          <!-- Feature -->
          <div class="col-lg-4 feature_col">
            <div class="feature d-flex flex-row align-items-start justify-content-start">
              <div class="feature_left">
                <div class="feature_icon"><img src="../assets/images/icon_3.svg" alt=""></div>
              </div>
              <div class="feature_right d-flex flex-column align-items-start justify-content-center">
                <div class="feature_title">Free Delivery</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <footer class="footer">
      <div class="footer_content">
        <div class="container">
          <div class="row">
            
            <!-- About -->
            <div class="col-lg-4 footer_col">
              <div class="footer_about">
                <div class="footer_logo">
                  <a href="#">
                    <div class="d-flex flex-row align-items-center justify-content-start">
                      <div class="footer_logo_icon">
                      <img src="../assets/images/logo_footer.png" alt="" class="img_rest"></div>
                      <div>Daily Drinks</div>
                    </div>
                  </a>    
                </div>
                <div class="footer_about_text">
                  <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Fusce venenatis vel velit vel euismod.</p>
                </div>
              </div>
            </div>

            <!-- Footer Links -->
            <div class="col-lg-4 footer_col">
              <div class="footer_menu">
                <div class="footer_title">Support</div>
                <ul class="footer_list">
                  <li>
                    <a href="#"><div>Customer Service<div class="footer_tag_1">online now</div></div></a>
                  </li>
                  <li>
                    <a href="#"><div>Return Policy</div></a>
                  </li>
                  <li>
                    <a href="#"><div>Terms and Conditions</div></a>
                  </li>
                  <li>
                    <a href="#"><div>Contact</div></a>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Footer Contact -->
            <div class="col-lg-4 footer_col">
              <div class="footer_contact">
                <div class="footer_title">Stay in Touch</div>
                <div class="newsletter">
                  <form action="#" id="newsletter_form" class="newsletter_form">
                    <input type="email" class="newsletter_input" placeholder="Subscribe to our Newsletter" required="required">
                    <button class="newsletter_button">+</button>
                  </form>
                </div>
                <div class="footer_social">
                  <div class="footer_title">Social</div>
                  <ul class="footer_social_list d-flex flex-row align-items-start justify-content-start">
                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer_bar">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="footer_bar_content d-flex flex-md-row flex-column align-items-center justify-content-start">
                <div class="copyright order-md-1 order-2">

 <p>All Right Reserved</p></div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

</div>
</template>

<script>
export default {
    name:'Productlist'
}

</script>
<style>
img.img-fluid1 {
    height: 30px;
}
.product_image {
    height: 505px;
    width: 100%;
}
.img_top
{
  height: 47px;
}
.width_custom
{
  max-width: 1000px;
  margin: 0 auto;
}
button.btn.btn-primary.btn-lg.btn-block {
    background: #2fce98;
    border-color: #2fce98;
}
.product
{
  height: auto;
}
.product
{
  padding-bottom: 0;
}
.button
{
  width: 170px;
}
.qty_add {
    right: 6px;
    font-size: 22px;
    top: 31px;
}
.qty_sub {
    left: 5px;
    font-size: 24px;
    top: 30px;
}
.product_quantity > span {
    line-height: 38px;
    font-size: 17px;
    font-weight: 300;
    color: #4a4a4a;
    text-align: center;
    font-weight: bold;
}
.product_buttons > div > div:first-of-type
{
 border-right: solid px #ededed !important;
}
</style>
<script type="text/javascript"></script>