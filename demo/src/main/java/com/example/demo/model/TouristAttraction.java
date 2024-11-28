package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Data;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter

public class TouristAttraction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idAttraction;

    private String name;
    private String location;

    @Column(length = 1000)
    private String description;
}