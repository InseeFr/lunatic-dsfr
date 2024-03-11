import { Orchestrator } from "stories/utils/Orchestrator";
import { source, data } from "./default";
import { source as lockedSource, data as lockedData } from "./locked";
import type { StoryObj, Meta } from "@storybook/react";

import defaultArgTypes from "../utils/default-arg-types";

const meta: Meta<typeof Orchestrator> = {
    title: "Components/Roundabout",
    component: Orchestrator,
    argTypes: defaultArgTypes,
    parameters: {
        docs: {
            description: {
                story: "This component allows you to give additional information to the user on why we are asking him a question. Users like to know why they should give an information and how it will be used. In an orchestrator, it would be displayed after the continue button and before the footer so it doesn't interfer with the form if the user doesn't want to read it.",
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default: Story = {
    parameters: {
        docs: {
            description: {
                story: "If the locked props is set to true then the user cannot reenter in an iteration that has been completed.",
            },
        },
    },
    args: { source: source, data: data },
};

export const RoundaboutWithLockedSetToFalse: Story = {
    parameters: {
        docs: {
            description: {
                story: "If the locked props is set to false then the user can reenter in an iteration even if it has already been completed.",
            },
        },
    },
    args: { source: lockedSource, data: lockedData },
};
