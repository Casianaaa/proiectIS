package com.example.demo.service.impl;

import com.example.demo.model.TouristAttraction;
import com.example.demo.repository.TouristAttractionRepository;
import com.example.demo.service.TouristAttractionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TouristAttractionServiceImpl implements TouristAttractionService {

    @Autowired
    TouristAttractionRepository attractionRepository;

    @Override
    public TouristAttraction create(TouristAttraction attraction) {
        return attractionRepository.save(attraction);
    }

    @Override
    public List<TouristAttraction> getAllAttractions() {
        return attractionRepository.findAll();
    }

    @Override
    public TouristAttraction getAttractionById(Integer idAttraction) {
        return attractionRepository.findById(idAttraction).get();
    }

    @Override
    public TouristAttraction update(TouristAttraction attraction) {
        return attractionRepository.save(attraction);
    }

    @Override
    public String deleteAttraction(Integer idAttraction) {
        attractionRepository.deleteById(idAttraction);
        return "Tourist Attraction deleted successfully!";
    }
}