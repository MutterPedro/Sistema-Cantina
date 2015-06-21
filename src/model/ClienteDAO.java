package model;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.AnnotationConfiguration;
import org.hibernate.criterion.Restrictions;

import br.com.caelum.vraptor.ioc.Component;
import model.Cliente;

@Component
public class ClienteDAO{
	public void inserirCliente(Cliente cliente){
	    AnnotationConfiguration configuration = new AnnotationConfiguration();
	    configuration.configure();     
	    SessionFactory factory = configuration.buildSessionFactory();
	    Session session = factory.openSession();
	   
	    Transaction tx = session.beginTransaction();
	    
	    session.save(cliente);        
	    tx.commit();
	}
	
	public void alterarCliente(Cliente p){
		AnnotationConfiguration configuration = new AnnotationConfiguration();
		configuration.configure();
			
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();
		
		// carrega o produto do banco de dados
		//Cliente Cliente = (Cliente) session.load(Cliente.class, p.getId());
		Transaction tx = session.beginTransaction();
		session.update(p);
		tx.commit();
	}
	
	public void removerCliente(Long id){
		AnnotationConfiguration configuration = new AnnotationConfiguration();
		configuration.configure();
		     
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();
		     
		Criteria criteria = session.createCriteria(Cliente.class);
		criteria.add(Restrictions.eq("id", id));
		Cliente Cliente = (Cliente) criteria.uniqueResult();
		     
		Transaction tx = session.beginTransaction();
		Cliente.setDeleted(true);
		session.update(Cliente);
		tx.commit();

	}
	
	public List<Cliente> pesquisarCliente(String nome){
		AnnotationConfiguration configuration = new AnnotationConfiguration();
		configuration.configure();
		     
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();

		Criteria criteria = session.createCriteria(Cliente.class);
		criteria.add(Restrictions.eq("nome", nome));
		criteria.add(Restrictions.eq("deleted", false));
		List<Cliente> list_Clientes = criteria.list();
		
		return list_Clientes;
		
		
	}
	
	public List<Cliente> listaTudo() {
		AnnotationConfiguration configuration = new AnnotationConfiguration();
		configuration.configure();
		     
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();
		Criteria criteria = session.createCriteria(Cliente.class);
		criteria.add(Restrictions.eq("deleted", false));
	    return (List<Cliente>) criteria.list();
	  }
	
	public Cliente carrega(Long id){
		AnnotationConfiguration configuration = new AnnotationConfiguration();
		configuration.configure();
		     
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();
		Criteria criteria = session.createCriteria(Cliente.class);
		criteria.add(Restrictions.eq("id", id));
		Cliente p =(Cliente) criteria.uniqueResult();
		return p;
	}
	
	public Cliente carregaMat(String matricula){
		AnnotationConfiguration configuration = new AnnotationConfiguration();
		configuration.configure();
		     
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();
		Criteria criteria = session.createCriteria(Cliente.class);
		criteria.add(Restrictions.eq("matricula", matricula));
		Cliente p =(Cliente) criteria.uniqueResult();
		return p;
	}

	
   
}
