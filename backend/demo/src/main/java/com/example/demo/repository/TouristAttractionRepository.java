package com.example.demo.repository;

import com.example.demo.model.TouristAttraction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TouristAttractionRepository extends JpaRepository<TouristAttraction, Integer> {
}