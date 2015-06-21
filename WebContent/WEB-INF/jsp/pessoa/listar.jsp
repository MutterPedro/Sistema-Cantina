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
      <th>Nome</th>
      <th>Idade</th>
      <th>Sexo</th>
      <th>Endereço</th>
    </tr>
  </thead>
  <tbody>
    <c:forEach items="${pessoaList}" var="pessoa">
      <tr>
        <td><a href="<c:url value="edita?id=${pessoa.id}"/>">${pessoa.nome}</a></td>
        <td>${pessoa.idade}</td>
        <td>${pessoa.sexo}</td>
        <td>${pessoa.endereco}</td>
        <td><a href="<c:url value="/telefone/listar?id=${pessoa.id}"/>">Contato(s)</a></td>
        <td><a href="<c:url value="removerContato?id=${pessoa.id}"/>">Remover</a></td>
      </tr>          
    </c:forEach>
  </tbody>
</table>

</body>
</html>