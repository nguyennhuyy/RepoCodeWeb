import { ERROR } from "~/redux/actionsType";

export const errorDispatchSubmit = payload => ({
	type: ERROR.ERROR_DISPATCH.HANDLER,
	payload
});
