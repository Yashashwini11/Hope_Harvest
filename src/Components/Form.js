import React from 'react'
function Form() {
  return (
    <>
	<form>
    <div class="page-content">
		<div class="form-v10-content">
			<form class="form-detail" action="#" method="post" id="myform">
				<div class="form-left">
					<h2>General Infomation</h2>
					<div class="form-row">
                            <input type="text" name="first_name" id="first_name" class="input-text" placeholder="First Name" required />

						<span class="select-btn">
						  	<i class="zmdi zmdi-chevron-down"></i>
						</span>
					</div>
					<div class="form-group">
						<div class="form-row form-row-1">
							<input type="number" name="first_name" id="first_name" class="input-text" placeholder="Age" required />
						</div>
						<div class="form-row form-row-2">
							<input type="date" name="last_name" id="last_name" class="input-text" placeholder="Date Of Birth" required />
						</div>
					</div>
					<div class="form-row">
							<input type="number" name="last_name" id="amount" class="input-text" placeholder="Amount to be raised" required />

						<span class="select-btn">
						  	<i class="zmdi zmdi-chevron-down"></i>
						</span>
					</div>
					<div class="form-group">
						<div class="form-row form-row-3">
							<input type="text" name="business" class="business" id="business" placeholder="Location" required />
						</div>
						<div class="form-row form-row-4">
							<select name="employees">
							    <option value="employees">Medical care</option>
							    <option value="trainee">Education</option>
							    <option value="colleague">Pets</option>
							    <option value="associate">Natural disasters</option>
							    <option value="associate">Poverty</option>
							    <option value="associate">Oldage homes</option>
							    <option value="associate">Women & girls</option>
							    <option value="associate">Non-Profit</option>
							</select>
							<span class="select-btn">
							  	<i class="zmdi zmdi-chevron-down"></i>
							</span>
						</div>
					</div>
					<div class="form-row">
						<input type="text" name="company" class="company" id="company" placeholder="Reason to raise fund" required />
					</div>
					<div class="form-row">
                        <label>Photo of affected person</label>
						<input type="file" name="company" class="company" id="company" placeholder="Photo of affected person" required />
					</div>
				</div>
				<div class="form-right">
					<h2>Contact Details</h2>
					<div class="form-row">
						<input type="text" name="street" class="street" id="street" placeholder="Street + Nr" required />
					</div>
					<div class="form-row">
						<input type="text" name="additional" class="additional" id="additional" placeholder="Additional Information" required />
					</div>
					<div class="form-group">
						<div class="form-row form-row-1">
							<input type="text" name="zip" class="zip" id="zip" placeholder="Zip Code" required />
						</div>
						<div class="form-row form-row-2">
							<select name="place">
							    <option value="place">Place</option>
							    <option value="Street">Street</option>
							    <option value="District">District</option>
							    <option value="City">City</option>
							</select>
							<span class="select-btn">
							  	<i class="zmdi zmdi-chevron-down"></i>
							</span>
						</div>
					</div>
					<div class="form-row">
						<select name="country">
						    <option value="country">Country</option>
						    <option value="Vietnam">Vietnam</option>
						    <option value="Malaysia">Malaysia</option>
						    <option value="India">India</option>
						</select>
						<span class="select-btn">
						  	<i class="zmdi zmdi-chevron-down"></i>
						</span>
					</div>
					<div class="form-group">
						<div class="form-row form-row-1">
							<input type="text" name="code" class="code" id="code" placeholder="Code +" required/>
						</div>
						<div class="form-row form-row-2">
							<input type="text" name="phone" class="phone" id="phone" placeholder="Phone Number" required />
						</div>
					</div>
					<div class="form-row">
						<input type="text" name="your_email" id="your_email" class="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" placeholder="Your Email"/>
					</div>
					<div class="form-checkbox">
						<label class="container"><p>I do accept the <span class="text">Terms and Conditions</span> of your site.</p>
						  	<input type="checkbox" name="checkbox"/>
						  	<span class="checkmark"></span>
						</label>
					</div>
					<div class="form-row-last">
						<input type="submit" name="register" class="register" value="RAISE"/>
					</div>
				</div>
			</form>
		</div>
	</div>
	</form>
    </>
  )
}

export default Form