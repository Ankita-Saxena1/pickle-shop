package com.pickleshop.controller;

import com.pickleshop.model.Product;
import com.pickleshop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/pickles")
public class PickleController {

    @Autowired
    private ProductRepository pickleRepository;

    @GetMapping
    public List<Product> getAllPickles() {
        return pickleRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getPickleById(@PathVariable Long id) {
        Optional<Product> pickle = pickleRepository.findById(id);
        return pickle.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Product createPickle(@RequestBody Product pickle) {
        return pickleRepository.save(pickle);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updatePickle(@PathVariable Long id, @RequestBody Product pickleDetails) {
        Optional<Product> optionalPickle = pickleRepository.findById(id);
        if (optionalPickle.isPresent()) {
            Product pickle = optionalPickle.get();
            pickle.setName(pickleDetails.getName());
            pickle.setDescription(pickleDetails.getDescription());
            return ResponseEntity.ok(pickleRepository.save(pickle));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePickle(@PathVariable Long id) {
        if (pickleRepository.existsById(id)) {
            pickleRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}