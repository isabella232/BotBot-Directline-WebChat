## Setup new bot

1. To setup new bot, create branch from tag `canon-master-stable` with name `${bot-name}-master`
2. Change Name: replace all `title` of `localizedStrings` in `src/String.ts`
3. Change brand color in `src/scss/includes/colors.scss`
4. Change Directline secret code in `src/App.tsx`

Run project
1. `yarn start` --> serve website
2. `yarn dev` --> starting development
3. `yarn build` --> build
