package br.com.springFirst.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.springFirst.entity.Filme;

public interface FilmeRepository extends JpaRepository<Filme, Long> {

}
