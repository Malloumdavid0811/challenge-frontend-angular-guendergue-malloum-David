Component Development

    Create src/components/WalletStatus.js component
    Check wallet connection status using existing wallet context/hooks (check src/context/AppContext.js)
    Display wallet connection status:
        Connected: Show truncated wallet address (0x1234...5678) and green "Connected" badge
        Not Connected: Show red "Not Connected" badge
    Use useState and useEffect hooks for state management

Integration

    Add route /dashboard/wallet-status in src/routes/routes.js
    Match styling patterns from src/scss and existing wallet components

Verification

    Component renders correctly at /dashboard/wallet-status route
    Wallet address displays in truncated format when connected
    Connection status badge shows correct color (green when connected, red when not)

My result

<img width="800" height="449" alt="image" src="https://github.com/user-attachments/assets/017f29ea-5578-4ba5-8683-3f98b0076b53" />

<img width="800" height="426" alt="image" src="https://github.com/user-attachments/assets/f5de497e-63df-4709-a17b-0340ebbf92ff" />
