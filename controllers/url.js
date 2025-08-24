import { nanoid } from 'nanoid';
import { URL } from '../models/url.js';

export async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "url is required" });
    
    const shortID = nanoid(8);
    await URL.create({
        shortID: shortID,
        redirectURL: body.url,
        visitHistory: [],
    });
    
    return res.json({ id: shortID });
}

export async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    
    try {
        const result = await URL.findOne({ shortID: shortId }); // Note: using shortID to match schema
        
        if (!result) {
            return res.status(404).json({ error: "Short URL not found" });
        }
        
        return res.json({
            totalClicks: result.visitHistory.length,
            analytics: result.visitHistory,
            originalURL: result.redirectURL,
            shortID: result.shortID
        });
    } catch (error) {
        console.error('Error fetching analytics:', error);
        return res.status(500).json({ error: "Error fetching analytics data" });
    }
}