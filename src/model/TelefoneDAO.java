package model;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.AnnotationConfiguration;
import org.hibernate.criterion.Restrictions;

import br.com.caelum.vraptor.ioc.Component;
import model.Telefone;

@Component
public class TelefoneDAO{	
	public void inserirTelefone(Telefone telefone){
	    AnnotationConfiguration configuration = new AnnotationConfiguration();
	    configuration.configure();     
	    SessionFactory factory = configuration.buildSessionFactory();
	    Session session = factory.openSession();
	   
	    Transaction tx = session.beginTransaction();
	    
	    session.save(telefone);        
	    tx.commit();
	}
	
	public void alterarTelefone(int id, int ddi, int ddd, String num, String tipo){
		AnnotationConfiguration configuration = new AnnotationConfiguration();
		configuration.configure();
			
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();
		
		// carrega o produto do banco de dados
		Telefone telefone = (Telefone) session.load(Telefone.class, id);
			
		Transaction tx = session.beginTransaction();
		telefone.setDdi(ddi);
		telefone.setDdd(ddd);
		telefone.setNumero(num);
		telefone.setTipo(tipo);
		session.update(telefone);
		tx.commit();
	}
	
	public void removerTelefone(Long id){
		AnnotationConfiguration configuration = new AnnotationConfiguration();
		configuration.configure();
		     
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();
		     
		Criteria criteria = session.createCriteria(Telefone.class);
		criteria.add(Restrictions.eq("id", id));
		Telefone telefone = (Telefone) criteria.uniqueResult();
		
		Transaction tx = session.beginTransaction();
		telefone.setDeleted(true);
		session.update(telefone);
		tx.commit();

	}
  
	public List<Telefone> pesquisarTelefone(Long id){
		AnnotationConfiguration configuration = new AnnotationConfiguration();
		configuration.configure();
		     
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();
		     
		Criteria criteria = session.createCriteria(Telefone.class);
		Criteria criteria2 = session.createCriteria(Cliente.class);
		criteria2.add(Restrictions.eq("id",id));
		Cliente pessoa = (Cliente) criteria2.uniqueResult();
		Fornecedor fornecedor = (Fornecedor) criteria2.uniqueResult();
		
		criteria.add(Restrictions.eq("deleted", false));
		criteria.add(Restrictions.eq("cliente", pessoa));
		criteria.add(Restrictions.eq("fornecedor", fornecedor));
		List<Telefone> lista = (List<Telefone>) criteria.list();
		
		return lista;
	}
	
	

}
