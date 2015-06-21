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
public class ProdutoController {
	private ProdutoDAO dao;
	private final Result result;
	
	public ProdutoController(ProdutoDAO dao,Result result){
		this.dao = dao;
		this.result = result;
	}
	
	@Post
	@Path("produto/add")
	public void addContato(Produto produto){
		ProdutoDAO p = new ProdutoDAO();	
		p.inserirProduto(produto);		
		System.out.println("------> "+produto.getNome());
		result.nothing();

	}
	
	@Post
	@Path("produto/update")
	public void atuContato(Produto produto){
		ProdutoDAO p = new ProdutoDAO();
		System.out.println("edit------> "+produto.getNome());
		p.alterarProduto(produto);
		result.nothing();
	}
	
	@Path("produto/pesquisar")
	public void pesquisarContato(Long id){
		ProdutoDAO p = new ProdutoDAO();
		System.out.println("pesquisa------> "+id);
		Produto busca = p.carrega(id);
		
		
		/*System.out.println("Nome: "+lista.get(0).getNome());
		System.out.println("Idade: "+lista.get(0).getIdade());
		System.out.println("Sexo: "+lista.get(0).getSexo());
		System.out.println("Endereco: "+lista.get(0).getEndereco());*/
		result.use(ExtJSJson.class).from(busca).success(true).serialize();
	}
	
	@Post
	@Path("produto/remove")
	public void removerContato(Long id){
		ProdutoDAO p = new ProdutoDAO();
		System.out.println("rem------> "+id);
		p.removerProduto(id);
		result.nothing();
	}
	
	@Get
	@Path("produto/list")
	public void listar(String nome){
		ProdutoDAO p = new ProdutoDAO();
		List<Produto> lista;
		if(nome==null){
			lista = p.listaTudo();
		}
		else{
			lista= p.pesquisarProduto(nome);
		}
		
		result.use(ExtJSJson.class).from(lista).success(true).serialize();
	}
	
	@Path("produto/estocar")
	public void inserirEstoque(Long id, int qtde){
		ProdutoDAO p = new ProdutoDAO();
		p.adicionarNoEstoque(id, qtde);
	}
	public Produto edita(Long id) {		
		    return dao.carrega(id);
	}
}

