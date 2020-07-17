<template>
<div>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <div class="container">
  <a class="navbar-brand" href="#">
  <div class="logo">
        <a href="#">
          <div class="d-flex flex-row align-items-center justify-content-start">
            <div><img src="../assets/images/logo_1.png" alt=""></div>
            <div>Drinks</div>
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
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Orders</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#"><img src="../assets/images/cart.svg" class="img-fluid1"/></a>
      </li>

     
      
    </ul>
   
  </div>
  </div>
</nav>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/images/home.jpg" class="" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/images/home.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/images/home.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<div class="products">
      <div class="container">
        <div class="row">

          
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
                      <div class="footer_logo_icon"><img src="../assets/images/logo_2.png" alt=""></div>
                      <div>Drinks</div>
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

 <p class="text-center">All Right Reserved</p></div>
               
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
    name:'Productdetail'
}

</script>
<style>
img.img-fluid1 {
    height: 30px;
}
.product_image {
    height: 505px;
    width: 100%;
    border: 1px solid #171919;
}
</style>