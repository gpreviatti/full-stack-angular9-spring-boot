package io.github.gpreviatti.clientes.model.repository;

import io.github.gpreviatti.clientes.model.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

}
