package com.example.demo.controller;

import com.example.demo.model.TouristAttraction;
import com.example.demo.service.TouristAttractionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/attractions")
public class TouristAttractionController {

    @Autowired
    TouristAttractionService touristAttractionService;

    @GetMapping("")
    public List<TouristAttraction> getAllAttractions() {
        return touristAttractionService.getAllAttractions();
    }

    @GetMapping("/{idAttraction}")
    public TouristAttraction getAttraction(@PathVariable Integer idAttraction) {
        return touristAttractionService.getAttractionById(idAttraction);
    }

    @PostMapping("/store")
    public TouristAttraction saveAttraction(@RequestBody TouristAttraction attraction) {
        return touristAttractionService.create(attraction);
    }

    @PutMapping("/update")
    public TouristAttraction updateAttraction(@RequestBody TouristAttraction attraction) {
        return touristAttractionService.update(attraction);
    }

    @DeleteMapping("/delete/{idAttraction}")
    public String deleteAttraction(@PathVariable Integer idAttraction) {
        return touristAttractionService.deleteAttraction(idAttraction);
    }
}