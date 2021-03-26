<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
	<%
	String name = request.getParameter("name");
	String major = request.getParameter("major");//값을 담아서 h2와 같이 화면에 보여주겠다는 뜻
	String passwd = request.getParameter("passwd");
	%>
	<h2>이름:<%=name %></h2>
	<h2>전공:<%=major %></h2>
	<h2>비밀번호:<%=passwd %></h2>

</body>
</html>