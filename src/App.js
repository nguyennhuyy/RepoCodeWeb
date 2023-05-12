import RootRouter from "~/router";
import useSelectorShallow from "~/hooks/useSelectorShallow";
import { getIsLoadingSelector } from "~/redux/selectors/loadingSelector";
import WebLoading from "~/components/WebLoading";
import {
	isToastOtherSelector,
	otherSelector
} from "./redux/selectors/otherSelector";
import WebToast from "./components/WebToast";

function App() {
	const isLoading = useSelectorShallow(getIsLoadingSelector);
	const isToast = useSelectorShallow(isToastOtherSelector);
	const dataToast = useSelectorShallow(otherSelector);

	return (
		<>
			<RootRouter />
			{isLoading && <WebLoading />}
			{isToast && <WebToast title={dataToast?.title} type={dataToast?.type} />}
		</>
	);
}

export default App;
