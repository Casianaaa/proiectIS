package com.example.demo.controller;

import com.example.demo.model.Client;
import com.example.demo.model.DTO.ClientRegisterDTO;
import com.example.demo.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clients")
public class ClientController {

    @Autowired
    ClientService clientService;

    @GetMapping("")
    public List<Client> getAllClients() {
        return clientService.getAllClients();
    }

    @GetMapping("/{idClient}")
    public Client getClient(@PathVariable Integer idClient) {
        return clientService.getClientById(idClient);
    }

    @PostMapping("/store")
    public Client saveClient(@RequestBody Client client) {
        return clientService.create(client);
    }

    @PutMapping("/update")
    public Client updateClient(@RequestBody Client client) {
        return clientService.update(client);
    }

    @DeleteMapping("/delete/{idClient}")
    public String deleteClient(@PathVariable Integer idClient) {
        return clientService.deleteClient(idClient);
    }

    @PostMapping("/register")
    public Client registerClient(@RequestBody ClientRegisterDTO clientRegisterDTO) {
        return clientService.registerClient(clientRegisterDTO);
    }
}