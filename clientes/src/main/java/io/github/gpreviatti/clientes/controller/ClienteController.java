package io.github.gpreviatti.clientes.controller;

import io.github.gpreviatti.clientes.model.entity.Cliente;
import io.github.gpreviatti.clientes.model.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/clientes")
public class ClienteController {

    private final ClienteRepository repository;

    @Autowired
    public ClienteController(ClienteRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Cliente create(@RequestBody Cliente cliente) {
        return repository.save(cliente);
    }

    @GetMapping("{id}")
    public Cliente findById(@PathVariable("id") Integer id) {
        return repository
        .findById(id)
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable("id") Integer id) {
        repository
        .findById(id)
        .map(cliente -> {
            repository.delete(cliente);
            return Void.TYPE;
        })
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update(@PathVariable("id") Integer id, @RequestBody Cliente updatedClient) {
        repository
        .findById(id)
        .map(client -> {
            updatedClient.setId(client.getId());
            return repository.save(updatedClient);
        })
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
}
