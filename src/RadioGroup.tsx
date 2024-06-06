import { getErrorStates } from "./utils/errorStates";
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { RadioButtons } from "@codegouvfr/react-dsfr/RadioButtons";
import { useId } from "react";
import Input from "@codegouvfr/react-dsfr/Input";

export const RadioGroup: LunaticSlotComponents["RadioGroup"] = props => {
    const { options, label, description, errors, disabled, readOnly } = props;

    const id = useId();
    /**
     * Note that the error message ID follows the format `${id}-messages` because this is the convention used by the underlying library react-dsfr
     * See: https://github.com/codegouvfr/react-dsfr/blob/4c41367febcb78307f261df1b761fedb52c8a905/src/shared/Fieldset.tsx#L101
     */
    const errorMessageId = `${id}-messages`;

    const { state, stateRelatedMessage } = getErrorStates(errors);

    console.log(options);
    return (
        <RadioButtons
            id={id}
            legend={label}
            hintText={description}
            disabled={disabled || readOnly}
            options={options.map(option => {
                const displayArbitraryInput = !!option.onDetailChange && option.checked;
                return {
                    label: <span>{option.label}</span>,
                    hintText: displayArbitraryInput ? (
                        <>
                            {option.description}
                            <Input
                                label={option.detailLabel}
                                nativeInputProps={{
                                    id: "detailId",
                                    value: (option.detailValue as string) ?? "", //TODO Delete cast when https://github.com/InseeFr/Lunatic/pull/1025 is merged
                                    onChange: e => option.onDetailChange!(e.target.value), //can't be undefined if displayArbitraryInput is true
                                }}
                            />
                        </>
                    ) : (
                        option.description
                    ),
                    nativeInputProps: {
                        checked: option.checked,
                        onChange: option.onCheck,
                        ...(state === "error"
                            ? { "aria-invalid": true, "aria-errormessage": errorMessageId }
                            : {}),
                    },
                };
            })}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
        />
    );
};
