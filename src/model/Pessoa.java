package model;
import java.util.ArrayList;
import javax.persistence.*;

@Entity
public class Pessoa {
	@Id @GeneratedValue
	protected Long id;
	protected String nome;	
	protected String endereco;
	protected boolean deleted;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getEndereco() {
		return endereco;
	}
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	public boolean isDeleted() {
		return deleted;
	}
	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}
		
	
	
}
