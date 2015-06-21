<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<table>
  <thead>
    <tr>
      <th>DDI</th>
      <th>DDD</th>
      <th>Número</th>
      <th>Tipo</th>
    </tr>
  </thead>
  <tbody>
    <c:forEach items="${telefoneList}" var="telefone">
      <tr>
        <td>${telefone.ddi}</td>
        <td>${telefone.ddd}</td>
        <td>${telefone.numero}</td>
        <td>${telefone.tipo}</td>
        <td><a href="<c:url value="removerTelefone?id=${telefone.id}"/>">Remover</a></td> 
      </tr>
      <td><a href="<c:url value="formulario?id=${telefone.pessoa.id}"/>">Novo</a></td>          
    </c:forEach>
  </tbody>
  <br><br>
</table>

</body>
</html>