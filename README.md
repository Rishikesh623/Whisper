## Whisper: Real-Time Web Chat Application

Whisper is a real-time web chat application that allows users to connect and chat with each other. Built using Bootstrap, React.js, Node.js, Express.js, Socket.io, and MongoDB, it offers the following features:

1. **User Authentication:**
   - Users can register with custom email addresses and securely log in.
   - Passwords are hashed and stored in the database.

2. **User List:**
   - Upon logging in, users can view a list of other registered users.
   - This list displays potential chat partners.

3. **Private Messaging:**
   - Users can select a user from the list and start a private chat.
   - Real-time messaging is implemented using Socket.io.
   - Notifications alert users to new messages.

4. **Database Integration:**
   - MongoDB stores user data and chat messages.

#Here's how you can run your Whisper chat application:

1. **Server:**
   - Open a terminal and navigate to the server directory:
     ```
     cd server
     ```
   - Install dependencies (if not already done):
     ```
     npm install express,cors,jsonwebtoken,mongoose,bcrypt,dotenv,validator
     ```
   - Start the server using nodemon:
     ```
     nodemon
     ```

2. **Client:**
   - Open another terminal and navigate to the client directory:
     ```
     cd client
     ```
   - Install dependencies (if not already done):
     ```
     npm install bootstrap,moment,react,react-bootstrap,react-input-emoji,react-router-dom,react-scripts,socket.io-client
     ```
   - Start the client application:
     ```
     npm start
     ```
3. **Socket:**
   - Open another terminal and navigate to the socket directory:
     ```
     cd socket
     ```
   - Install dependencies (if not already done):
     ```
     npm install socket.io
     ```
   - Start the Socket server using nodemon:
     ```
     nodemon
     ```

Now you should have both the server and client running, allowing users to register, log in, and chat in real time.
