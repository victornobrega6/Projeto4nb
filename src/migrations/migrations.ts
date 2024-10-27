import pool from '../config/database';

const createUsersTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL
      );
    `;
    await client.query(queryText);
    console.log('Tabela "users" criada com sucesso!');
  } catch (err) {
    console.error('Erro ao criar tabela:', err);
  } finally {
    client.release();
  }
  
};
const createAlterTable = async () => {
  const sql = `ALTER TABLE users ADD COLUMN passwordHash IF NOT EXISTS VARCHAR(100);`;
    pool
      .query(sql)
      .then((result) => {
        console.log("Coluna password criada:", result);
      })
      .catch((error) => {
        console.error("Erro ao criar coluna password:", error);
      });
}
// aaa


createUsersTable().then(() => process.exit(0));
createAlterTable().then(() => process.exit(0));