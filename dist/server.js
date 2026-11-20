import express from 'express';
import './lib/database/connection.js';
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map