package com.keer.tacos.web.data;

import com.keer.tacos.web.entity.Order;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<Order, Long> {
}
