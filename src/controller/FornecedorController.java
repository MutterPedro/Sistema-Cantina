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
public class FornecedorController {
	private FornecedorDAO dao;
	private final Result result;
	
	public FornecedorController(FornecedorDAO dao,Result result){
		this.dao = dao;
		this.result = result;
	}
	
	@Post
	@Path("fornecedor/add")
	public void addContato(Fornecedor fornecedor){
		FornecedorDAO p = new FornecedorDAO();	
		p.inserirFornecedor(fornecedor);		
		System.out.println("------> "+fornecedor.getNome());
		result.nothing();

	}
	
	@Post
	@Path("fornecedor/update")
	public void atuContato(Fornecedor fornecedor){
		FornecedorDAO p = new FornecedorDAO();
		System.out.println("edit------> "+fornecedor.getNome());
		p.alterarFornecedor(fornecedor);
		result.nothing();
	}
	
	@Path("fornecedor/pesquisar")
	public void pesquisarContato(String nome){
		FornecedorDAO p = new FornecedorDAO();
		System.out.println("pesquisa------> "+nome);
		List<Fornecedor> lista = p.pesquisarFornecedor(nome);
		
		
		/*System.out.println("Nome: "+lista.get(0).getNome());
		System.out.println("Idade: "+lista.get(0).getIdade());
		System.out.println("Sexo: "+lista.get(0).getSexo());
		System.out.println("Endereco: "+lista.get(0).getEndereco());*/
		result.use(ExtJSJson.class).from(lista).success(true).serialize();
	}
	
	@Path("fornecedor/remove")
	public void removerContato(Long id){
		FornecedorDAO p = new FornecedorDAO();
		System.out.println("rem------> "+id);
		p.removerFornecedor(id);
		result.nothing();
	}
	
	@Get
	@Path("fornecedor/list")
	public void listar(String nome){
		FornecedorDAO p = new FornecedorDAO();
		List<Fornecedor> lista;
		if(nome==null){
			lista = p.listaTudo();
		}
		else{
			lista= p.pesquisarFornecedor(nome);
		}
		
		result.use(ExtJSJson.class).from(lista).success(true).serialize();
	}
	
	public void formulario(){
		
	}
	public Fornecedor edita(Long id) {		
		    return dao.carrega(id);
	}
	public void pesquisar(){
		
	}
}

