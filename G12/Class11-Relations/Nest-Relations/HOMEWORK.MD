1. Create a users controller that has all the CRUD operations and don't forget to add the class serializer interceptor to filter out the `password` field
2. After creating the users controller try to fetch the orders that he has created using bi-directional relations
3. Create a new resource called address that will have a `OneToOne` relation with the users, and make sure to make it bi-directional ( don't forget to add the `@JoinColumn` on the owner side of the relation)

- Alternative to pgadmin dbeaver, useful for visualizing data
  https://dbeaver.io/
