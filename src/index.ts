import express,{Request} from 'express';
import rateLimit from 'express-rate-limit';
import routes from './routes/router';



import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(cors<Request>());


const limiter = rateLimit({
    windowMs: 10 * 1000,
    max: 1, // `max` instead of `limit`
    message: "Too many requests from this IP"
});

app.use("/add", limiter);
app.use(routes);

app.listen(8080, () => {
    console.log("Server Connected");
});
