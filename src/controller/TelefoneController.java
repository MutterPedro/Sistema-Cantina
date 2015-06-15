package controller;
import java.util.List;

import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.util.extjs.ExtJSJson;
import model.*;

@Resource
public class TelefoneController {
	private TelefoneDAO dao;
	private final Result result;
	
	public TelefoneController(TelefoneDAO dao, Result result){
		this.dao = dao;
		this.result = result;
	}
	
	@Post
	@Path("telefone/add")
	public void addTelefone(Telefone telefone){
		
		System.out.println("addTel--------------> "+telefone.getPessoa().getId());
		//System.out.println(ID);
		ClienteDAO p = new ClienteDAO();
		Pessoa pessoa = p.carrega(telefone.getPessoa().getId());
		telefone.setPessoa(pessoa);
		dao.inserirTelefone(telefone);
		result.nothing();
	}
	
	@Get
	@Path("telefone/list")
	public void listar(Long id){
		List<Telefone> lista = dao.pesquisarTelefone(id);
		System.out.println("--------------> "+id);
		result.use(ExtJSJson.class).from(lista).success(true).serialize();
	}
	
	
	public Pessoa formulario(Long id){
		ClienteDAO p = new ClienteDAO();
		Pessoa pessoa = p.carrega(id);
		return pessoa;
	}
	
	@Path("telefone/remove")
	public void removerTelefone(Long id){
		dao.removerTelefone(id);
		String n = null;
		result.redirectTo(ClienteController.class).listar(n);
	}
		
	
}
