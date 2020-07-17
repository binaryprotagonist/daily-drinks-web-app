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
        <a class="header_font nav-link" href="#">Orders</a>
      </li>

      <li class="nav-item">
        <a class="header_font nav-link" href="#"><img src="../assets/images/cart.svg" class="img-fluid1"/></a>
      </li>

     
      
    </ul>
   
  </div>
  </div>
</nav>

<!-- Cart -->

		<div class="cart_section">
			<div class="container">
				<h3 class="head_order">Order Details</h3>
				<div class="row">
					<div class="col">
						<div class="container mb-4">
    <div class="row">
        <div class="col-12">
            <div class="table-responsive"> <h3 class="haed_2">Active orders</h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Product Image </th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Delivery Date</th>
                            <th scope="col" class="text-center">Quantity</th>
                            <th scope="col" class="text-right">Price</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                       
                         <tr>
                            <td><img src="../assets/images/2.jpg" class="img_rest1" /> </td>
                            <td>Jim Beam Whiskey</td>
                            <td>618, Skhekar Central (Indore)</td>
                            <td>24/08/2020</td>
                            <td><p>1</p></td>
                            <td class="text-right">$60</td>
                            <td class="text-right"> <router-link to="/UpdateDetail"><button class="btn btn-sm btn-danger margin"><i class="fa fa-pencil"></i> </button></router-link> 
                         <button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> 
                            </td>
                           
                        </tr>

                         <tr>
                            <td><img src="../assets/images/4.jpg" class="img_rest1" /> </td>
                            <td>Wild Turkey 101</td>
                            <td>618, Skhekar Complex (Indore)</td>
                            <td>30/08/2020</td>
                            <td><p>1</p></td>
                            <td class="text-right">$100</td>
                            <td class="text-right"><button class="btn btn-sm btn-danger margin"><i class="fa fa-pencil"></i> </button> 
                         <button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> 
                            </td>
                           
                        </tr>
                        <h3 class="haed_2">Past orders</h3>

                         <tr>
                            <td><img src="../assets/images/5.jpg" class="img_rest1" /> </td>
                            <td>Jim Beam Bourbon Whiskey</td>
                            <td>1001, Opposite Meghdoot Garden (Indore)</td>
                            <td><p class="del_al">Delivered</p></td>
                            <td><p>3</p></td>
                            <td class="text-right">$900</td>
                            <td class="text-right"><button class="btn btn-sm btn-danger margin"><i class="fa fa-pencil"></i> </button> 
                         <button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> 
                            </td>
                           
                        </tr>

                         <tr>
                            <td><img src="../assets/images/3.jpg" class="img_rest1" /> </td>
                            <td>Maker's Mark Bourbon Whisky</td>
                            <td>918,Vijay Nagar (Indore)</td>
                            <td><p class="del_al">Delivered</p></td>
                            <td><p>1</p></td>
                            <td class="text-right">$200</td>
                            <td class="text-right"><button class="btn btn-sm btn-danger margin"><i class="fa fa-pencil"></i> </button> 
                         <button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> 
                            </td>
                           
                        </tr>


                         <tr>
                            <td><img src="../assets/images/1.jpeg" class="img_rest1" /> </td>
                            <td>Bulleit Bourbon</td>
                            <td>118, Scheme No.54 (Indore)</td>
                            <td class="color-success"><p class="del_al">Delivered</p></td>
                            <td><p>4</p></td>
                            <td class="text-right">$500</td>
                            <td class="text-right"><button class="btn btn-sm btn-danger margin"><i class="fa fa-pencil"></i> </button> 
                         <button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> 
                            </td>
                           
                        </tr>
                       
                       
                        
                    </tbody>
                </table>
            </div>
        </div>
        
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
    name:'Order'
}
</script>

<style>
.margin
{
	margin-right: 15px;
}
img.img_rest1 {
    height: 80px;
    text-align: center;
    display: block;
    margin: 0 auto;
}
h3.head_order {
    text-align: center;
    display: block;
    width: 100%;
    color: #000;
    font-size: 30px;
    padding-bottom: 45px;
}
.table thead th
{
	text-align: center;
	color: #000;
}
.table td, .table th
{
	text-align: center;
}

p.del_al {
    color: #00ff00;
    font-weight: bold;
}
h3.haed_2 {
    color: #000;
    padding-top: 15px;
}
</style>