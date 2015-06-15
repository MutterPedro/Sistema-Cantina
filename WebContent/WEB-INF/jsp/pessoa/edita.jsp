<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<form action="atuContato">
  <fieldset>
    <legend>Editar Contato</legend>
    
    <input type="hidden" name="pessoa.id" 
      value="${pessoa.id }" /> 
    
    <label for="nome">Nome:</label>
    <input id="nome" type="text" 
      name="pessoa.nome" value="${pessoa.nome }"/>
      
    <label for="idade">Idade:</label>
    <input id="idade" type="text" 
      name="pessoa.idade" value="${pessoa.idade }"/>
      
    <label for="sexo">Sexo:</label>
    <input id="sexo" type="text" 
      name="pessoa.sexo" value="${pessoa.sexo }"/>
      <br><br>
    <label for="endereco">Endereço:</label>
    <input id="endereco" name="pessoa.endereco" value="${pessoa.endereco}"/>    
  	<br><br>
  
    <button type="submit">Enviar</button>
  </fieldset>
</form>


</body>
</html>