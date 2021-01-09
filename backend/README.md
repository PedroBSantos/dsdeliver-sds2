# PROJECT DETAILS
- Postgres database on Developer and Production environment
- H2 database on Test environment
- Java
- Spring Boot

### ROUTES
- GET  /orders: return all orders(OrderDTO)
- POST /orders: insert a new order, receives a orderDTO(without an id) and returns the same dto with an id.
- PUT  /orders/id/delivered: update status of a order with the id passed to DELIVERED
- GET  /products: return all products(ProductDTO)

### CLASS DIAGRAM
![CLASS-DIAGRAM](https://cdn.discordapp.com/attachments/590682723870310410/797568151905894410/class_diagram.jpg)

### DATABASE DIAGRAM
![DATABASE-DIAGRAM](https://cdn.discordapp.com/attachments/590682723870310410/797568137981460520/logic_model.jpg)

### DTO'S DIAGRAM
![DTO'S-DIAGRAM](https://cdn.discordapp.com/attachments/590682723870310410/797576774346473492/Captura_de_tela_2021-01-09_182426.jpg)

### LINKS
- http://localhost:8080 when running test and developer environment
- https://sds2-pedro.herokuapp.com production mode