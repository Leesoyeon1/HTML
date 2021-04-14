<%@page import="boardPkg.Board"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%@page import="boardPkg.Board"%>
	<%@page import="boardPkg.BoardDAO" %>
<%
String bno = request.getParameter("boardNo");//bNo의 파라미터의 값을 읽어옴
String til = request.getParameter("title");
String cnt = request.getParameter("content");
String wrt = request.getParameter("writer");
//{"name":"Hong","age":10)

int boardNo = Integer.parseInt(bno);

Board board = new Board();
BoardDAO dao = new BoardDAO();

board.setBoardNo(boardNo);
board.setTitle(til);
board.setContent(cnt);
board.setWriter(wrt);

dao.insertBoard(board);

String result = "{\"boardNo\":\"" + boardNo + "\"," //
		+ "\"title\":\"" + til + "\"," //
		+ "\"content\":\"" + cnt + "\","//
		+ "\"writer\":\"" + wrt + "\"}";
out.print(result);
//{"boardNo":"1","title":"test","content":"test","writer":"user1"}
%>