package controller;

import model.*;

import java.util.List;

import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.util.extjs.ExtJSJson;


@Resource
public class ClienteController {
	private ClienteDAO dao;
	private final Result result;
	
	public ClienteController(ClienteDAO dao,Result result){
		this.dao = dao;
		this.result = result;
	}
	
	@Post
	@Path("cliente/add")
	public void addContato(Cliente cliente){
		ClienteDAO p = new ClienteDAO();	
		p.inserirCliente(cliente);		
		System.out.println("------> "+cliente.getNome());
		result.nothing();

	}
	
	@Post
	@Path("cliente/update")
	public void atuContato(Cliente cliente){
		ClienteDAO p = new ClienteDAO();
		System.out.println("edit------> "+cliente.getNome());
		p.alterarCliente(cliente);
		result.nothing();
	}
	
	@Path("cliente/pesquisar")
	public void pesquisarContato(String nome){
		ClienteDAO p = new ClienteDAO();
		System.out.println("pesquisa------> "+nome);
		List<Cliente> lista = p.pesquisarCliente(nome);
		
		
		/*System.out.println("Nome: "+lista.get(0).getNome());
		System.out.println("Idade: "+lista.get(0).getIdade());
		System.out.println("Sexo: "+lista.get(0).getSexo());
		System.out.println("Endereco: "+lista.get(0).getEndereco());*/
		result.use(ExtJSJson.class).from(lista).success(true).serialize();
	}
	
	@Path("cliente/remove")
	public void removerContato(Long id){
		ClienteDAO p = new ClienteDAO();
		System.out.println("rem------> "+id);
		p.removerCliente(id);
		result.nothing();
	}
	
	@Get
	@Path("cliente/list")
	public void listar(String nome){
		ClienteDAO p = new ClienteDAO();
		List<Cliente> lista;		
		if(nome==null){
			lista = p.listaTudo();
		}
		else{
			lista= p.pesquisarCliente(nome);
		}
		
		result.use(ExtJSJson.class).from(lista).success(true).serialize();
	}
	
	public void formulario(){
		
	}
	public Cliente edita(Long id) {		
		    return dao.carrega(id);
	}
	public void pesquisar(){
		
	}
}

