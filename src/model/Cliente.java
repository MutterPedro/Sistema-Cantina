package model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Cliente extends Pessoa{
	@Id @GeneratedValue
	private Long id;
	private char sexo;
	private int idade;
	private String cpf;
	private String matricula;
	private float conta;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public char getSexo() {
		return sexo;
	}
	public void setSexo(char sexo) {
		this.sexo = sexo;
	}
	public int getIdade() {
		return idade;
	}
	public void setIdade(int idade) {
		this.idade = idade;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public String getMatricula() {
		return matricula;
	}
	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}
	
	public boolean verificarMatricula(){
		return (matricula.length() >= 9);
	}
	
	public void imprimirRelatorioVenda(){
		
	}
	public float getConta() {
		return conta;
	}
	public void setConta(float conta) {
		this.conta = conta;
	}
	
}
