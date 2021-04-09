import { BUTTON_CLICK } from "./constants";

export default function buttonClicked(value) {
    return {
        type: BUTTON_CLICK,
        payload: value
    }
};

 