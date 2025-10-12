import { rooms, users } from '../data/chatData.js';

const createUser = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const exists = rooms.find((r) => r.name === name);

  if (exists) {
    return res.status(400).json({ error: 'User already exists' });
  }

  const user = {
    id: Date.now(),
    username: name,
    roomId: null,
  };

  users.push(user);
  res.status(201).json(user);
};

const joinUser = (req, res) => {
  const userId = Number(req.params.id);
  const roomId = Number(req.body.roomId); 

  const user = users.find((u) => u.id === userId);
  const room = rooms.find((r) => r.id === roomId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  if (!room) {
    return res.status(404).json({ error: 'Room not found' });
  }

  user.roomId = roomId;

  res.json({
    message: `${user.name} joined ${room.name}`,
    user,
  });
};

export const userController = {
  createUser,
  joinUser,
};
