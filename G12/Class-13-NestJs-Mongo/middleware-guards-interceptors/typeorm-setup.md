1. Import the TypeOrmModule in app.module and use the .forRoot() method to add the config and connect to the databse
2. Create your entity files and define the tables or data that you want to use
3. Add the TypeOrmModule.forFeature() in the child module (products.module.ts) where you want to use the entites you just defined
4. Go to the service where you want to do database operations and use the @InjectRepository decorator to create a new repository that will handle the operations with the entity data
