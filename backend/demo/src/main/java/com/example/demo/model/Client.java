package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Entity
@Getter
@Setter
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idClient;
    private String name;
    private String email;

    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL)
    private List<NotVisit> visits;

    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL)
    private List<WantToVisit> wantToVisits;

    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL)
    private List<NotVisit> notVisits;
}