// MIDDLEWARES
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173", "http://localhost:5174"],
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// ROUTES
app.use("/api/user", authRouter);


// ERROR HANDLERS
app.use(notFound);
app.use(errorHandler);

module.exports = app;
