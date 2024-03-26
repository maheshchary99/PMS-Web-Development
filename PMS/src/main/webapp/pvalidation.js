/**
 * 
 */
 function validationPatientReg()
 {
	 
	 var count = 0;
	 //FirstName validation
	 const fn = document.getElementById("fname").value;
	 
	 let fnameformat= /^[a-zA-Z\s]+$/;
	 
	 //alert(fn);
	 if(fn=="")
	 {
		 document.getElementById("v3").innerHTML='Fields should not be empty !!';
		 
	 }
	 else if(fnameformat.test(fn))
	 {
		 //alert("Input is Good");
		 
		 document.getElementById("v2").innerHTML='First Name Accepted';
		 count++;
	 }
	 else{
		// alert("Invalid input");
		document.getElementById("v1").innerHTML='Invalid Name- Use only characters';
		//focus();
		//document.getElementById('v1').focus();
		
	 }
	 // LastName Validation
	 const ln = document.getElementById("lname").value;
	 let lnameformat = /^[a-zA-Z\s]+$/;
	 
	  if(lnameformat.test(ln))
	 {
		 //alert("Input is Good");
		 
		 document.getElementById("m2").innerHTML='Last Name Accepted';
		 count++;
	 }
	 else{
		// alert("Invalid input");
		document.getElementById("m1").innerHTML='Invalid Name- Use only characters';
		//focus();
		//document.getElementById('v1').focus();
		
	 }
	 
	 const a = document.getElementById("age").value;
	 let ageformat=/^\d+$/;
	 if(ageformat.test(a))
	 {
		 //alert("Input is Good");
		
		 document.getElementById("n2").innerHTML='Age Accepted';
		 count++;
	 }
	 else{
		 document.getElementById("n1").innerHTML='Please enter Only numbers';
		 
	 }
	 
	 const mob = document.getElementById("mobile").value;
	 let mobileformat = /^(\+91)[789]{1}\d{9}$/;
	 if(mobileformat.test(mob))
	 {
		 //alert("Input is Good");
		 
		 document.getElementById("o2").innerHTML='Mobile Number Accepted';
		 count++;
	 }
	 else
	 {
		 document.getElementById("o1").innerHTML='Enter 10 Digits or Enter valid Indian Format-starts with 6,7,8,9';
		 
	 }
	 
	 const email = document.getElementById("email").value;
	 let emailformat = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
	 if(emailformat.test(email))
	 {
		 
		 document.getElementById("p2").innerHTML='Email id Accepted';
		 count++;
	 }
	 else{
		 document.getElementById("p1").innerHTML='Enter Valid Email Id';
	 }
	 
	 const pass = document.getElementById("pass").value;
	 let passformat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
	 if(passformat.test(pass))
	 {
		
		  document.getElementById("r2").innerHTML=' Password is Accepted';
		  count++;
	 }
	 else{
		  document.getElementById("r1").innerHTML='Enter Minimum eight characters, at least one letter and one number:';
	 }
	
	console.log(count);
	
	
	 //document.write(count);
	 if(count==6)
	 {
		// alert("hi");
		//preg.action="../Patient/patientreg.jsp";
		//window.location.href="../Patient/patientreg.jsp";
		
	 }
	 else
	 {
		 event.preventDefault(); // it will not reload a web page
	 }
	 
 }
