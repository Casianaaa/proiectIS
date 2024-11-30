package com.example.demo.service;

import com.example.demo.model.Client;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ClientService {
    public Client create(Client client);

    public List<Client> getAllClients();

    public Client getClientById(Integer idClient);

    public Client update(Client client);

    public String deleteClient(Integer idClient);
}