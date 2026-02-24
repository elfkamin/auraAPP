package com.example.zeldamonsters.data.db;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;

import com.example.zeldamonsters.data.model.Monster;
import com.j256.ormlite.android.apptools.OrmLiteSqliteOpenHelper;
import com.j256.ormlite.dao.Dao;
import com.j256.ormlite.support.ConnectionSource;
import com.j256.ormlite.table.TableUtils;

import java.sql.SQLException;

public class DatabaseHelper extends OrmLiteSqliteOpenHelper {

    private static final String DATABASE_NAME = "zelda_monsters.db";
    private static final int DATABASE_VERSION = 1;

    private Dao<Monster, Integer> monsterDao;

    public DatabaseHelper(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase database, ConnectionSource connectionSource) {
        try {
            TableUtils.createTable(connectionSource, Monster.class);
        } catch (SQLException e) {
            throw new RuntimeException("Error creating DB", e);
        }
    }

    @Override
    public void onUpgrade(SQLiteDatabase database, ConnectionSource connectionSource, int oldVersion, int newVersion) {
        try {
            TableUtils.dropTable(connectionSource, Monster.class, true);
            onCreate(database, connectionSource);
        } catch (SQLException e) {
            throw new RuntimeException("Error upgrading DB", e);
        }
    }

    public Dao<Monster, Integer> getMonsterDao() throws SQLException {
        if (monsterDao == null) {
            monsterDao = getDao(Monster.class);
        }
        return monsterDao;
    }
}
