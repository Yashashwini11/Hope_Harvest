package com.login.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Fund {
    @Id
    private String name;
    private String age;
    private String location;
    private String cause;
    private int required_amount;

    public Fund() {
    }

    public Fund(String name, String age, String location, String cause, int required_amount) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.cause = cause;
        this.required_amount = required_amount;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getCause() {
        return cause;
    }

    public void setCause(String cause) {
        this.cause = cause;
    }

    public int getRequired_amount() {
        return required_amount;
    }

    public void setRequired_amount(int required_amount) {
        this.required_amount = required_amount;
    }

}
