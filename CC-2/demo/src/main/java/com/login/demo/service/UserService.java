package com.login.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.login.demo.model.User;
import com.login.demo.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository ur;

    public User post(User user) {
        return ur.save(user);
    }

    public List<User> sort(String field) {
        Sort sort = Sort.by(Sort.Direction.ASC, field);
        return ur.findAll(sort);
    }

    public List<User> paging(int offset, int pagesize) {
      Pageable page=PageRequest.of(offset, pagesize);
      return ur.findAll(page).getContent();
    }

    public List<User> getbyjpql(String name) {
       return ur.getbyjpql(name);
    }

}
