import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "maxPage": "4",
    "components": [
        {
            "componentType": "RosterForLoop",
            "id": "nb",
            "page": "1",
            "label": {
                "type": "VTL",
                "value": '"Ajouter un habitant"',
            },
            "headers": [
                {
                    "headerCell": true,
                    "label": '"Prénom"',
                },
                {
                    "headerCell": true,
                    "label": '"Age"',
                },
            ],
            "controls": [
                {
                    "type": "ROW",
                    "criticality": "ERROR",
                    "errorMessage": {
                        "type": "VTL|MD",
                        "value": '"Row level : Age doit être > 18 "',
                    },
                    "typeOfControl": "FORMAT",
                    "control": {
                        "type": "VTL",
                        "value": "AGES > 18",
                    },
                    "id": "kfxmjupm-CI-0",
                },
                {
                    "criticality": "ERROR",
                    "errorMessage": {
                        "type": "VTL|MD",
                        "value": '"Global level : Vous devez entrer 3 personnes min "',
                    },
                    "typeOfControl": "FORMAT",
                    "control": {
                        "type": "VTL",
                        "value": "NB >= 3",
                    },
                    "id": "kfxmjupm-CI-1",
                },
            ],
            "components": [
                {
                    "componentType": "Input",
                    "maxLength": 30,
                    "id": "prenoms",
                    "response": {
                        "name": "PRENOMS",
                    },
                },
                {
                    "componentType": "InputNumber",
                    "maxLength": 30,
                    "id": "ages",
                    "controls": [
                        {
                            "criticality": "ERROR",
                            "errorMessage": {
                                "type": "VTL|MD",
                                "value": '"Age doit être > 18 "',
                            },
                            "typeOfControl": "FORMAT",
                            "control": {
                                "type": "VTL",
                                "value": "AGES > 18",
                            },
                            "id": "kfxmjupm-CI-0",
                        },
                    ],
                    "response": {
                        "name": "AGES",
                    },
                },
            ],
        },
        {
            "componentType": "Sequence",
            "response": {
                "name": "NB",
            },
            "id": "nb",
            "page": "2",
            "label": {
                "type": "VTL",
                "value": '"Fin"',
            },
        },
    ],
    "variables": [
        {
            "variableType": "CALCULATED",
            "expression": {
                "type": "VTL",
                "value": "count(PRENOMS)",
            },
            "name": "NB",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": ["John", "Jane"],
                "EDITED": null,
                "INPUTTED": null,
                "FORCED": null,
                "PREVIOUS": null,
            },
            "name": "PRENOMS",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": [10, 12],
                "EDITED": null,
                "INPUTTED": null,
                "FORCED": null,
                "PREVIOUS": null,
            },
            "name": "AGES",
        },
    ],
} as any;
