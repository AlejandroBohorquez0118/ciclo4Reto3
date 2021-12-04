/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.usa.ciclo4.ciclo4.Repository.crud;

import co.usa.ciclo4.ciclo4.Modelo.Clone;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author roll-
 */
@Repository

public class cloneRepository {
    
    @Autowired
    private cloneCrudRepository cloneCrud;
    
   public List<Clone> getAll() {

        return (List<Clone>) cloneCrud.findAll();
    }
    
    public Optional<Clone>  getCloneById(int id){
    
    return cloneCrud.findById(id);
    
    }

    public Clone save(Clone clone) {
        
        return cloneCrud.save(clone);
    }
    
    public void delete(Integer id){
    
    cloneCrud.deleteById(id);
    
    }

}
