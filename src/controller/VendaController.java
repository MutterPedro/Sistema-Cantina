package controller;

import java.util.List;

import model.Venda;
import model.VendaDAO;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.util.extjs.ExtJSJson;

@Resource
public class VendaController {
	private VendaDAO dao;
	private final Result result;
	
	public VendaController(VendaDAO dao,Result result){
		this.dao = dao;
		this.result = result;
	}
	
	@Post
	@Path("venda/add")
	public void addContato(Venda venda){
		VendaDAO p = new VendaDAO();	
		p.inserirVenda(venda);		
		System.out.println("------> "+venda.getTotal());
		result.nothing();

	}
	
	@Post
	@Path("venda/update")
	public void atuContato(Venda venda){
		VendaDAO p = new VendaDAO();
		System.out.println("edit------> "+venda.getTotal());
		p.alterarVenda(venda);
		result.nothing();
	}
	
	@Path("venda/pesquisar")
	public void pesquisarContato(String nome){
		VendaDAO p = new VendaDAO();
		System.out.println("pesquisa------> "+nome);
		List<Venda> lista = p.pesquisarVenda(nome);
		
		
		/*System.out.println("Nome: "+lista.get(0).getNome());
		System.out.println("Idade: "+lista.get(0).getIdade());
		System.out.println("Sexo: "+lista.get(0).getSexo());
		System.out.println("Endereco: "+lista.get(0).getEndereco());*/
		result.use(ExtJSJson.class).from(lista).success(true).serialize();
	}
	
	@Path("venda/remove")
	public void removerContato(Long id){
		VendaDAO p = new VendaDAO();
		System.out.println("rem------> "+id);
		p.removerVenda(id);
		result.nothing();
	}
	
	@Get
	@Path("venda/list")
	public void listar(String nome){
		VendaDAO p = new VendaDAO();
		List<Venda> lista;
		if(nome==null){
			lista = p.listaTudo();
		}
		else{
			lista= p.pesquisarVenda(nome);
		}
		
		result.use(ExtJSJson.class).from(lista).success(true).serialize();
	}
	
	@Post
	@Path("venda/fiado")
	public void fiado(String matricula,float valor){
		dao.porNaConta(matricula, valor);
		result.nothing();
	}
}
