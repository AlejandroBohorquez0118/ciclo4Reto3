/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.usa.ciclo4.ciclo4.Web;

import co.usa.ciclo4.ciclo4.Modelo.User;
import co.usa.ciclo4.ciclo4.Service.UserService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author roll-
 */
@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})

public class UserController {

    @Autowired
    private UserService service;

    
    /**
     * 
     * @return 
     */
    @GetMapping("/all")
    public List<User> getUsuarios() {

        return service.getAll();

    }
    
    /**
     * 
     * @param id
     * @return 
     */
    
    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable int id){
    
    return service.getById(id);
    
    }
    
    /**
     * 
     * @param email
     * @return 
     */
    @GetMapping("/emailexist/{email}")
    public boolean existEmail(@PathVariable("email") String email) {

        return service.getUserByEmail(email);

    }
    
    
    /**
     * 
     * @param user
     * @return 
     */
    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public User save(@RequestBody User user){
    
    return service.save(user);
    
    }
    
    
    /**
     * 
     * @param email
     * @param password
     * @return 
     */
    @GetMapping("/{email}/{password}")
    public User existEmailPass(@PathVariable("email") String email,@PathVariable("password") String password) {

        return service.getByEmailAndPass(email,password);

    }
    
    /**
     * 
     * @param user
     * @return 
     */
    
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public User update(@RequestBody User user){
    
    return service.update(user);
    
    }
    
    /**
     * 
     * @param id
     * @return 
     */
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public Integer delete(@PathVariable Integer id){
    
       return  service.deleteUserById(id);
    
    }
    
}
