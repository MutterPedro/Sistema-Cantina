<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<form action="addContato">
    <fieldset>
      <legend>Adicionar Contato</legend>
      
      <label for="nome">Nome:</label>
      <input id="nome" type="text" name="pessoa.nome"/>
      
      <label for="Idade">Idade:</label>
      <input id="idade" type="text" name="pessoa.idade"/>
     
      <label for="Sexo">Sexo:</label>
      <input id="sexo" type="text" name="pessoa.sexo"/>   
      
      <label for="Endereço"><br><br>Endereço:</label>
      <textarea id="endereco" name="pessoa.endereco"></textarea>
      <br><br>
      
      <fieldset>
      <legend>Contato</legend>
      
      <label for="ddi">DDI:</label>
      <input id="ddi" type="text" name="telefone.ddi"/>
      
      <label for="ddd">DDD:</label>
      <input id="ddd" type="text" name="telefone.ddd"/>
      
      <label for="numero">Numero:</label>
      <input id="numero" type="text" name="telefone.numero"/>
      <br><br>
      <label for="tipo">Tipo:</label>
      <input id="Tipo" type="text" name="telefone.tipo"/>
      </fieldset>
      
        <br><br>
      <button type="submit">Enviar</button>
   </fieldset>
 </form>

</body>
</html>