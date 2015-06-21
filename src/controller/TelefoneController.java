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
	@Path("telefone/add-cliente")
	public void addTelefoneCliente(Telefone telefone){		
		System.out.println("addTel--------------> "+telefone.getCliente().getId());
		//System.out.println(ID);
		ClienteDAO p = new ClienteDAO();
		Cliente pessoa = p.carrega(telefone.getCliente().getId());
		telefone.setCliente(pessoa);
		dao.inserirTelefone(telefone);
		result.nothing();
	}
	
	@Post
	@Path("telefone/add-fornecedor")
	public void addTelefoneFornecedor(Telefone telefone){
		
		System.out.println("addTel--------------> "+telefone.getFornecedor().getId());
		//System.out.println(ID);
		FornecedorDAO p = new FornecedorDAO();
		Fornecedor pessoa = p.carrega(telefone.getFornecedor().getId());
		telefone.setFornecedor(pessoa);
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
	
		
	@Path("telefone/remove")
	public void removerTelefone(Long id){
		dao.removerTelefone(id);
		String n = null;
		result.redirectTo(ClienteController.class).listar(n);
	}
		
	
}
