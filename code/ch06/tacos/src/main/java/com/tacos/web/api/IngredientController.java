package com.tacos.web.api;

import com.tacos.data.IngredientRepository;
import com.tacos.entity.Ingredient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/ingredientsx", produces = "application/json")
@CrossOrigin(origins = "*")
public class IngredientController {
    @Autowired
    private IngredientRepository ingredientRepository;

    @GetMapping
    public Iterable<Ingredient> allIngredients() {
        return ingredientRepository.findAll();
    }

}
