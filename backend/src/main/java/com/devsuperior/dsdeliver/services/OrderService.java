package com.devsuperior.dsdeliver.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import com.devsuperior.dsdeliver.dto.OrderDTO;
import com.devsuperior.dsdeliver.dto.ProductDTO;
import com.devsuperior.dsdeliver.entities.Order;
import com.devsuperior.dsdeliver.entities.OrderStatus;
import com.devsuperior.dsdeliver.entities.Product;
import com.devsuperior.dsdeliver.repositories.OrderRepository;
import com.devsuperior.dsdeliver.repositories.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private ProductRepository productRepository;

    @Transactional(readOnly = true)
    public List<OrderDTO> findAll() {
        List<Order> orders = this.orderRepository.findAllPending();
        return orders.stream().map(order -> new OrderDTO(order)).collect(Collectors.toList());
    }

    @Transactional
    public OrderDTO insert(OrderDTO orderDTO) {
        Order order = new Order(null, orderDTO.getAddress(), orderDTO.getLatitude(), orderDTO.getLongitude(),
                Instant.now(), OrderStatus.PENDING);
        for (ProductDTO productDTO : orderDTO.getProductsDTOs()) {
            Product product = this.productRepository.getOne(productDTO.getId());
            order.getProducts().add(product);
        }
        order = this.orderRepository.save(order);
        return new OrderDTO(order);
    }

    @Transactional
    public OrderDTO updateToDelivered(Long id) {
        Order order = this.orderRepository.getOne(id);
        order.setStatus(OrderStatus.DELIVERED);
        order = this.orderRepository.save(order);
        return new OrderDTO(order);
    }
}
