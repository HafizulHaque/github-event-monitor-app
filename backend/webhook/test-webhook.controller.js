import { Router } from 'express';
import { publishEvent } from '../server-sent-events/sse.service.js';

const router = Router();

router.post('/test', (req, res) => {
    const { id, name, data } = req.body;

    const event = {
        id,
        name,
        data,
        time: new Date().toISOString()
    }

    //send event to sse clients
    publishEvent(event)

    res.status(200).json({ message: 'Event published', event });
});


export default router;