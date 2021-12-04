/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.usa.ciclo4.ciclo4.Repository.crud;

import co.usa.ciclo4.ciclo4.Modelo.Order;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author roll-
 */

@Repository
public class OrderRepository {
   
    
    @Autowired
    private OrderCrudRepository orderCrud;

    public List<Order> getAll() {

        return (List<Order>) orderCrud.findAll();
    }
    
    public Optional<Order> getOrderById(Integer id){
    
    return orderCrud.findById(id);
    
    }

    public Order save(Order order) {

        return orderCrud.save(order);
    }
        
    public void deleteOrder(Integer id){
    
        orderCrud.deleteById(id);
    
    }
    
    public List<Order> getZone(String country){
    
        return orderCrud.findByZone(country);
    
    }
    
//    public List<Order> getStatus(String status){
//    
//        return orderCrud.findByStatus(status);
//    
//    }
}

