package com.keer.tacos.web.data;

import com.keer.tacos.web.entity.Ingredient;
import org.springframework.data.repository.CrudRepository;

public interface IngredientRepository
        extends CrudRepository<Ingredient, String> {
}
