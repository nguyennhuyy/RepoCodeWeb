import {
	HomeWrapper,
	Banner,
	BoxBanner,
	BannerLeft,
	Image,
	BoxSubTitle,
	ItemBrush,
	PositionText,
	BannerRight,
	BoxUpload,
	UrlUpload
} from "./styles";
import BannerImg from "~/assets/images/Banner.png";
import WebHeading from "~/components/WebHeading";
import WebText from "~/components/WebText";
import { DecoBrush } from "~/assets/path";
import { Button } from "@mui/material";
const HomeScreen = () => {
	return (
		<HomeWrapper>
			<Banner>
				<BoxBanner>
					<BannerLeft>
						<Image src={BannerImg} />
						<WebHeading fontSize={58} fontWeight={600} margin={"0 0 0 0"}>
							Remove Image Background
						</WebHeading>
						<BoxSubTitle>
							<WebText fontSize={20} fontWeight={500}>
								100% Automatically and
							</WebText>
							<ItemBrush>
								<PositionText>
									<WebText fontSize={20} fontWeight={500}>
										Free
									</WebText>
								</PositionText>

								<DecoBrush />
							</ItemBrush>
						</BoxSubTitle>
					</BannerLeft>
					<BannerRight>
						<BoxUpload>
							<Button
								variant='contained'
								sx={{
									borderRadius: 9999,
									fontSize: 22,
									textTransform: "none"
								}}>
								Upload Image
							</Button>
							<UrlUpload>
								<WebText fontSize={18} fontWeight={500} margin={"0"}>
									or drop a file,
								</WebText>
								<WebText fontSize={13} margin={"5px 0 0 0 "}>
									paste image or URL
								</WebText>
							</UrlUpload>
						</BoxUpload>
					</BannerRight>
				</BoxBanner>
			</Banner>
		</HomeWrapper>
	);
};

export default HomeScreen;
