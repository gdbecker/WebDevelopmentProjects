## Node.js API Masterclass Notes

### What is HTTP?
- Hyper Text Transfer Protocol
- Communication between web servers and clients
- HTTP Requests / Responses
- Includes header and body

### Important HTTP Status Codes
#### [All Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- 1.xx: Informational
- 2.xx: Success
  - 200: Success
  - 201: Created
  - 204: No Content
- 3.xx: Redirection
  - 304: Not Modified
- 4.xx: Client Error
  - 400: Bad Request
  - 401: Unauthorized
  - 404: Not Found
- 5.xx: Server Error
  - 500: Internal Server Error

### HTTP Request Methods
#### [All Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- GET: retrieve resource
- POST: submit resource
- PUT/PATCH: update resource
- DELETE: delete/destroy resource

### Using docgen to export postman_collection.json to index.html
- .\docgen build -i devcamper.postman_collection.json -o index.html