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
	String major = request.getParameter("major");//���� ��Ƽ� h2�� ���� ȭ�鿡 �����ְڴٴ� ��
	String passwd = request.getParameter("passwd");
	%>
	<h2>�̸�:<%=name %></h2>
	<h2>����:<%=major %></h2>
	<h2>��й�ȣ:<%=passwd %></h2>

</body>
</html>