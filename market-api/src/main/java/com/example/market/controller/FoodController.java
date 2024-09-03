package com.example.market.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.market.food.Food;
import com.example.market.food.FoodRepository;

@RestController
@RequestMapping("food")
public class FoodController {

    @Autowired
    private FoodRepository repository;

    @GetMapping
    public List<FoodResponseDTO> getAll(){
        List<Food> foodList = repository.findAll().stream().map(FoodResponseDTO::new);
        return foodList;
    }

}
