import "dotenv/config";

export default {
    expo: {
        extra: {
            PRIVY_APP_ID: process.env.PRIVY_APP_ID,
            PRIVY_CLIENT_ID: process.env.PRIVY_CLIENT_ID,
          },
    }
}