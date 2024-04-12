package com.login.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.login.demo.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Integer>{


    @Query("SELECT u FROM User u WHERE u.name = :name")
    List<User>getbyjpql(@Param("name")String name);

}
