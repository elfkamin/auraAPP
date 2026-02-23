package com.example.zeldamonsters.data.network;

import com.example.zeldamonsters.data.model.ApiResponse;

import retrofit2.Call;
import retrofit2.http.GET;

public interface MonsterApiService {
    @GET("api/v3/compendium/category/monsters")
    Call<ApiResponse> getMonsters();
}
