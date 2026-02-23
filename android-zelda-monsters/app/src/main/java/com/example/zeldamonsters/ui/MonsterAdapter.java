package com.example.zeldamonsters.ui;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.zeldamonsters.R;
import com.example.zeldamonsters.data.model.Monster;

import java.util.ArrayList;
import java.util.List;

public class MonsterAdapter extends RecyclerView.Adapter<MonsterAdapter.MonsterViewHolder> {

    private final List<Monster> monsters = new ArrayList<>();

    public void submitList(List<Monster> newMonsters) {
        monsters.clear();
        if (newMonsters != null) {
            monsters.addAll(newMonsters);
        }
        notifyDataSetChanged();
    }

    @NonNull
    @Override
    public MonsterViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_monster, parent, false);
        return new MonsterViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MonsterViewHolder holder, int position) {
        holder.bind(monsters.get(position));
    }

    @Override
    public int getItemCount() {
        return monsters.size();
    }

    static class MonsterViewHolder extends RecyclerView.ViewHolder {

        private final TextView tvName;
        private final TextView tvDescription;
        private final TextView tvDlc;

        public MonsterViewHolder(@NonNull View itemView) {
            super(itemView);
            tvName = itemView.findViewById(R.id.tvName);
            tvDescription = itemView.findViewById(R.id.tvDescription);
            tvDlc = itemView.findViewById(R.id.tvDlc);
        }

        public void bind(Monster monster) {
            tvName.setText(monster.getName());
            tvDescription.setText(monster.getDescription());
            tvDlc.setText(itemView.getContext().getString(R.string.dlc_format, monster.isDlc() ? "Sí" : "No"));
        }
    }
}
