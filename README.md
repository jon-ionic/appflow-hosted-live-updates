# Steps to Reproduce

1. Clone the repo.
2. Install, build, sync (`npm ci && npm run build && npx cap sync`)
3. Open Android app and build (`npx cap open android`)
4. Trigger sync by clicking the "sync" button in the emulator
5. Observe logcat:
```
2024-06-11 16:13:46.683  5183-5695  LiveUpdates             io.ionic.starter                     E  App ID - a1e44fba, Snapshot ID - 195115d0-9d74-4f22-b5c3-3d49b8404fb2: Manifest download request failed with response code 403.
2024-06-11 16:13:46.683  5183-5695  LiveUpdates             io.ionic.starter                     E  App ID - a1e44fba, Snapshot ID - 195115d0-9d74-4f22-b5c3-3d49b8404fb2: Error Response Body: <?xml version="1.0" encoding="UTF-8"?>
                                                                                                    <Error><Code>AccessDenied</Code><Message>Access Denied</Message><RequestId>D8T7WNBR7YCQSFMJ</RequestId><HostId>R09ZA4/ZLZiHwrAnT18CyOwwHaK+PfXzH1sPWJK3S7Gm8hW1GImeKky6L4KrO+/POm+QoSQ032g=</HostId></Error>
2024-06-11 16:13:46.950  5183-5183  Capacitor/Console       io.ionic.starter                     E  File: https://localhost/assets/index-esEigHeb.js - Line 104 - Msg: Uncaught (in promise) #<Object>
```

The differential artifact was uploaded to Appflow with the following:
```
appflow live-update upload-artifact --app-id=a1e44fba --commit-sha=6716950f0aa0927e2073746b930a248c387edfa5 --commit-ref=main --build-dir=dist --artifact-type=manifest --signing-key=$IONIC_PRIVATE_KEY
```