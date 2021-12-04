/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.usa.ciclo4.ciclo4.Service;

import co.usa.ciclo4.ciclo4.Modelo.Clone;
import co.usa.ciclo4.ciclo4.Repository.crud.cloneRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author roll-
 */
@Service
public class cloneService {
    
    @Autowired
    private cloneRepository cloneRepo;
    
    public List<Clone> getAll(){
    
        return cloneRepo.getAll();
        
    }
    
    public Clone save(Clone clone){
        
        return cloneRepo.save(clone);
    
    }
    
    public Clone update(Clone clone){
    
        if(clone.getId() != null){
        
        Optional<Clone> cloneExist = cloneRepo.getCloneById(clone.getId());
        if(!cloneExist.isEmpty()){
        if(clone.getBrand()!= null){
        
            cloneExist.get().setBrand(clone.getBrand());
        
        }
        
        if(clone.getProcesor()!= null){
        
            cloneExist.get().setProcesor(clone.getProcesor());
        
        }
        
        if(clone.getOs()!= null){
        
            cloneExist.get().setOs(clone.getOs());
        
        }
        
        if(clone.getDescription()!= null){
        
            cloneExist.get().setDescription(clone.getDescription());
        
        }
        
        if(clone.getMemory()!= null){
        
            cloneExist.get().setMemory(clone.getMemory());
        
        }
        
        if(clone.getHardDrive()!= null){
        
            cloneExist.get().setHardDrive(clone.getHardDrive());
        
        }
        
        if(clone.getPrice() != 0){
        
            cloneExist.get().setPrice(clone.getPrice());
        
        }
        
        if(clone.getQuantity()!= 0){
        
            cloneExist.get().setQuantity(clone.getQuantity());
        
        }
        
        if(clone.getPhotography()!= null){
        
            cloneExist.get().setPhotography(clone.getPhotography());
        
        }
        
        return cloneRepo.save(cloneExist.get());
        }
        else{
                
                return clone;
                
                }

}else{
    
    return clone;}
    
        
    }
    
    public Integer deleteClone(Integer id){
    Optional<Clone> userExist = cloneRepo.getCloneById(id);
        
        if(!userExist.isEmpty() ){
            
        cloneRepo.delete(id);
        return null;
        }
        else{
        return id;
        }
    }
    
    
    public Optional<Clone> getById(Integer id){
    
    return cloneRepo.getCloneById(id);
    
    }
    
}
