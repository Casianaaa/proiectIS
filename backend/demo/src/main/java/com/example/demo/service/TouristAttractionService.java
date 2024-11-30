package com.example.demo.service;

import com.example.demo.model.TouristAttraction;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TouristAttractionService {
    public TouristAttraction create(TouristAttraction attraction);

    public List<TouristAttraction> getAllAttractions();

    public TouristAttraction getAttractionById(Integer idAttraction);

    public TouristAttraction update(TouristAttraction attraction);

    public String deleteAttraction(Integer idAttraction);
}