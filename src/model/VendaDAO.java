package model;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.AnnotationConfiguration;
import org.hibernate.criterion.Restrictions;

import br.com.caelum.vraptor.ioc.Component;
import model.ClienteDAO;
import model.Venda;

@Component
public class VendaDAO {
	public void inserirVenda(Venda venda){
	    AnnotationConfiguration configuration = new AnnotationConfiguration();
	    configuration.configure();     
	    SessionFactory factory = configuration.buildSessionFactory();
	    Session session = factory.openSession();
	   
	    Transaction tx = session.beginTransaction();
	    
	    session.save(venda);        
	    tx.commit();
	}
	
	public void alterarVenda(Venda p){
		AnnotationConfiguration configuration = new AnnotationConfiguration();
		configuration.configure();
			
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();
		
		// carrega o produto do banco de dados
		//Venda Venda = (Venda) session.load(Venda.class, p.getId());
		Transaction tx = session.beginTransaction();
		session.update(p);
		tx.commit();
	}
	
	public void removerVenda(Long id){
		AnnotationConfiguration configuration = new AnnotationConfiguration();
		configuration.configure();
		     
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();
		     
		Criteria criteria = session.createCriteria(Venda.class);
		criteria.add(Restrictions.eq("id", id));
		Venda Venda = (Venda) criteria.uniqueResult();
		     
		Transaction tx = session.beginTransaction();
		Venda.setDeleted(true);
		session.update(Venda);
		tx.commit();

	}
	
	public List<Venda> pesquisarVenda(String nome){
		AnnotationConfiguration configuration = new AnnotationConfiguration();
		configuration.configure();
		     
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();

		Criteria criteria = session.createCriteria(Venda.class);
		criteria.add(Restrictions.eq("nome", nome));
		criteria.add(Restrictions.eq("deleted", false));
		List<Venda> list_Vendas = criteria.list();
		
		return list_Vendas;
		
		
	}
	
	public List<Venda> listaTudo() {
		AnnotationConfiguration configuration = new AnnotationConfiguration();
		configuration.configure();
		     
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();
		Criteria criteria = session.createCriteria(Venda.class);
		criteria.add(Restrictions.eq("deleted", false));
	    return (List<Venda>) criteria.list();
	  }
	
	public Venda carrega(Long id){
		AnnotationConfiguration configuration = new AnnotationConfiguration();
		configuration.configure();
		     
		SessionFactory factory = configuration.buildSessionFactory();
		Session session = factory.openSession();
		Criteria criteria = session.createCriteria(Venda.class);
		criteria.add(Restrictions.eq("id", id));
		Venda p =(Venda) criteria.uniqueResult();
		return p;
	}
	public void porNaConta(String matricula, float valor){
		ClienteDAO dao = new ClienteDAO();
		Cliente aluno = dao.carregaMat(matricula);
		aluno.setConta(valor+aluno.getConta());
		dao.alterarCliente(aluno);
	}
}
