package com.example.zeldamonsters.ui;

import android.os.Bundle;
import android.view.View;
import android.widget.ProgressBar;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.zeldamonsters.R;
import com.example.zeldamonsters.data.db.DatabaseHelper;
import com.example.zeldamonsters.data.model.ApiResponse;
import com.example.zeldamonsters.data.model.Monster;
import com.example.zeldamonsters.data.network.MonsterApiService;
import com.example.zeldamonsters.data.network.RetrofitClient;
import com.j256.ormlite.dao.Dao;

import java.sql.SQLException;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainActivity extends AppCompatActivity {

    private ProgressBar progressBar;
    private TextView tvStatus;
    private MonsterAdapter adapter;
    private DatabaseHelper dbHelper;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        progressBar = findViewById(R.id.progressBar);
        tvStatus = findViewById(R.id.tvStatus);
        RecyclerView recyclerView = findViewById(R.id.recyclerView);

        adapter = new MonsterAdapter();
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        recyclerView.setAdapter(adapter);

        dbHelper = new DatabaseHelper(this);

        loadMonsters();
    }

    private void loadMonsters() {
        showLoading(true);

        MonsterApiService apiService = RetrofitClient.getApiService();
        apiService.getMonsters().enqueue(new Callback<ApiResponse>() {
            @Override
            public void onResponse(Call<ApiResponse> call, Response<ApiResponse> response) {
                showLoading(false);
                if (!response.isSuccessful() || response.body() == null || response.body().getData() == null) {
                    showError(getString(R.string.error_loading_data));
                    return;
                }

                List<Monster> monsters = response.body().getData();
                adapter.submitList(monsters);
                saveMonstersLocally(monsters);
                tvStatus.setVisibility(View.GONE);
            }

            @Override
            public void onFailure(Call<ApiResponse> call, Throwable t) {
                showLoading(false);
                showError(getString(R.string.error_network, t.getMessage()));
            }
        });
    }

    private void saveMonstersLocally(List<Monster> monsters) {
        try {
            Dao<Monster, Integer> monsterDao = dbHelper.getMonsterDao();
            for (Monster monster : monsters) {
                monsterDao.createOrUpdate(monster);
            }
        } catch (SQLException e) {
            showError(getString(R.string.error_saving_data));
        }
    }

    private void showLoading(boolean isLoading) {
        progressBar.setVisibility(isLoading ? View.VISIBLE : View.GONE);
    }

    private void showError(String message) {
        tvStatus.setText(message);
        tvStatus.setVisibility(View.VISIBLE);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (dbHelper != null) {
            dbHelper.close();
        }
    }
}
