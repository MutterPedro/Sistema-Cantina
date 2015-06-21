<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<form action ="addTelefone">
      <fieldset>
      <legend>Contato</legend>
      
      
      <input id="id" type="hidden" name="telefone.pessoa.id" value="${pessoa.id}"/>
      
      <label for="ddi">DDI:</label>
      <input id="ddi" type="text" name="telefone.ddi"/>
      
      <label for="ddd">DDD:</label>
      <input id="ddd" type="text" name="telefone.ddd"/>
      
      <label for="numero">Numero:</label>
      <input id="numero" type="text" name="telefone.numero"/>
      <br><br>
      <label for="tipo">Tipo:</label>
      <input id="Tipo" type="text" name="telefone.tipo"/>
        
       
      <br><br>
      <button type="submit">Enviar</button>
      </fieldset>
     </form>

</body>
</html>