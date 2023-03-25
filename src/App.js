import RootRouter from "~/router";
import useSelectorShallow from "~/hooks/useSelectorShallow";
import { getIsLoadingSelector } from "~/redux/selectors/loadingSelector";
import WebLoading from "~/components/WebLoading";

function App() {
	const isLoading = useSelectorShallow(getIsLoadingSelector);

	return (
		<>
			<RootRouter />
			{isLoading && <WebLoading />}
		</>
	);
}

export default App;
