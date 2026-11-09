# Flip 7 – Multiplayer Game Server

An authoritative, real-time edge backend for the **Flip 7** push-your-luck card game, built on the **Cloudflare Developer Platform**.

## Key Features
- **Cloudflare Durable Objects:** Acts as the synchronized, stateful room referee holding the authoritative 94-card deck and player hands in memory.
- **WebSocket Protocol:** Delivers instant, bidirectional event messaging (`HIT`, `STAY`, `STATE_UPDATE`) across mobile and desktop devices.
- **Serverless & Edge Native:** Managed and deployed seamlessly with Cloudflare **Wrangler**, requiring zero ongoing server maintenance or idle compute costs.
- **Isolated Game Engine:** Pure TypeScript rule validation covering duplicate busts, action cards (Freeze, Flip Three, Second Chance), and round scoring thresholds.
