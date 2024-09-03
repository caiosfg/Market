package com.example.market.food;

public record FoodResponseDTO( Long id, String title, String image, Integer price ) {

    public FoodResponseDTO(Food food){
        this(food.id)
    }
}
