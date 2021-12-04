/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.usa.ciclo4.ciclo4.Repository.crud;

import co.usa.ciclo4.ciclo4.Modelo.User;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.core.CrudMethods;
import org.springframework.stereotype.Repository;

/**
 *
 * @author roll-
 */
@Repository

public class UserRepository {

    @Autowired
    private UserCrudRepository userCrud;

    public List<User> getAll() {

        return (List<User>) userCrud.findAll();
    }
    
    public Optional<User>  getUserById(int id){
    
    return userCrud.findById(id);
    
    }

    public User save(User User) {

        return userCrud.save(User);
    }

    public Optional<User> getUserByName(String name) {

        return userCrud.findByName(name);

    }

    public Optional<User> getUserbyEmail(String email) {

        return userCrud.findByEmail(email);

    }

    public List<User> getUserByNameOrEmail(String name, String email) {

        return userCrud.findByNameOrEmail(name, email);

    }
    
    public Optional<User> getUserByEmailAndPassword(String email, String password) {

        return userCrud.findByEmailAndPassword(email, password);

    }
    
    public void deleteUser(Integer id){
    
        userCrud.deleteById(id);
    
    }
    
    public List<User> getICEP(String Identification,String cellPhone, String email, String password, String name){
    
    return userCrud.findByIdentificationAndCellPhoneAndEmailAndPasswordAndName(Identification, cellPhone, email, password, name);
    
    }
}
