import { Orchestrator } from "../Orchestrator";

import { source } from "./default";
import { source as questionSource } from "./question";

import type { StoryObj, Meta } from "@storybook/react";

const meta = {
    title: "Components/Input",
    component: Orchestrator,
    parameters: {
        docs: {
            description: {
                component:
                    "This component should be used when you want the user to enter a string. You can add a maxLength property if you want to restrict the number of characters the user can enter.",
            },
        },
    },
} satisfies Meta<typeof Orchestrator>;

export default meta;

type Story = StoryObj<typeof Orchestrator>;

export const Default = {
    args: { source: source },
} satisfies Story;

export const Question = {
    args: { source: questionSource },
} satisfies Story;
