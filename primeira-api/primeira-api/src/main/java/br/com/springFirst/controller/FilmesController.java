package br.com.springFirst.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.springFirst.entity.Filme;
import br.com.springFirst.repository.FilmeRepository;

@CrossOrigin("*")
@RestController
public class FilmesController {

	@Autowired
	private FilmeRepository filmeRepository;
	
	@GetMapping("/filmes")
	public List<Filme> getAllFilmes() {	
		return filmeRepository.findAll();
	}
	
	@GetMapping("/filmes/{id}")
	public ResponseEntity<Filme> getFilmeId(@Valid @PathVariable("id") Long idFilme) 
		throws Exception{
		Filme filme = filmeRepository.findById(idFilme).orElseThrow(
				() -> new Exception("Filme Não encontrado para o id:" + idFilme));
		return ResponseEntity.ok().body(filme);
	}
	
	@PostMapping("/filmes")
	public Filme saveFilme(@Valid @RequestBody Filme filme) {
		return filmeRepository.save(filme);
	}
	
	@PutMapping("/filmes/{id}")
	public ResponseEntity<Filme>   updateFilme(@Valid @PathVariable(name = "id") Long idFilme,
							@RequestBody Filme filmeRequest)throws Exception{
		
		Filme filme = filmeRepository.findById(idFilme).orElseThrow(
				() -> new Exception("Filme Não encontrado para o id:" + idFilme));
		
		filme.setTitulo(filmeRequest.getTitulo());
		filme.setCategoria(filmeRequest.getCategoria());
		
		
		Filme filmeUpdated = filmeRepository.save(filme);
		return ResponseEntity.ok().body(filme);
	}
	
	@DeleteMapping("/filmes/{id}")
	public Map<String, Boolean> deleteFilme(@Valid @PathVariable(name = "id") Long idFilme)
			throws Exception {		
		Filme filme = filmeRepository.findById(idFilme).orElseThrow(
				() -> new Exception("Filme Não encontrado para o id:" + idFilme));
		
		filmeRepository.delete(filme);
		Map<String, Boolean> response = new HashMap<>();		
		response.put("deleted", Boolean.TRUE);
		return response;
		
	}
}
