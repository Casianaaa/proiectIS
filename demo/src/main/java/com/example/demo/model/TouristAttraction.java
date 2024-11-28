package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.List;

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

    @OneToMany(mappedBy = "touristAttraction", cascade = CascadeType.ALL)
    private List<NotVisit> visits;

    @OneToMany(mappedBy = "touristAttraction", cascade = CascadeType.ALL)
    private List<WantToVisit> wantToVisits;

    @OneToMany(mappedBy = "touristAttraction", cascade = CascadeType.ALL)
    private List<NotVisit> notVisits;
}
