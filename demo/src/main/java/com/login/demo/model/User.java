package com.login.demo.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;

    @OneToMany(targetEntity = Fund.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_name", referencedColumnName = "id")
    private List<Fund> fund;

    public User() {
    }

    public User(int id, String name, String email, List<Fund> fund) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.fund = fund;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Fund> getFund() {
        return fund;
    }

    public void setFund(List<Fund> fund) {
        this.fund = fund;
    }

}