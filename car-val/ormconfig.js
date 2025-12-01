var dbConfig = {
    synchronize: false
};

switch (process.env.NODE_ENV) {
    case 'development':
        Object.assign(dbConfig, {
            type: 'sqlite',
            database: 'db.sqlite',
            entities: ['**/*.entity.{ts,js}']
        });
        break;

    case 'test':
    case 'test':
        Object.assign(dbConfig, {
            type: 'sqlite',
            database: 'test.sqlite',
            entities: ['src/**/*.entity.{ts,js}'],
            migrations: ['src/migrations/*{.ts,.js}'],
            migrationsRun: true
        });
        break;

    case 'production':
        Object.assign(dbConfig, {
            type: 'postgress',
            url: process.env.DATABASE_URL,
            entities: ['src/**/*.entity.{ts,js}'],
            migrations: ['src/migrations/*{.ts,.js}'],
            migrationsRun: true,
            ssl: {
                rejectUnauthorized: false
            }
        });
        break;
        break;

    default:
        throw new Error('unknown environment');
}

module.exports = dbConfig;
