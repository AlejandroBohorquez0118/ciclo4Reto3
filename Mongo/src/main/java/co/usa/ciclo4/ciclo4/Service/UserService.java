/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.usa.ciclo4.ciclo4.Service;

import co.usa.ciclo4.ciclo4.Modelo.User;
import co.usa.ciclo4.ciclo4.Repository.crud.UserRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author roll-
 */
@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    public List<User> getAll() {

        return userRepo.getAll();
    }
    
    public Optional<User> getById(Integer id){
    
    return userRepo.getUserById(id);
    
    }

    public User save(User user){
    
        if(user.getIdentification() == null || user.getName() == null || user.getAddress() == null 
                || user.getCellPhone() == null || user.getEmail() == null || user.getPassword() == null 
                || user.getZone() == null || user.getType() == null){
        
        return user;
        
        }else{
        
            List<User> existeUser = userRepo.getICEP(user.getIdentification(), user.getCellPhone(), user.getEmail(), user.getPassword(),user.getName());
            if(existeUser.isEmpty()){
            
            return userRepo.save(user);
            }
            else{
            
                return user;
            
            }
            
            }
        }
    
    public boolean getUserByEmail(String email){
    
    Optional<User> usuarios = userRepo.getUserbyEmail(email);
    
    if (usuarios.isEmpty()){
    
    return false;}
    
    else{
    
    
    return true;}
    
    }
        
    public User getByEmailAndPass(String email, String password){
    Optional<User> existeEP = userRepo.getUserByEmailAndPassword(email, password);
    
    if(existeEP.isPresent()){
        
        return existeEP.get();
    
    }else{
    
        return new User();
        
    }
    
    }
        
    public User update(User user){
    
    if(user.getId()!=null){
    
       
        Optional<User> userexist = userRepo.getUserById(user.getId());
        if(userexist.isPresent()){
        if (user.getIdentification()!=null){
            userexist.get().setIdentification(user.getIdentification());
        }
        if (user.getName()!=null){
            userexist.get().setName(user.getName());
        }
        if (user.getBirthtDay()!=null){
            userexist.get().setBirthtDay(user.getBirthtDay());
        }
        if (user.getMonthBirthtDay()!= null){
            userexist.get().setMonthBirthtDay(user.getMonthBirthtDay());
        }
        if (user.getAddress()!=null){
            userexist.get().setAddress(user.getAddress());
        }
        if (user.getCellPhone()!=null){
            userexist.get().setCellPhone(user.getCellPhone());
        }
        if (user.getEmail()!=null){
            userexist.get().setEmail(user.getEmail());
        }
        if (user.getPassword()!=null){
            userexist.get().setPassword(user.getPassword());
        }
        if (user.getZone()!=null){
            userexist.get().setZone(user.getZone());
        }
        if (user.getType()!=null){
            userexist.get().setType(user.getType());
        }
        return userRepo.save(userexist.get());
    }
    else{
    
        return user;
        
    }}    
    else{
            
            return user;
            }
    
    
    }
    
    public Integer deleteUserById(Integer id){
        Optional<User> userExist = userRepo.getUserById(id);
        
        if(!userExist.isEmpty() ){
            
        userRepo.deleteUser(id);
        return null;
        }
        else{
        return id;
        }
    }
    
    
}

