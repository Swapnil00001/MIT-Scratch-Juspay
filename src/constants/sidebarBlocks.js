import React from 'react';

// Colors for motion and control categories
export const motionColor = {
    bgColor: "bg-yellow-500",
    textColor: "text-white",

};

export const controlColor = {
    bgColor: "bg-blue-500",
    textColor: "text-white",
};

// Action types for motion and control blocks
export const MOVE_STEPS = "MoveSteps";
export const TURN_DEGREES = "TurnDegrees";
export const GO_TO = "GoTo";
export const REPEAT = "Repeat";

// Motion and control configurations
export default {
    Motion: [
        {
            text: 'Move __ steps',
            type: MOVE_STEPS,
            defaultPayload: { steps: 10 },
        },
        {
            text: 'Turn __ degrees',
            type: TURN_DEGREES,
            defaultPayload: { degree: -15 },
        },
        {
            text: "Go To x:__ y: __",
            type: GO_TO,
            defaultPayload: { x: 100, y: 100 },
        },
    ],
    Control: [
        {
            text: "Repeat Animation",
            type: REPEAT,
            defaultPayload: {},
        },
    ],
};
