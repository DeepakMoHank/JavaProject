package com.lostfound;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LostFoundApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(LostFoundApplication.class, args);
        System.out.println("Lost & Found Application is running on http://localhost:8080");
    }
}