# General

Project: Todo with Socket.io

### Stack of technologies:

- React 18.2.0
- TypeScript
- Tanstack React Query v5
- Socket.io
- axios

- Mantine UI

### Configuring

- For creating production build: npm run build
- For starting developing server: npm run dev

### Additional info

- Port: 4000
- Node version: v16.19.0

### Time spent

Time spent: 6h

- Basic project setup: ~1h
- Routing: ~0.5h
- API + CRUD: ~2h
- UI/UX design: ~1h
- Testing/Debugging: ~1h
- Utils\*: ~0.5h

### Comment

I published the _.env_ and _.env.example_ to git intentionally so that there would be no problems at startup + no need to manually create the .env with data.

# Back-end

I had some troubles with this endpoints: PUT and DELETE. 
I changed a little bit back-end localy and all works nice.

DELETE: handleDeleteRequest
Added type conversion for this condition: 
const targetTodoIndex = this.todos.findIndex((t) => Number(t._id) === Number(_id))
instead of:
const targetTodoIndex = this.todos.findIndex((t) => t._id === _id);

The problem was in  comparison  bettween string and number)

GET (by id ): handleGetByIdRequest , made the same  , Works properly


