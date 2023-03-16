import { BoxLoader, Loader, ItemOne, ItemTwo, ItemThree } from "./styles";
const WebLoading = () => {
	return (
		<BoxLoader>
			<Loader>
				<ItemOne></ItemOne>
				<ItemTwo></ItemTwo>
				<ItemThree></ItemThree>
			</Loader>
		</BoxLoader>
	);
};

export default WebLoading;
