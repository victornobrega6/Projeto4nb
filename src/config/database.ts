import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString =
  "postgresql://postgres:OXFFpiSXrDjuseKaUeoiKlNVRJfXFVWg@junction.proxy.rlwy.net:31686/railway";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
