package com.login.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.login.demo.model.User;
import com.login.demo.service.UserService;

@RestController
@RequestMapping("/fund")
public class UserController {

    @Autowired
    private UserService us;


    @PostMapping("/save")
    public ResponseEntity<?>post(@RequestBody User user)
    {
        try {
            return new ResponseEntity<>(us.post(user),HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
    }

    @GetMapping("/sort/{field}")
    public ResponseEntity<?>sort(@PathVariable String field)
    {
        try {
            return new ResponseEntity<>(us.sort(field),HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/paging/{offset}/{pagesize}")
    public ResponseEntity<?>paging(@PathVariable int offset,@PathVariable int pagesize)
    {
        try {
            return new ResponseEntity<>(us.paging(offset,pagesize),HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getusingjpql/{name}")
    public ResponseEntity<?>getbyjpql(@PathVariable String name)
    {
        try {
            return new ResponseEntity<>(us.getbyjpql(name),HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
