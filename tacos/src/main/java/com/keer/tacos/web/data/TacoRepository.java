package com.keer.tacos.web.data;

import com.keer.tacos.web.entity.Taco;
import org.springframework.data.repository.CrudRepository;

public interface TacoRepository extends CrudRepository<Taco, Long> {
}
