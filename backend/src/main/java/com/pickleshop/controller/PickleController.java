package com.pickleshop.controller;

import com.pickleshop.model.Pickle;
import com.pickleshop.repository.PickleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/pickles")
public class PickleController {

    @Autowired
    private PickleRepository pickleRepository;

    @GetMapping
    public List<Pickle> getAllPickles() {
        return pickleRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pickle> getPickleById(@PathVariable Long id) {
        Optional<Pickle> pickle = pickleRepository.findById(id);
        return pickle.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Pickle createPickle(@RequestBody Pickle pickle) {
        return pickleRepository.save(pickle);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pickle> updatePickle(@PathVariable Long id, @RequestBody Pickle pickleDetails) {
        Optional<Pickle> optionalPickle = pickleRepository.findById(id);
        if (optionalPickle.isPresent()) {
            Pickle pickle = optionalPickle.get();
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