/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.usa.ciclo4.ciclo4.Repository.crud;

import co.usa.ciclo4.ciclo4.Modelo.Order;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;


/**
 *
 * @author roll-
 */
public interface OrderCrudRepository extends MongoRepository<Order, Integer> {
    
    
    @Query("{'salesMan.zone':?0}")
    public List<Order> findByZone(String country);
   
    //public List<Order> findByStatus(String status);
    
    //public List<Order> findByQuantitiesAndSalesMan(String);
}
