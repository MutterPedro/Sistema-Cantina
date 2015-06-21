package model;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.AnnotationConfiguration;
import org.hibernate.criterion.Restrictions;

import br.com.caelum.vraptor.ioc.Component;
import br.com.caelum.vraptor.ioc.SessionScoped;
import model.Fornecedor;

@Component
public class FornecedorDAO{
	public void inserirFornecedor(Fornecedor fornecedor){
	    AnnotationConfiguration configuration = new AnnotationConfiguration();
	    configuration.configure();     
	    SessionFactory factory = configuration.buildSessionFactory();
	    Session session = factory.openSession();
	   
	    Transaction tx = session.beginTransaction();
	    
	    session.save(fornecedor);        
	    tx.commit();
	}
	
	public void alterarFornecedor(Fornecedor p){
		AnnotationConfiguration configuration = new AnnotationConfiguration();
		configuration.configure();
			
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();
		
		// carrega o produto do banco de dados
		//Fornecedor Fornecedor = (Fornecedor) session.load(Fornecedor.class, p.getId());
		Transaction tx = session.beginTransaction();
		session.update(p);
		tx.commit();
	}
	
	public void removerFornecedor(Long id){
		AnnotationConfiguration configuration = new AnnotationConfiguration();
		configuration.configure();
		     
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();
		     
		Criteria criteria = session.createCriteria(Fornecedor.class);
		criteria.add(Restrictions.eq("id", id));
		Fornecedor Fornecedor = (Fornecedor) criteria.uniqueResult();
		     
		Transaction tx = session.beginTransaction();
		Fornecedor.setDeleted(true);
		session.update(Fornecedor);
		tx.commit();

	}
	
	public List<Fornecedor> pesquisarFornecedor(String nome){
		AnnotationConfiguration configuration = new AnnotationConfiguration();
		configuration.configure();
		     
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();

		Criteria criteria = session.createCriteria(Fornecedor.class);
		criteria.add(Restrictions.eq("nome", nome));
		criteria.add(Restrictions.eq("deleted", false));
		List<Fornecedor> list_Fornecedors = criteria.list();
		
		return list_Fornecedors;
		
		
	}
	
	public List<Fornecedor> listaTudo() {
		AnnotationConfiguration configuration = new AnnotationConfiguration();
		configuration.configure();
		     
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();
		Criteria criteria = session.createCriteria(Fornecedor.class);
		criteria.add(Restrictions.eq("deleted", false));
	    return (List<Fornecedor>) criteria.list();
	  }
	
	public Fornecedor carrega(Long id){
		AnnotationConfiguration configuration = new AnnotationConfiguration();
		configuration.configure();
		     
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();
		Criteria criteria = session.createCriteria(Fornecedor.class);
		criteria.add(Restrictions.eq("id", id));
		Fornecedor p =(Fornecedor) criteria.uniqueResult();
		return p;
	}

	
   
}
