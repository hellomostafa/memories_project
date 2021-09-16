import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Mongoose from 'mongoose';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes)


app.use(express.json({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = `mongodb+srv://process.env.DB_USER:process.env.DB_PASS@cluster0.pcwvo.mongodb.net/process.env.DB_NAME?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 5050;

Mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Service is running on port: ${PORT}`)))
.then((error) => console.log(error.message))


// Mongoose.set('useFindAndModify', false)