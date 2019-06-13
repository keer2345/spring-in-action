package com.tacos.web.api;

import com.tacos.data.TacoRepository;
import com.tacos.entity.Taco;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/design", produces = "application/json")
@CrossOrigin(origins = "*")
public class DesignTacoController {
    @Autowired
    private TacoRepository tacoRepository;

    @GetMapping("/recent")
    public Iterable<Taco> recentTacos() {
        return tacoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Taco tacoById(@PathVariable("id") Long id) {
        Optional<Taco> optTaco = tacoRepository.findById(id);
        if (optTaco.isPresent()) {
            return optTaco.get();
        }
        return null;
    }
}
