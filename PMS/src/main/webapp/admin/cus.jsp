<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ page import="java.sql.*"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%

//out.println("server called success hi");

String fname=request.getParameter("fname");
String lname=request.getParameter("lname");
String age = request.getParameter("age");
int agevalue = 0;  // Default value or any value that makes sense in case of null

if (age != null && !age.isEmpty()) {
    try {
        agevalue = Integer.parseInt(age);
    } catch (NumberFormatException e) {
        // Handle the case where 'age' is not a valid integer
        e.printStackTrace();  // Log the exception or take appropriate action
    }
}
String gender=request.getParameter("gender");
String mobile=request.getParameter("mobile");
String email=request.getParameter("email");
String password=request.getParameter("pass");

try{
	Class.forName("com.mysql.cj.jdbc.Driver");
	Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/ibm", "root", "1234");
	String sql="insert into pms(firstname,lastname,age,gender, mobile,email,password)values(?,?,?,?,?,?,?)";
	PreparedStatement ps = con.prepareStatement(sql);
	ps.setString(1,fname);
	ps.setString(2,lname);
	ps.setInt(3, agevalue);
	ps.setString(4,gender);
	ps.setString(5,mobile);
	ps.setString(6,email);
	ps.setString(7,password);
	int i =ps.executeUpdate();
	if(i>0){
		out.println("registration  success hi");
	}
	
}
catch(Exception e){
	e.printStackTrace();
}
%>

</body>
</html>