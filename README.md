## Deriv SmartTrader

[![Coverage Status](https://coveralls.io/repos/github/deriv-com/smarttrader/badge.svg)](https://coveralls.io/github/deriv-com/smarttrader)

This repository contains the content of the [Deriv SmartTrader](https://smarttrader.deriv.com/) website.

---

##Commit Message Convention
For our **Commit Message Format** we are using [Angular Commit Format Reference Sheet](https://gist.github.com/brianclements/841ea7bffdb01346392c).

-   **build:** Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
-   **ci:** Changes to our CI configuration files and scripts (examples: CircleCi, SauceLabs)
-   **docs:** Documentation only changes
-   **feat:** A new feature
-   **fix:** A bug fix
-   **perf:** A code change that improves performance
-   **refactor:** A code change that neither fixes a bug nor adds a feature
-   **test:** Adding missing tests or correcting existing tests

---

##Storybook
We use [storybook](https://storybook.js.org/) for documenting our components. You can run storybook by running the following command:

`npm run storybook`

if you want to add a new story, you can add it in the `stories` folder. For more information on how to write stories, please refer to the [storybook documentation](https://storybook.js.org/docs/basics/writing-stories/).

Example:

```
import type { Meta, StoryObj } from '@storybook/react';

/** import your component */
import { Button } from '../src/components/ui/button';

/** add meta data */
const meta: Meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        //here you can add the props of your component and their types like radio, text, etc.
    },
};
export default meta;

/** add your story */
type TButtonStory = StoryObj<typeof meta>;

export const Primary: TButtonStory = {
    args: {
        //here you can add the props of your component and their default values
    },
};

```

please check [stories/Button.stories.ts](https://github.com/deriv-com/smarttrader/blob/8e21be456752e74f530f32266cf49f7847dcbad9/stories/Button.stories.ts) for a complete example.
