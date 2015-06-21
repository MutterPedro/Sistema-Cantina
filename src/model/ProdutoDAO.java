package model;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.AnnotationConfiguration;
import org.hibernate.criterion.Restrictions;
import br.com.caelum.vraptor.ioc.Component;

@Component
public class ProdutoDAO {
	public void inserirProduto(Produto produto){
	    AnnotationConfiguration configuration = new AnnotationConfiguration();
	    configuration.configure();     
	    SessionFactory factory = configuration.buildSessionFactory();
	    Session session = factory.openSession();
	   
	    Transaction tx = session.beginTransaction();
	    
	    session.save(produto);        
	    tx.commit();
	}
	
	public void alterarProduto(Produto p){
		AnnotationConfiguration configuration = new AnnotationConfiguration();
		configuration.configure();
			
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();
		
		// carrega o produto do banco de dados
		//Produto Produto = (Produto) session.load(Produto.class, p.getId());
		Transaction tx = session.beginTransaction();
		session.update(p);
		tx.commit();
	}
	
	public void removerProduto(Long id){
		AnnotationConfiguration configuration = new AnnotationConfiguration();
		configuration.configure();
		     
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();
		     
		Criteria criteria = session.createCriteria(Produto.class);
		criteria.add(Restrictions.eq("id", id));
		Produto Produto = (Produto) criteria.uniqueResult();
		     
		Transaction tx = session.beginTransaction();
		Produto.setDeleted(true);
		session.update(Produto);
		tx.commit();

	}
	
	public List<Produto> pesquisarProduto(String nome){
		AnnotationConfiguration configuration = new AnnotationConfiguration();
		configuration.configure();
		     
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();

		Criteria criteria = session.createCriteria(Produto.class);
		criteria.add(Restrictions.eq("nome", nome));
		criteria.add(Restrictions.eq("deleted", false));
		List<Produto> list_Produtos = criteria.list();
		
		return list_Produtos;
		
		
	}
	
	public List<Produto> listaTudo() {
		AnnotationConfiguration configuration = new AnnotationConfiguration();
		configuration.configure();
		     
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();
		Criteria criteria = session.createCriteria(Produto.class);
		criteria.add(Restrictions.eq("deleted", false));
	    return (List<Produto>) criteria.list();
	  }
	
	public Produto carrega(Long id){
		AnnotationConfiguration configuration = new AnnotationConfiguration();
		configuration.configure();
		     
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();
		Criteria criteria = session.createCriteria(Produto.class);
		criteria.add(Restrictions.eq("id", id));
		criteria.add(Restrictions.eq("deleted", false));
		Produto p =(Produto) criteria.uniqueResult();
		return p;
	}
	
	public void adicionarNoEstoque(Long id, int qtde){
		AnnotationConfiguration configuration = new AnnotationConfiguration();
		configuration.configure();
			
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();
		
		Criteria criteria = session.createCriteria(Produto.class);
		criteria.add(Restrictions.eq("id", id));
		Produto p =(Produto) criteria.uniqueResult();
		p.setQtdeEstoque(p.getQtdeEstoque()+qtde);
		
		Transaction tx = session.beginTransaction();
		session.update(p);
		tx.commit();
	}
}
